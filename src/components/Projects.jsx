import React, { useLayoutEffect, useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import '../styles/Projects.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import product from '../assets/product.gif';
import insta from '../assets/Instagram post.png';
import laptop from '../assets/laptop.webm';
import refresh from '../assets/refresh.webm';
import lou from '../assets/lou.gif';
import zorca from '../assets/zorca1.gif';
import james from '../assets/photo1.gif';
import james2 from '../assets/photo2.png';
import james3 from '../assets/photo3.png';
import line from '../assets/line.png';
import bgwhite from '../assets/white-bg.png';
import agency from '../assets/agency.gif';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const wrap = useRef();
  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
    let ctx = gsap.context(() => {
      gsap.to('.wrap__name', {
        scale: 0.28,
        scrollTrigger: {
          trigger: '.wrap__name',
          start: 'top +40%',
          end: 'bottom top',
          pin: true,
          scrub: true
        }
      });

      const tl = gsap.timeline();
      const link1 = document.querySelector('.link1');
      link1.addEventListener('mouseover', onMouseOver);
      link1.addEventListener('mouseout', onMouseOut);
      function onMouseOver() {
        tl.to('.first, .bg-first', {
          opacity: 1
        });
      }
      function onMouseOut() {
        tl.to('.first, .bg-first', {
          opacity: 0
        });
      }
      const link2 = document.querySelector('.link2');
      link2.addEventListener('mouseover', onMouseOver2);
      link2.addEventListener('mouseout', onMouseOut2);
      function onMouseOver2() {
        tl.to('.sec, .bg-sec', {
          opacity: 1
        });
      }
      function onMouseOut2() {
        tl.to('.sec, .bg-sec', {
          opacity: 0
        });
      }

      const link3 = document.querySelector('.link3');
      link3.addEventListener('mouseover', onMouseOver3);
      link3.addEventListener('mouseout', onMouseOut3);
      function onMouseOver3() {
        tl.to('.third, .bg-third', {
          opacity: 1
        });
      }
      function onMouseOut3() {
        tl.to('.third, .bg-third', {
          opacity: 0
        });
      }
      const link4 = document.querySelector('.link4');
      link4.addEventListener('mouseover', onMouseOver4);
      link4.addEventListener('mouseout', onMouseOut4);
      function onMouseOver4() {
        tl.to('.fourth, .bg-fourth', {
          opacity: 1
        });
      }
      function onMouseOut4() {
        tl.to('.fourth, .bg-fourth', {
          opacity: 0
        });
      }

      const link5 = document.querySelector('.link5');
      link5.addEventListener('mouseover', onMouseOver5);
      link5.addEventListener('mouseout', onMouseOut5);
      function onMouseOver5() {
        tl.to('.fifth, .bg-fifth', {
          opacity: 1
        });
      }
      function onMouseOut5() {
        tl.to('.fifth, .bg-fifth', {
          opacity: 0
        });
      }
    }, wrap); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div className="wrap" ref={wrap}>
      <div className="wrap__title" id="wrap__title">
        <h5 className="wrap__name">Projects</h5>
      </div>

      <div className="projects">
        <div className="projects__wrapper">
          <div className="title">
            <h3 className="name link1">
              <a href="https://lapize.netlify.app/" target="_blank">
                Lavine Skincare
                <span className="icon">
                  <BsArrowRight />
                </span>
              </a>
            </h3>

            <h3 className="name link2">
              <a href="https://zorca-nfts.netlify.app/" target="_blank">
                Zorca NFT's
                <span className="icon">
                  <BsArrowRight />
                </span>
              </a>
            </h3>
            <h3 className="name link3">
              <a href="https://james-photograph.netlify.app/" target="_blank">
                James Studio
                <span className="icon">
                  <BsArrowRight />
                </span>
              </a>
            </h3>
            <h3 className="name link4">
              <a href="https://lou-furniture.netlify.app/" target="_blank">
                Lou Furniture
                <span className="icon">
                  <BsArrowRight />
                </span>
              </a>
            </h3>
            <h3 className="name link5">
              <a href="https://musixxrecord.netlify.app/" target="_blank">
                Musix xRecord
                <span className="icon">
                  <BsArrowRight />
                </span>
              </a>
            </h3>
          </div>
          <div className="bg-first">
            <div className="bg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#EDE0D4"
                  fill-opacity="1"
                  d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,192C672,171,768,117,864,101.3C960,85,1056,107,1152,133.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
            </div>
            <div className="bg-down">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#EDE0D4"
                  fill-opacity="1"
                  d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,224C672,224,768,160,864,154.7C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="560"
                preserveAspectRatio="none"
                viewBox="0 0 1440 460">
                <g mask='url("#SvgjsMask1081")' fill="none">
                  <path
                    d="M 0,221 C 57.6,235.4 172.8,320.2 288,293 C 403.2,265.8 460.8,70.2 576,85 C 691.2,99.8 748.8,334 864,367 C 979.2,400 1036.8,252.6 1152,250 C 1267.2,247.4 1382.4,333.2 1440,354L1440 560L0 560z"
                    fill="rgba(237, 224, 212, 1)"></path>
                </g>
                <defs>
                  <mask id="SvgjsMask1081">
                    <rect width="1440" height="560" fill="#ffffff"></rect>
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
          <div className="bg-sec">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="1440"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 1440 560">
              <g mask='url("#SvgjsMask1008")' fill="none">
                <path
                  d="M1091.25-66.06C975.26-56.54 897.74 176.95 694.8 177.97 491.85 178.99 496.57 107.97 298.34 107.97 100.12 107.97 2.54 177.7-98.11 177.97"
                  stroke="rgba(51,121,194,0.58)"
                  stroke-width="2"></path>
                <path
                  d="M834.23-27.69C716.18 16.02 790.28 353.61 526.31 370.71 262.33 387.81 67.2 487.79-89.54 488.31"
                  stroke="rgba(51,121,194,0.58)"
                  stroke-width="2"></path>
                <path
                  d="M1062.39-93.3C965.4-92.35 982.61 5.86 688.43 10.07 394.26 14.28 137.8 258.71-59.48 262.07"
                  stroke="rgba(51,121,194,0.58)"
                  stroke-width="2"></path>
                <path
                  d="M813.21-5.63C664.37 66.48 733.64 545.72 452.09 548.69 170.54 551.66-79.39 305.65-270.14 302.29"
                  stroke="rgba(51,121,194,0.58)"
                  stroke-width="2"></path>
                <path
                  d="M909.11-78.1C735.3-61.24 620.88 306.47 326.33 306.93 31.77 307.39-101.39 97.42-256.46 94.13"
                  stroke="rgba(51,121,194,0.58)"
                  stroke-width="2"></path>
              </g>
              <defs>
                <mask id="SvgjsMask1008">
                  <rect width="1440" height="560" fill="#ffffff"></rect>
                </mask>
              </defs>
            </svg>
          </div>
          <div className="bg-third">
            <div className="bg-gradient"></div>
            <div className="green">
              <img src={line} alt="" />
            </div>
            <div className="green2">
              <img src={line} alt="" />
            </div>
          </div>
          <div className="bg-fourth">
            <div className="bg-white">
              <img src={bgwhite} alt="" />
            </div>
          </div>
          <div className="bg-fifth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 1440 1000">
              <g mask='url("#SvgjsMask1037")' fill="none">
                <path
                  d="M66.67 250C79.93 130.86 -9.78 68.13 40.18 0C81.88 -56.87 145.09 0 250 0C336.39 0 344.15 -20.9 422.79 0C469.15 12.33 463.72 66.46 500 66.46C531.49 66.46 518.87 10.49 558.33 0C643.87 -22.74 654.16 0 750 0C875 0 875 0 1000 0C1125 0 1125 0 1250 0C1375 0 1388.89 -13.89 1500 0C1513.89 1.74 1506.09 17.04 1500 31.25C1452.52 142.04 1392.86 148.38 1392.86 250C1392.86 316.09 1470.91 298.8 1500 366.67C1524.48 423.8 1500 433.34 1500 500C1500 625 1500 625 1500 750C1500 875 1562.5 937.5 1500 1000C1437.5 1062.5 1375 1000 1250 1000C1125 1000 1125 1000 1000 1000C875 1000 875 1000 750 1000C625 1000 625 1000 500 1000C378.85 1000 257.69 1041.79 257.69 1000C257.69 946.91 368.68 885.78 500 810.24C585.99 760.78 670.56 816.84 692.31 750C721.04 661.72 667.09 608.82 600.96 500C570.93 450.59 546 433.54 500 433.54C466.35 433.54 471.3 467.19 441.67 500C346.3 605.6 350.67 610.89 250 710.37C224.17 735.89 216.28 726.26 188.68 750C91.28 833.79 56.12 925.44 0 925.44C-38.22 925.44 0 837.72 0 750C0 625 0 625 0 500C0 430.56 -17.25 425.78 0 361.11C16.09 300.78 59.84 311.41 66.67 250"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M1000 719.3C931.65 727.23 865.38 736.77 865.38 750C865.38 763.06 935.79 750.29 1000 771.88C1128.1 814.95 1148.61 886.5 1250 879.31C1302.9 875.56 1308.59 807.26 1308.59 750C1308.59 720.29 1285.07 708.85 1250 705.36C1130.78 693.5 1123.96 704.91 1000 719.3"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M170.83 250C200.15 133.9 123.35 89.82 151.79 0C162.93 -35.18 200.89 0 250 0C290.44 0 297.63 -19.36 330.88 0C422.63 53.42 420.53 145.57 500 145.57C568.98 145.57 551.14 44.63 627.78 0C676.14 -28.16 688.89 0 750 0C872.22 0 994.44 -44.89 994.44 0C994.44 58.89 872.82 104.51 750 207.55C723.82 229.51 725.81 232.74 696.43 250C600.81 306.18 586.66 287.61 500 354.43C424.55 412.61 436.76 427.79 372.22 500C311.76 567.65 319.27 576.71 250 634.15C168.53 701.71 156.8 687.48 70.75 750C31.8 778.3 21.04 815.79 0 815.79C-14.33 815.79 0 782.89 0 750C0 656.25 -9.38 654.41 0 562.5C3.38 529.41 9.34 529.57 25.51 500C94.76 373.32 137.01 383.9 170.83 250"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M1166.67 250C1170.41 156.18 988.88 69.07 1011.9 0C1030.54 -55.93 1130.95 0 1250 0C1309.53 0 1366.71 -38.18 1369.05 0C1374.37 86.82 1237.48 139.03 1265.31 250C1300.18 389.03 1380.92 374.24 1494.44 500C1498.27 504.24 1499.87 504.31 1500 510C1502.65 629.31 1500 630 1500 750C1500 875 1537.04 912.04 1500 1000C1484.41 1037.04 1408.62 1037.01 1394.74 1000C1361.74 912.01 1446.8 853.38 1406.25 750C1374.43 668.86 1339.2 661.77 1250 630.95C1136.07 591.59 1124.02 627.25 1000 609.65C874.02 591.77 860.55 603.47 750 560C721.12 548.65 721.15 531.21 721.15 500C721.15 451.21 711.19 428.06 750 400C850.62 327.25 873.21 344.03 1000 298.39C1081.54 269.03 1164.46 305.38 1166.67 250"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M353.85 1000C353.85 967.98 420.46 885.54 500 885.54C615.33 885.54 743.59 969.96 743.59 1000C743.59 1027.19 621.8 1000 500 1000C426.92 1000 353.85 1025.21 353.85 1000"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M755.1 1000C755.1 959.52 880.77 850 1000 850C1104.92 850 1203.39 958.44 1203.39 1000C1203.39 1033.44 1101.7 1000 1000 1000C877.55 1000 755.1 1034.52 755.1 1000"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M357.14 250C357.14 237.34 430.57 224.68 500 224.68C525.81 224.68 547.62 237.34 547.62 250C547.62 262.66 525.81 275.32 500 275.32C430.57 275.32 357.14 262.66 357.14 250"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M750 89.62C716.04 89.62 697.22 29.73 697.22 0C697.22 -15.08 723.61 0 750 0C802.78 0 855.56 -19.38 855.56 0C855.56 25.43 795.21 89.62 750 89.62"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M153.06 500C153.06 418.95 211.1 310 250 310C285.96 310 302.78 411.29 302.78 500C302.78 535.25 280.67 557.93 250 557.93C205.81 557.93 153.06 542.91 153.06 500"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M1000 500C1000 455.34 1136.68 384.15 1250 384.15C1314.46 384.15 1355.56 451.14 1355.56 500C1355.56 537.34 1306.61 556.55 1250 556.55C1128.83 556.55 1000 541.54 1000 500"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M450 1000C450 989.04 472.79 960.84 500 960.84C539.45 960.84 583.33 989.72 583.33 1000C583.33 1009.3 541.66 1000 500 1000C475 1000 450 1008.62 450 1000"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
                <path
                  d="M882.65 1000C882.65 980.6 942.87 928.13 1000 928.13C1050.27 928.13 1097.46 980.09 1097.46 1000C1097.46 1016.02 1048.73 1000 1000 1000C941.33 1000 882.65 1016.54 882.65 1000"
                  stroke="rgba(47, 13, 6, 0.6)"
                  stroke-width="2"></path>
              </g>
              <defs>
                <mask id="SvgjsMask1037">
                  <rect width="1440" height="1000" fill="#ffffff"></rect>
                </mask>
              </defs>
            </svg>
          </div>

          <div className="projects__video">
            <div className="video-wrap">
              <div className="first">
                <div className="imageOne">
                  <img src={insta} alt="" />
                </div>
                <div className="videoOne">
                  <video src={laptop} autostart autoPlay muted loop type="video/webm" />
                </div>

                <div className="videoTwo">
                  <video src={refresh} autostart autoPlay muted loop type="video/webm" />
                </div>
                <div className="imageTwo">
                  <img src={product} alt="" />
                </div>
              </div>
              <div className="sec">
                <div className="imageOne">
                  <img src={zorca} alt="" />
                </div>
              </div>
              <div className="third">
                <div className="imageOne">
                  <img src={james} alt="" />
                </div>
                <div className="imageTwo">
                  <img src={james2} alt="" />
                </div>
                <div className="imageThree">
                  <img src={james3} alt="" />
                </div>
              </div>
              <div className="fourth">
                <div className="imageOne">
                  <img src={lou} alt="" />
                </div>
              </div>
              <div className="fifth">
                <div className="imageOne">
                  <img src={agency} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
