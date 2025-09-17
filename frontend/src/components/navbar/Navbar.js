'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css';
import MegaMenu from '../megamenu/MegaMenu';
import { FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const { logoParent, navList, navItem, navItemWithSubmenu, inputContainer, searchInput } = styles;
  const [showMegaMenu, setShowMegaMenu] = useState(false);
   const cartCount = 1;

  return (
    <nav className="p-4 px-6 md:px-20 bg-white shadow-md relative z-50">
      <div className="grid grid-cols-12 items-center">
        {/* Logo */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className={logoParent}>
            <img src="/images/ahroomiLogo.png" alt="Logo" />
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-4">
          <ul className={navList}>


            <li
              className={`${navItemWithSubmenu} relative`}
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <Link href={'/shop'} >Shop</Link>

              {showMegaMenu && (
                <div className="absolute left-0 top-full w-[800px]">
                  {/* 👇 Gap between nav and menu (but still hoverable) */}
                  <div className="h-4 w-full bg-transparent"></div>
                  <MegaMenu />
                </div>
              )}
            </li>

            <li className={navItem}>
              <Link href="/about">About Us</Link>
            </li>

            <li className={navItem}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Search */}
        <div className="md:col-span-4 flex justify-center items-center">
          <form role="search" method="get" action="">
            <div className={inputContainer}>
              <input
                type="search"
                className={searchInput}
                name="s"
                placeholder="Search entire website..."
              />
              <button type="submit" className={styles.searchSubmit} name="submit">
                <FiSearch />
              </button>
            </div>
          </form>
           <ul className="flex items-center gap-4 ml-4">
            <li>
              <Link href="/" className={styles.iconWrapper}>
                <MdHome />
              </Link>
            </li>
            <li className={styles.cartWrapper}>
              <Link href="/cart" className={styles.iconWrapper}>
                <FaShoppingCart />
              </Link>
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
