"use client";

import { usePathname } from "next/navigation";
import Styles from "./profilenavbar.module.css";
import { PiPackageLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine, RiHome2Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

export default function ProfileNavbar() {
  const pathname = usePathname();

  const profileNavData = [
    {
      icon: <PiPackageLight />,
      navText: "View Orders",
      href: "/profile",
      badge: 1
    },
    {
      icon: <FiUser />,
      navText: "Personal details",
      href: "/profile/details"
    },
    {
      icon: <RiLockPasswordLine />,
      navText: "Change password",
      href: "/profile/changepassword"
    },
    {
      icon: <RiHome2Line />,
      navText: "Manage addresses",
      href: "/profile/address"
    },
    {
      icon: <IoIosLogOut />,
      navText: "Log out",
      href: "/logout"
    },
  ];

  return (
    <div className={Styles.sidebar}>
      <ul className={Styles.navList}>
        {profileNavData.map((item, index) => {
          const isActive =
            pathname === item.href || (pathname === "/profile" && item.href === "/profile");

          return (
            <li
              key={index}
              className={`${Styles.navItem}`}
            >
              <Link href={item.href} className={`${Styles.link}  ${isActive ? Styles.active : ""}`}>
                <span className={Styles.icon}>{item.icon}</span>
                <span className={Styles.text}>{item.navText}</span>
                {item.badge && <span className={Styles.badge}>{item.badge}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
