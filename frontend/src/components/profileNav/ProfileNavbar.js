import Styles from './profilenavbar.module.css';
import { PiPackageLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiHome2Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

export default function ProfileNavbar() {
  const profileNavData = [
    {
      icon: <PiPackageLight />,
      navText: "View Orders",
      badge: 3, // show count like in your screenshot
    },
    {
      icon: <FiUser />,
      navText: "Personal details",
    },
    {
      icon: <RiLockPasswordLine />,
      navText: "Change password",
    },
    {
      icon: <RiHome2Line />,
      navText: "Manage addresses",
    },
    {
      icon: <IoIosLogOut />,
      navText: "Log out",
    },
  ];

  return (
    <div className={Styles.sidebar}>
      <ul className={Styles.navList}>
        {profileNavData.map((item, index) => (
          <li key={index} className={Styles.navItem}>
            <span className={Styles.icon}>{item.icon}</span>
            <span className={Styles.text}>{item.navText}</span>
            {item.badge && <span className={Styles.badge}>{item.badge}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}