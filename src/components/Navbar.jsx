import React from 'react'
import {IoMdPaperPlane} from 'react-icons/io'
import '../styles/Navbar.scss'
const Navbar = () => {
  return (
    <div className="menu">
        <nav className='container'>
        <div className="logo">
            <svg width="76" height="43" viewBox="0 0 76 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_39_2)">
    <path d="M14.072 34.288C12.184 34.288 10.408 33.872 8.744 33.04C7.112 32.208 5.8 31.024 4.808 29.488L6.872 27.088C7.8 28.432 8.872 29.456 10.088 30.16C11.304 30.864 12.648 31.216 14.12 31.216C18.28 31.216 20.36 28.752 20.36 23.824V3.472H8.072V0.399998H23.864V23.68C23.864 27.232 23.032 29.888 21.368 31.648C19.736 33.408 17.304 34.288 14.072 34.288ZM49.1109 34.288C46.5829 34.288 44.2469 33.872 42.1029 33.04C39.9589 32.176 38.1029 30.976 36.5349 29.44C34.9669 27.904 33.7349 26.096 32.8389 24.016C31.9749 21.936 31.5429 19.664 31.5429 17.2C31.5429 14.736 31.9749 12.464 32.8389 10.384C33.7349 8.304 34.9669 6.496 36.5349 4.96C38.1349 3.424 40.0069 2.24 42.1509 1.408C44.2949 0.543999 46.6309 0.111999 49.1589 0.111999C51.5909 0.111999 53.8789 0.527999 56.0229 1.36C58.1669 2.16 59.9749 3.376 61.4469 5.008L59.1909 7.264C57.8149 5.856 56.2949 4.848 54.6309 4.24C52.9669 3.6 51.1749 3.28 49.2549 3.28C47.2389 3.28 45.3669 3.632 43.6389 4.336C41.9109 5.008 40.4069 5.984 39.1269 7.264C37.8469 8.512 36.8389 9.984 36.1029 11.68C35.3989 13.344 35.0469 15.184 35.0469 17.2C35.0469 19.216 35.3989 21.072 36.1029 22.768C36.8389 24.432 37.8469 25.904 39.1269 27.184C40.4069 28.432 41.9109 29.408 43.6389 30.112C45.3669 30.784 47.2389 31.12 49.2549 31.12C51.1749 31.12 52.9669 30.8 54.6309 30.16C56.2949 29.52 57.8149 28.496 59.1909 27.088L61.4469 29.344C59.9749 30.976 58.1669 32.208 56.0229 33.04C53.8789 33.872 51.5749 34.288 49.1109 34.288ZM69.2911 34.24C68.5871 34.24 67.9791 33.984 67.4671 33.472C66.9871 32.96 66.7471 32.336 66.7471 31.6C66.7471 30.832 66.9871 30.208 67.4671 29.728C67.9791 29.248 68.5871 29.008 69.2911 29.008C69.9951 29.008 70.5871 29.248 71.0671 29.728C71.5791 30.208 71.8351 30.832 71.8351 31.6C71.8351 32.336 71.5791 32.96 71.0671 33.472C70.5871 33.984 69.9951 34.24 69.2911 34.24Z" fill="black"/>
    </g>
    <defs>
    <filter id="filter0_d_39_2" x="0.807983" y="0.112" width="75.0272" height="42.176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_2"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_2" result="shape"/>
    </filter>
    </defs>
            </svg>
        </div>
        <div className="contact">
            <div className="email">
                <a href="mailto:jctapawan@gmail.com">
                    <span className='icon'><IoMdPaperPlane/></span>
                    <span className='emailtext'> jctapawan@gmail.com</span>
                </a>
                

            
            </div>
            <div className="text">
                <span>Available for freelance work</span>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar