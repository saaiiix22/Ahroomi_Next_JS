import ProfileNavbar from '@/components/profileNav/ProfileNavbar';
import Styles from './profile.module.css'
export default function ProfileLayout({children}) {
    return (
        <div className={Styles.container}>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-2">
                    <ProfileNavbar/>
                </div>
                <div className="col-span-10">
                    {children}
                </div>
            </div>
        </div>
    );
}