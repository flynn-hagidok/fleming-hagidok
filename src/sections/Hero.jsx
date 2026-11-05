import heroImg from "../assets/fleming-hagidok.png"
import { FaArrowRight } from 'react-icons/fa';
import { socialLinks } from "../data/socials";

const Hero = () => (
    <div className="max-w-7xl mx-auto py-10 lg:py-20 md:grid md:grid-cols-2 gap-20 items-center justify-between px-6">
        {/* left section */}
        {/* about me */}
        <div className="space-y-4">
            <div className="space-y-2">
                <p className="bg-teal-100 inline-flex items-center gap-2 text-[#0D9488] px-4 py-2 font-semibold rounded-4xl lg:text-lg">
                    <span className='w-3 h-3 bg-[#0D9488] rounded-full'></span>
                    Hi I'm
                </p>
                <h1 className='font-bold text-3xl lg:text-5xl my-2 text-[#0F172A]'>Fleming Hagidok</h1>
                <h2 className='text-xl lg:text-2xl font-bold text-[#0D9488]'>Full-Stack Web Developer</h2>
                <p className='text-[#64748B] max-w-xl text-sm lg:text-base leading-7'>I create modern, responsive, and user-friendly web applications that help businesses grow. With a passion for clean code and great user experiences, I turn ideas into real products.</p>
            </div>

            {/* CTA btn */}
            <div className='flex flex-wrap gap-4'>
                <a
                    href='#contact'
                    className='flex items-center gap-2 bg-[#0D9488] text-[#ffff] font-semibold px-4 py-2 rounded-md cursor-pointer active:scale-98 transition duration-300 hover:-translate-y-1'>Contact Me <FaArrowRight /> </a>
                <a
                    href='#projects'
                    className='border-2 border-[#0D9488] text-[#0D9488] font-semibold px-4 py-2 rounded-md cursor-pointer active:scale-98 hover:-translate-y-1 transition duration-300'>View My Work</a>
            </div>

            {/* social icon */}
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

        {/* right section */}
        <div className='mt-20 md:mt-0 flex justify-center'>
            <img src={heroImg} alt="Fleming Hagidok - Full-Stack Web Developer"
                className='w-full max-w-[520px] h-auto object-contain'
            />
        </div>
    </div>
);

export default Hero;