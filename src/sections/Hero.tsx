import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";

const Hero: FC = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
        <div className="container !max-w-full">
        <h1 className="text-5xl lg:text-7xl md:text-6xl mt-40 md:mt-0">Crafting digital experinces through code and creative design</h1>
        <div className="flex flex-col mt-10 items-start gap-6 md:flex-row md:items-center">
        <Button variant="secondary" iconAfter={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>}>
          <span>View My Work</span>
        </Button>
        <Button variant="text">Let&apos;s Talk</Button>
        </div>
      </div>
        </div>
        <div className="col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
          <Image src={heroImage} alt="My Potrait" className="h-full object-cover" />
      </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
