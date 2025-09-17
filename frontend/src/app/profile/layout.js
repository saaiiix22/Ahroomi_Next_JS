import Styles from "./profile.module.css";
import ProfileNavbar from "./profileNav/ProfileNavbar";

export default function ProfileLayout({ children }) {
  return (
    <div className={Styles.container}>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <ProfileNavbar />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
