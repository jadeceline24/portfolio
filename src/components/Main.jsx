import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import img1 from '../assets/Alien.png';
import img2 from '../assets/Avocado.png';
import img3 from '../assets/Cherry Blossom.png';
import img4 from '../assets/Dog Face.png';
import img5 from '../assets/Face With Tears Of Joy.png';
import img6 from '../assets/Flag Philippines.png';
import img7 from '../assets/Ghost.png';
import img8 from '../assets/Globe Showing Asia Australia.png';
import img9 from '../assets/Panda.png';
import img10 from '../assets/Pizza.png';
import img11 from '../assets/Red Heart.png';
import img12 from '../assets/Smiling Face With Halo.png';
import img13 from '../assets/Smiling Face With Heart Eyes.png';
import img14 from '../assets/Smiling Face With Horns.png';
import img15 from '../assets/Star.png';
import '../styles/Main.scss';
import { gsap } from 'gsap';

const Main = () => {
  const wrap = useRef();
  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(['.title', '.moving-text', '.info', '.time', '.scroll', '.circle'], {
        duration: 0.5,
        y: -80,
        ease: 'power2',
        stagger: {
          amount: 0.8
        },
        delay: 0.3
      }).to(['.title', 'moving-.text', '.info', '.time', '.scroll', '.circle'], {
        y: 0,
        duration: 0.2,
        ease: 'power2'
      });
    }, wrap); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  const [mytime, setMytime] = useState(null);

  useEffect(() => {
    const img = Array.from(document.getElementsByClassName('image'));
    let globalIndex = 0;
    let last = { x: 0, y: 0 };

    const activate = (imgs, x, y) => {
      imgs.style.left = `${x}px`;
      imgs.style.top = `${y}px`;
      imgs.dataset.status = 'active';
      last = { x, y };
    };
    const distanceFromLast = (x, y) => {
      return Math.hypot(x - last.x, y - last.y);
    };
    window.onmousemove = (e) => {
      if (distanceFromLast(e.clientX, e.clientY) > 80) {
        const lead = img[globalIndex % img.length];
        const tail = img[(globalIndex - 1) % img.length];

        activate(lead, e.clientX, e.clientY);

        if (tail) tail.dataset.status = 'inactive';

        globalIndex++;
      }
    };
    const d = new Date();
    const h = addZero(d.getUTCHours() + 8);
    const m = addZero(d.getUTCMinutes());
    const time = h + ':' + m;
    setMytime(time);
  }, []);

  // TIME FUNCTIONS

  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  return (
    <div className="main">
      <img src={img1} alt="" data-index="0" data-status="inactive" className="image" />
      <img src={img2} alt="" data-index="1" data-status="inactive" className="image" />
      <img src={img3} alt="" data-index="2" data-status="inactive" className="image" />
      <img src={img4} alt="" data-index="3" data-status="inactive" className="image" />
      <img src={img5} alt="" data-index="4" data-status="inactive" className="image" />
      <img src={img6} alt="" data-index="5" data-status="inactive" className="image" />
      <img src={img7} alt="" data-index="6" data-status="inactive" className="image" />
      <img src={img8} alt="" data-index="7" data-status="inactive" className="image" />
      <img src={img9} alt="" data-index="8" data-status="inactive" className="image" />
      <img src={img10} alt="" data-index="9" data-status="inactive" className="image" />
      <img src={img11} alt="" data-index="10" data-status="inactive" className="image" />
      <img src={img12} alt="" data-index="11" data-status="inactive" className="image" />
      <img src={img13} alt="" data-index="12" data-status="inactive" className="image" />
      <img src={img14} alt="" data-index="13" data-status="inactive" className="image" />
      <img src={img15} alt="" data-index="14" data-status="inactive" className="image" />

      <div className="container" ref={wrap}>
        <div className="header-title">
          <h1 className="title">
            FRONTEND
            <br />
            WEB DEVELOPER
          </h1>
          <div className="moving-text">
            <span className="text">
              {' '}
              - KUMUSTA - HELLO - Bonjour - Ciao - Olá - HALLO - Hallå - Guten tag - おい - KUMUSTA
              - HELLO - Bonjour - Ciao - Olá - HALLO - Hallå - Guten tag - おい - KUMUSTA - HELLO -
              Bonjour - Ciao - Olá - HALLO - Hallå - Guten tag - おい{' '}
            </span>
          </div>
        </div>

        <div className="header-text">
          <div className="text-left">
            <h2 className="info">
              JADE CELINE TAPAWAN IS A FRONTEND WEB DEVELOPER BASED IN CAVITE, PHILIPPINES, WORKING
              WITH CLIENTS WORLDWIDE.
            </h2>
          </div>
          <div className="time">
            MY LOCAL TIME {mytime}
            <p>GMT (+8)</p>
          </div>
          <div className="text-right">
            <p className="scroll">Scroll to Explore</p>
            <span className="circle">
              <AiOutlineArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
