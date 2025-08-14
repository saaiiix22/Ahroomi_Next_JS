import Image from 'next/image';
import styles from './footer.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.leftFooter}>
        <div className={styles.footLogo}>
          <Image
            src="/images/ahroomiLogo.png"
            alt="Ahroomi Logo"
            width={180}
            height={80}
            priority
          />
        </div>
        <p>
          Science-Backed Beauty, Inspired by Nature. A unit of Aashdit Nutritech Private Limited
        </p>
        <div className={styles.footerSocialLink}>
          <h3>Follow us </h3>
          <ul>
            <li className={styles.facebook}>
              <a href="#" aria-label="Facebook" >
                <FaFacebookF />
              </a>
            </li>
            <li className={styles.twitter}>
              <a href="#" aria-label="Twitter" >
                <FaXTwitter />
              </a>
            </li>
            <li className={styles.instagram}>
              <a href="#" aria-label="Instagram" >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.rightFooter}>
        <div className="grid grid-cols-12">
          <div className='col-span-6'>
            <div className="flex gap-10">
              <div className={styles.contactUs}>
                <div className={styles.contactIcon}>
                  <FaRegMap />
                </div>
                <div className={styles.contactInfo}>
                  <h3>Raghunathpur - 751024</h3>
                  <p>Bhubaneswar Odisha .</p>
                </div>
              </div>
              <div className={`${styles.contactUs} ${styles.contactUsLast}`}>
                <div className={styles.contactIcon}>
                  <FaPhoneVolume />
                </div>
                <div className={styles.contactInfo}>
                  <h3>+91 123 456 7890</h3>
                  <p>Give us a call</p>
                </div>
              </div>
            </div>
            <div className={styles.smallText}>
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloribus illo, minus nulla voluptatum ad officia. At maxime provident quidem minima exercitationem, asperiores doloremque. At temporibus reprehenderit ipsum, dolores nisi, consectetur inventore quam aliquid facilis atque sed id, nobis ut.</p>
            </div>
          </div>
          <div className="col-span-4">
            <div className={styles.linkContainer}>
              <ul className={styles.quickLinks}>
                <li className={styles.headLink}>Quick Links</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Returns, Refund & Cancellation Policy</li>
              </ul>
              <ul className={styles.knowMore}>
                <li className={styles.headLink}>Know More</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='col-span-2'>
            <div className="p-2 flex flex-col items-center">
              <Image src='/images/nutritechLogo.png' alt='nutritechLogo' height={120} width={120} />
              <ul className={styles.lastLinks}>
                <li className={styles.headLinkLast}>Also Visit</li>
                <li className={styles.weblinks}><a href="www.aashditnutritech.com">aashditnutritech.com</a></li>
                <li className={styles.weblinks}><a href="www.millsmor.com">millsmor.com</a></li>
                <li className='mt-3 rounded-md'>
                  <Image src='/images/qrInsta.png' width={70} height={70} alt='QRAHroomi'/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyRight}>
        All rights reserved © Copyright 2025 Ahroomi.
      </div>

    </footer>
  );
}
