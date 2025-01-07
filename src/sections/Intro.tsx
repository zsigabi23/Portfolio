"use client";

import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span"
    });
  },[scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, scope, animate]);

  return <section className="section lg:mt-20 md:mt-16 mt-12" id="intro" ref={scope}>
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:w-[80%] lg:text-8xl">Building beautiful websites with clean code and thoughtful design to
        help your business grow and stand out from the competition.
      </h2>
    </div>
  </section>
};

export default Intro;
