import { FaArrowDown } from 'react-icons/fa';
import { education } from "../data/education";
import ScrollReveal from '../components/ui/ScrollReveal';

const About = () => {
    return (
        <div className="mx-auto max-w-7xl py-10 px-6">
            {/* section heading */}
            <div className='text-center space-y-2'>
                <h2 className='font-bold text-2xl md:text-4xl text-[#0F172A]'>ABOUT ME</h2>
                <p className='text-xl font-bold text-[#0D9488]'>Get To Know Me Better</p>
                <p className='text-[#64748B] text-sm lg:text-base'>Learn more about my journey, skills, and passion for web development</p>
            </div>

            {/* about me */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mt-12'>
                <ScrollReveal>
                    <div>
                        <div className='space-y-2'>
                            <p className='inline-flex bg-teal-100 px-3 py-1 rounded-3xl font-bold text-[#0D9488]'>WHO AM I</p>
                            <h2 className='text-2xl lg:text-3xl text-[#0F172A] font-bold'>I'm Fleming Hagidok</h2>
                            <h3 className="text-[#0D9488] text-2xl lg:text-3xl font-semibold">Full Stack Developer</h3>
                        </div>
                        <div className='my-4 space-y-2 text-[#64748B] text-sm lg:text-base'>
                            <p>I'm a passionate full-stack web developer focused on building modern, responsive, and user-friendly web applications.</p>
                            <p>I enjoy turning ideas into functional digital experiences using technologies like React, Node.js, Express.js, and MongoDB.</p>
                            <p>My goal is to continuously improve my development skills and create meaningful solutions that solve real-world problems.</p>
                        </div>
                        <a
                            href='/resume.pdf'
                            download="Fleming-Hagidok-Resume.pdf"
                            className='inline-flex items-center gap-2 rounded-md font-semibold px-4 py-2 bg-[#0D9488] text-white text-lg cursor-pointer active:scale-98'>Resume <FaArrowDown size={18} /></a>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className=''>
                        <p className='inline-flex bg-teal-100 px-3 py-1 rounded-3xl font-bold text-[#0D9488]'>MY BACKGROUND</p>
                        <h2 className='text-2xl font-bold text-[#0F172A] mt-2'>EDUCATION</h2>
                        <div className="relative mt-8 ml-2 border-l-2 border-teal-200 pl-8">
                            {
                                education.map(item =>
                                    <div
                                        key={item.id}
                                        className='mt-6 space-y-4 relative'
                                    >
                                        <span className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-[#0D9488] ring-2 ring-teal-200" />
                                        <div>
                                            <p className="inline-block rounded-2xl bg-teal-100 px-3 py-1 text-sm font-bold text-[#0D9488]">{item.year}</p>
                                            <p className='text-lg font-semibold text-[#0F172A] my-1'>{item.degree}</p>
                                            <p className='text-[#0D9488] font-semibold'>GPA: {item.gpa}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default About;