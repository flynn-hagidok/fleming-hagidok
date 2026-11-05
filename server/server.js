const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const { MongoClient } = require("mongodb");
const { Resend } = require("resend");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Environment variables load
dotenv.config();
const PORT = process.env.PORT || 3000;
const resend = new Resend(process.env.RESEND_API_KEY);

//email transporter


// Express app create
const app = express();
app.set("trust proxy", 1);

//Secuirity Header 
app.use(helmet());

// Middleware
app.use(express.json({ limit: "10kb" }));
app.use(cors({
    origin: [
        "http://localhost:5173",
        process.env.FRONTEND_URL
    ].filter(Boolean),
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

// Rate Limiting
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: "Too many messages. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false
});

// MongoDB connection
const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zgye7fw.mongodb.net/`);

// Database connect
const connectDB = async () => {
    try {
        await client.connect();
        // Database select
        const db = client.db("Portfolio");
        // Collection select
        const messageCollection = db.collection("messages");

        // Test route
        app.get("/", (req, res) => {
            res.send("Portfolio server is running!");
        });

        //client message post
        app.post("/messages", contactLimiter, async (req, res) => {
            try {
                // Frontend থেকে data গ্রহণ
                const { name, email, subject, message } = req.body;

                // Check data types
                if (
                    typeof name !== "string" ||
                    typeof email !== "string" ||
                    typeof subject !== "string" ||
                    typeof message !== "string"
                ) {
                    return res.status(400).json({
                        success: false,
                        message: "Invalid input data"
                    });
                }

                // Remove unnecessary spaces
                const cleanName = name.trim();
                const cleanEmail = email.trim();
                const cleanSubject = subject.trim();
                const cleanMessage = message.trim();

                // Required fields validation
                if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
                    return res.status(400).json({
                        success: false,
                        message: "All fields are required"
                    });
                }

                // Length validation
                if (cleanName.length < 2 || cleanName.length > 30) {
                    return res.status(400).json({
                        success: false,
                        message: "Name must be between 2 and 30 characters"
                    });
                }

                if (cleanSubject.length < 2 || cleanSubject.length > 30) {
                    return res.status(400).json({
                        success: false,
                        message: "Name must be between 2 and 30 characters"
                    });
                }

                if (cleanEmail.length > 254) {
                    return res.status(400).json({
                        success: false,
                        message: "Email address is too long"
                    });
                }

                // Email format validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(cleanEmail)) {
                    return res.status(400).json({
                        success: false,
                        message: "Please enter a valid email address"
                    });
                }

                if (cleanMessage.length < 10 || cleanMessage.length > 3000) {
                    return res.status(400).json({
                        success: false,
                        message: "Message must be between 10 and 3000 characters"
                    });
                }

                // Message object তৈরি
                const newMessage = {
                    name: cleanName,
                    email: cleanEmail,
                    subject: cleanSubject,
                    message: cleanMessage,
                    createdAt: new Date()
                };

                // MongoDB-তে data save
                const result = await messageCollection.insertOne(newMessage);

                // Email notification
                let notificationSent = true;

                try {
                    const { data, error } = await resend.emails.send({
                        from: "Fleming.Dev <onboarding@resend.dev>",
                        to: [process.env.RECEIVER_EMAIL],
                        replyTo: cleanEmail,
                        subject: cleanSubject,
                        text: `
Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}
        `
                    });

                    if (error) {
                        throw new Error(error.message);
                    }

                    console.log("Email sent successfully:", data.id);

                } catch (emailError) {
                    notificationSent = false;
                    console.error("Email sending failed:", emailError);
                }

                return res.status(201).json({
                    success: true,
                    message: "Message saved successfully!",
                    notificationSent,
                    insertedId: result.insertedId
                });
            } catch (error) {
                console.error("Message save failed:", error);
                res.status(500).json({
                    success: false,
                    message: "Something went wrong"
                });
            }
        });

        // Server start
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
}

connectDB();