import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { ImArrowUpRight2 } from 'react-icons/im';
import img from '../assets/Laptop.png';
import fire from '../assets/Fire.png';
import heart from '../assets/Heart On Fire.png';
import '../styles/Footer.scss';

const Footer = () => {
  const [copied, setCopied] = useState('copy email');
  const text = 'jctapawan@gmail.com';

  return (
    <div className="footer container">
      <div className="footer__title">
        <h2>LIKE WHAT YOU SEE?</h2>
      </div>
      <div className="footer__text">
        <div className="footer__wrap">
          <div class="fire small">
            <img src={heart} alt="fire" />
          </div>
          <div class="fire s-medium">
            <img src={fire} alt="fire" />
          </div>
          <div class="fire medium">
            <img src={fire} alt="fire" />
          </div>
          <div class="fire large">
            <img src={heart} alt="fire" />
          </div>
          <div class="fire small-l">
            <img src={heart} alt="fire" />
          </div>
          <div class="fire small-lg">
            <img src={fire} alt="fire" />
          </div>
          <div class="fire small-xl">
            <img src={heart} alt="fire" />
          </div>

          <h2 className="title">GET IN TOUCH</h2>
          <span className="icon-up">
            <ImArrowUpRight2 />
          </span>
        </div>

        <div className="footer__email">
          <div
            className="copytext"
            onClick={() => {
              navigator.clipboard.writeText(text);
              setCopied('copied to clipboard');
            }}>
            {copied}
          </div>
        </div>
      </div>

      <div className="footer__socials">
        <a
          className="link"
          href="https://www.linkedin.com/in/jade-celine-tapawan-388b4898"
          target="_blank"
          data-hover="LINKEDIN">
          LINKEDIN
        </a>
        <a
          className="link"
          href="https://www.instagram.com/jade_celine/"
          target="_blank"
          data-hover="INSTAGRAM">
          INSTAGRAM
        </a>
        <a
          className="link"
          href="https://github.com/jadeceline24/"
          target="_blank"
          data-hover="GITHUB">
          GITHUB
        </a>
      </div>

      <div className="footer__copy">
        <div className="copywrite">
          <div className="year">© {new Date().getFullYear()}</div>
          <span>
            DEV BY{' '}
            <span>
              <img className="image" src={img} alt="" />
            </span>{' '}
            JADE CELINE{' '}
          </span>
        </div>
        <div className="footer_top">
          <p>Back to top</p>
          <p
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="circle">
            <AiOutlineArrowUp />
          </p>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Footer;
