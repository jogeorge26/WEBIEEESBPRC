"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change to true to trigger animation only once
    threshold: 0.5,
  });
  const [animation, setAnimation] = useState(false);

  const animateValue = (
    start: number,
    end: number,
    duration: number,
    element: HTMLElement
  ) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(
        progress * (end - start) + start
      ).toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (inView) {
      setAnimation(true);
      const counters = document.querySelectorAll(".counter-value");
      counters.forEach((counter) => {
        const endValue = parseInt(counter.getAttribute("data-count")!, 10);
        animateValue(0, endValue, 3000, counter as HTMLElement);
      });
    }
  }, [inView]);

  return (
    <div className="flex flex-col items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-16 mt-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10 text-center"></h2>
      <section
        ref={ref}
        className="flex flex-wrap gap-12 justify-center md:justify-between md:grid md:grid-cols-4 md:gap-20"
      >
        <article className="countBox flex flex-col items-center text-center">
          <h2>
            <span className="flex tabular-nums text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
              <span className="sr-only">250</span>
              <span className="counter-value text-slate-900" data-count="250">
                +
              </span>
            </span>
            <span className="inline-flex font-semibold mb-2 text-sm md:text-base text-black">
              Members
            </span>
          </h2>
        </article>
        <article className="countBox flex flex-col items-center text-center">
          <h2>
            <span className="flex tabular-nums text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
              <span className="sr-only">15</span>
              <span className="counter-value text-slate-900" data-count="15">
                +
              </span>
            </span>
            <span className="inline-flex font-semibold mb-2 text-black text-sm md:text-base">
              Events
            </span>
          </h2>
        </article>
        <article className="countBox flex flex-col items-center text-center">
          <h2>
            <span className="flex tabular-nums text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
              <span className="sr-only">300</span>
              <span className="counter-value text-slate-900" data-count="300">
                +
              </span>
            </span>
            <span className="inline-flex font-semibold mb-2 text-black text-sm md:text-base">
              Event Participation
            </span>
          </h2>
        </article>
        <article className="countBox flex flex-col items-center text-center">
          <h2>
            <span className="flex tabular-nums text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
              <span className="sr-only">6</span>
              <span className="counter-value text-slate-900" data-count="6">
                +
              </span>
            </span>
            <span className="inline-flex font-semibold text-black mb-2 text-sm md:text-base">
              Awards
            </span>
          </h2>
        </article>
      </section>
    </div>
  );
};

export default Counter;
