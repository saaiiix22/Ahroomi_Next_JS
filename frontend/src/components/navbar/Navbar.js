'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css';
import MegaMenu from '../megamenu/MegaMenu';

export default function Navbar() {
  const { logoParent, navList, navItem, navItemWithSubmenu, searchInp } = styles;
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  return (
    <nav className="p-4 px-6 md:px-20 bg-white shadow-md relative z-50">
      <div className="grid grid-cols-12 items-center">
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className={logoParent}>
            <img src="/images/ahroomiLogo.png" alt="Logo" className="h-10" />
          </div>
        </div>

        <div className="md:col-span-4">
          <ul className={navList}>
            <li className={navItem}>
              <Link href="/homepage">Home</Link>
            </li>
            <li className={navItemWithSubmenu}>
              <button type="button" onClick={handleMenuClick}>
                Shop
              </button>
            </li>
            <li className={navItem}>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 flex justify-center items-center">
          <form>
            <input className={searchInp} placeholder="Search Here" name="search" />
          </form>
        </div>
      </div>

      <MegaMenu visible={showMegaMenu} />
    </nav>
  );
}
