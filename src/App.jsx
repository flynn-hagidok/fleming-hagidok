import Navbar from './components/layout/Navbar';
import Projects from './sections/Projects';
import Footer from './components/layout/Footer';
import Skills from './sections/Skills';
import About from './sections/About';
import Hero from './sections/Hero';
import Contact from './sections/Contact';

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <section id="home" className="lg:min-h-screen bg-teal-50">
                    <Hero />
                </section>
                <section id="about" className="lg:min-h-screen">
                    <About />
                </section>
                <section id="projects" className="lg:min-h-screen">
                    <Projects />
                </section>
                <section id="skills" className="lg:min-h-screen">
                    <Skills />
                </section>
                <section id="contact" className="lg:min-h-screen">
                    <Contact />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default App;