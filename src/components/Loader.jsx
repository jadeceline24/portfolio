import React, { useLayoutEffect, useRef } from 'react';
import '../styles/Loader.scss';
import { gsap } from 'gsap';

const Loader = () => {
  const wrap = useRef();
  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
      const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';
      tl.from('.loader-wrap-heading .text', {
        delay: 1,
        y: 200,
        skewY: 10
      }).to('.loader-wrap-heading .text', {
        delay: 1.5,
        y: -200,
        skewY: 10
      });
      tl.to('.svg', {
        duration: 0.8,
        attr: { d: curve },
        ease: 'power2.easeIn'
      }).to('.svg', {
        duration: 0.8,
        attr: { d: flat },
        ease: 'power2.easeOut'
      });
      tl.to('.loader-wrap', {
        y: -1500
      });
      tl.to('.loader-wrap', {
        zIndex: -1,
        display: 'none'
      });
      tl.from(
        '.container',
        {
          y: 100,
          opacity: 0
        },
        '-=1.5'
      );
    }, wrap); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div className="loader-con">
      <div class="loader-wrap" ref={wrap}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" className="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div class="loader-wrap-heading">
          <span className="text-wrap">
            <h1 className="text">Loading</h1>
          </span>
        </div>
      </div>
      <div class="wrapper">
        <span>
          <h1 className="text">Jade Celine.</h1>
        </span>
      </div>
    </div>
  );
};

export default Loader;
