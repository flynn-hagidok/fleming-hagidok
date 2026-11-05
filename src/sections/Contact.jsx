import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';
import { socialLinks } from '../data/socials';
import { useState } from 'react';

const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState({
        type: "",
        message: ""
    })

    const handleForm = async (e) => {
        e.preventDefault();

        // আগের feedback clear করবে
        setFeedback({
            type: "",
            message: ""
        });

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        // name validation
        if (name.length < 2 || name.length > 30) {
            setFeedback({
                type: "error",
                message: "Name must be at least 2 characters and not more than 30."
            });
            return;
        };

        // subject validation
        if (subject.length < 2 || subject.length > 30) {
            setFeedback({
                type: "error",
                message: "subject must be at least 2 characters and not more than 30."
            });
            return;
        };

        // email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setFeedback({
                type: "error",
                message: "Please enter a valid email address"
            })
            return;
        }

        // message validation 
        if (message.length < 10) {
            setFeedback({
                type: "error",
                message: "Message must be at least 10 characters."
            });
            return;
        }
        if (message.length > 3000) {
            setFeedback({
                type: "error",
                message: "Message cannot exceed 3000 characters."
            });
            return;
        }

        const formData = {
            name, email, message, subject
        }

        try {
            setLoading(true);
            const response = await fetch("https://fleming-hagidok.onrender.com/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Message sending failed")
            }

            setFeedback({
                type: "success",
                message: result.notificationSent === false ?
                    "Message saved, but email notification failed."
                    :
                    "Message sent successfully!"
            })

            form.reset();

        } catch (error) {
            console.error("Error:", error);

            setFeedback({
                type: "error",
                message: error.message || "Something went wrong!"
            });

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="text-center">
                <h2 className="text-2xl lg:text-4xl font-semibold text-[#0F172A]">Let's Work Together</h2>
                <p className="text-[#64748B] text-sm lg:text-base mt-4">Have a project in mind? Let's discuss how we can work together.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                {/* contact info */}
                <div>
                    <h2 className="text-xl font-semibold text-[#0F172A]">Contact Information</h2>
                    <div className="mt-6 space-y-2">
                        <a
                            href="tel:+8801870544449"
                            className="flex items-center gap-3 font-semibold text-[#0F172A]"
                        >
                            <FaPhone className="text-[#0D9488]" />
                            +880 1870-544449
                        </a>
                        <a
                            href="mailto:flynnhagidok@gmail.com"
                            className="flex items-center gap-3 font-semibold text-[#0F172A]"
                        >
                            <FaEnvelope className="text-[#0D9488]" />
                            flynnhagidok@gmail.com
                        </a>
                        <p className="flex items-center gap-3 font-semibold text-[#0F172A]">
                            <FaMapMarker className="text-[#0D9488]" />
                            Sylhet, Bangladesh
                        </p>
                        <div className='flex gap-6 items-center mt-6'>
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.name}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-[#0D9488] transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* client form */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-[#0F172A]">Send Me a Message</h2>
                    <form onSubmit={handleForm}>
                        <div className="flex gap-4">
                            <div className="w-1/2 mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-[#0F172A] font-semibold"
                                >
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    className="border rounded w-full px-2 py-1 mt-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="w-1/2">
                                <label
                                    htmlFor="email"
                                    className="block text-[#0F172A] font-semibold"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="border rounded w-full px-2 py-1 mt-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-[#0F172A] font-semibold"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                className="border rounded w-full px-2 py-1 mt-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className='mt-3'>
                            <label
                                htmlFor="message"
                                className="block text-[#0F172A] font-semibold"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Your message"
                                className="w-full h-26 mt-2 border rounded px-2 py-1 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                required
                            ></textarea>
                        </div>

                        {/* feedback message */}
                        {
                            feedback.message && (
                                <p className={`mt-3 text-sm font-medium ${feedback.type === "success" ? "text-green-600" : "text-red-600"}`}>
                                    {feedback.message}
                                </p>
                            )
                        }

                        <button type="submit"
                            disabled={loading}
                            className="mt-6 bg-[#0D9488] text-[#ffff] font-semibold px-4 py-2 rounded-md cursor-pointer active:scale-98 w-full disabled:cursor-not-allowed"
                        >
                            {
                                loading ? "Sending..." : "Send Message"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;