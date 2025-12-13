'use client'
import Image from "next/image";
import Lanyard from "./component/Lanyard";
import RotatingText from "./component/RotatingText";
import BlurText from "./component/BlurText";
import RippleGrid from "./component/RippleGrid";
import Dock from "./component/Dock";
import { VscHome } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc"; 
import ClickSpark from "./component/ClickSpark";
import { Timeline } from "./component/Timelines/Timelines";
import InfiniteMenu from "./component/InfiniteMenu";
import GlitchText from "./component/GlitchText";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from "./component/LogoLoop";
import { FaSquareGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and Launched Dynamic Project 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/img/project4.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/assets/img/project1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/assets/img/project5.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/assets/img/project3.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/img/project6.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/assets/img/tokoku.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/assets/img/project2.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: '',
    description: 'This is pretty cool, right?'
  }
];

export default function Home() {
  return (
  <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
    

  {/* RippleGrid sebagai background */}
  <div className="absolute inset-0">
    <RippleGrid
      enableRainbow={true}
      gridColor="#ffffff"
      rippleIntensity={0.05}
      gridSize={10}
      gridThickness={15}
      mouseInteraction={false}
      mouseInteractionRadius={0.8}
      opacity={0.8}
    />
  </div>

  {/* Konten di dalam background */}
  <div className="relative z-10 container mx-auto h-screen border p-6">

    <div className="grid grid-cols-12 text-white h-full">
      <div className="col-span-6 flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-white font-bold ">I'm Ready For Job</h1>

          <RotatingText
            texts={['Web Development', 'FullStack', 'Backend', 'FrontEnd']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#2C07FD] text-black overflow-hidden 
            py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>


        <BlurText
          text="Lutfi Amwan Doli Siregar"
          delay={50}
          animateBy="words"
          direction="top"
          className="text-6xl mb-8"
        />
        <p className="text-lg text-gray-300 max-w-xl mb-6">
  A passionate Web Developer focused on creating modern, high-performance,
  and user-friendly digital experiences. Experienced in building fullstack
  applications, interactive interfaces, and scalable systems.
</p>

        <div className="flex">
      <a
  href="https://github.com/lutfiamwandoli"
  target="_blank"
  className="inline-block p-2 rounded-lg hover:bg-white/10 transition"
>
  <FaSquareGithub className="text-4xl" />
</a><a
  href="https://linkedin.com/in/lutfi-amwan-doli-siregar-496359379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  target="_blank"
  className="inline-block p-2 rounded-lg hover:bg-white/10 transition"
>
  <CiLinkedin className="text-4xl" />
</a>
</div>

      </div>
      

      <div className="col-span-6 flex justify-center items-center">
        <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
      </div>
    </div>
<div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
    </div>
  </div>
  


<Timeline data={data}/>
     <div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
{/* Footer */}
<footer className="relative z-10 w-full py-8 bg-[#0f1520] text-white mt-20 border-t border-white/10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="text-sm opacity-80">
      © {new Date().getFullYear()} Lutfi Amwan Doli Siregar
    </div>

    <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
      <a
        href="mailto:lutfiamwandoli@gmail.com"
        className="hover:text-blue-400 transition"
      >
        📧 Email: <span className="font-medium">lutfiamwandoli@gmail.com</span>
      </a>

      <a
        href="https://wa.me/6282288471175"
        target="_blank"
        className="hover:text-green-400 transition"
      >
        📱 Telepon: <span className="font-medium">0822-8847-1175</span>
      </a>
    </div>
  </div>
</footer>

    </div>  
    
  );
}
