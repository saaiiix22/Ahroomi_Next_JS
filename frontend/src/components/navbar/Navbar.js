import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    const { logoParent, navList, navItem, submenu, submenuItem, navItemWithSubmenu } = styles;

    const navItems = [
        { label: 'Homepage', href: '/homepage' },
        {
            label: 'Dashboard',
            href: '/',
            submenu: [
                { label: 'Overview', href: '/dashboard/overview' },
                { label: 'Reports', href: '/dashboard/reports' },
            ],
        },
        { label: 'About', href: '/about' },
    ];

    return (
        <nav className="p-4 px-6 md:px-20 bg-white shadow-md">
            <div className="grid grid-cols-12 items-center">
                <div className="md:col-span-4 flex justify-center md:justify-start">
                    <div className={logoParent}>
                        <img src="/images/ahroomiLogo.png" alt="Logo" className="h-10" />
                    </div>
                </div>

                <div className="md:col-span-4">
                    <ul className={navList}>
                        {navItems.map((item) => (
                            <li
                                key={item.href}
                                className={item.submenu ? navItemWithSubmenu : navItem}
                            >
                                <Link href={item.href}>{item.label}</Link>

                                {item.submenu && (
                                    <ul className={submenu}>
                                        {item.submenu.map((subItem) => (
                                            <li key={subItem.href} className={submenuItem}>
                                                <Link href={subItem.href}>{subItem.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-4 flex justify-center items-center">
                    <form>
                        <input
                            className="border-solid border-gray-300 border-2 rounded-md w-96 py-2 px-4"
                            placeholder="Search Here"
                            name=""
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}
