'use client';
import Link from 'next/link';
import styles from './megamenu.module.css';

export default function MegaMenu({ visible }) {
  if (!visible) return null;

  const { megaMenu, submenuItem, megaMenuNav } = styles;

  const megaMenuData = {
    essentials: [
      { label: 'Sunscreen', href: '/shop/sunscreen' },
      { label: 'Face Serum', href: '/shop/face-serum' },
      { label: 'Lip Balms', href: '/shop/lip-balms' },
      { label: 'Face Mask', href: '/shop/face-mask' },
      { label: 'Face Cleanser', href: '/shop/face-cleanser' },
      { label: 'Face Moisturiser', href: '/shop/moisturiser' },
      { label: 'Dry & Calming Range', href: '/shop/dry-calm' },
    ],
    routines: [
      { label: 'No More Oily-Skin Bundle', href: '/shop/oily-skin-bundle' },
      { label: 'Daily Dry-Skin Care Bundle', href: '/shop/dry-skin-bundle' },
      { label: 'Day Care Routine', href: '/shop/day-care' },
      { label: 'Night Care Routine for Oily Skin', href: '/shop/night-oily' },
      { label: 'Night Care Routine for Dry Skin', href: '/shop/night-dry' },
      { label: 'Juicy Lips or Nothing Kit', href: '/shop/lip-kit' },
      { label: 'Juicy Lips Trio', href: '/shop/lips-trio' },
    ],
    launches: [
      { label: 'Double Shot Radiance Lift Serum', href: '/shop/double-shot-serum' },
    ],
  };

  return (
    <div className={megaMenu}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-8 px-10 py-6">
        <div>
          <h4 className={megaMenuNav}>Your Essentials</h4>
          {megaMenuData.essentials.map((item) => (
            <Link key={item.href}  href={item.href} className={submenuItem}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 className={megaMenuNav}>Routines</h4>
          {megaMenuData.routines.map((item) => (
            <Link key={item.href} href={item.href} className={submenuItem}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 className={megaMenuNav}>New Launches</h4>
          {megaMenuData.launches.map((item) => (
            <Link key={item.href} href={item.href} className={submenuItem}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <img
            src="/images/dummy.webp"
            alt="Model"
            className="h-48 w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}