import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPinterest, FaYoutubeSquare } from "react-icons/fa";
import Styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <ul className={Styles.social_list}>
                <li>
                    <a href="https://www.facebook.com/CorisBrasil" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                <a href="https://www.instagram.com/corisbrasil/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare />
                    </a>
                </li>
                <li>
                <a href="https://br.linkedin.com/company/coris-brasil" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                <a href="https://br.pinterest.com/CorisBrasil/" target="_blank" rel="noreferrer">
                        <FaPinterest />
                    </a>
                </li>
                <li>
                <a href="https://www.youtube.com/CorisSeguroViagem" target="_blank" rel="noreferrer">
                        <FaYoutubeSquare />
                    </a>
                </li>
            </ul>
        </div>
    )
}


