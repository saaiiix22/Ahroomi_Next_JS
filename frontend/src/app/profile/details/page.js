'use client'
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Styles from "./details.module.css";

export default function ProfileDetails() {
    const [profileImg, setProfileImg] = useState(null);
    const [formData, setFormData] = useState({
        name: "Prasanta Kumar Singh",
        dob: new Date("1992-06-23"),
        email: "prasanta@example.com",
        phone: "+91 1234567890",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, dob: date });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Data:", {
            ...formData,
            dob: formData.dob?.toISOString().split("T")[0],
        });
    };

    const CustomDateInput = ({ value, onClick }) => (
        <div className={Styles.dateWrapper} onClick={onClick}>
            <input
                value={value}
                readOnly
                className={Styles.dateInput}
                placeholder="Select Date"
            />
            <FaRegCalendarAlt className={Styles.calendarIcon} />
        </div>
    );

    const fallbackImg = "/images/userImg.png";

    return (
        <div className={Styles.profileWrapper}>
            <h2 className={Styles.title}>Account Info</h2>

            <form onSubmit={handleSubmit} className={Styles.infoForm}>
                {/* Avatar */}
                <div className={Styles.row}>
                    <div className={Styles.label}>Avatar</div>
                    <div className={Styles.value}>
                        <div className={Styles.avatarWrapper}>
                            <img
                                src={profileImg || fallbackImg}
                                alt="Profile"
                                className={Styles.avatar}
                            />
                        </div>
                        <label className={Styles.uploadBtn}>
                            Edit
                            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                        </label>
                    </div>
                </div>

                {/* Name */}
                <div className={Styles.row}>
                    <div className={Styles.label}>Name</div>
                    <div className={Styles.value}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* DOB */}
                <div className={Styles.row}>
                    <div className={Styles.label}>Date of Birth</div>
                    <div className={Styles.value}>
                        <DatePicker
                            selected={formData.dob}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            showYearDropdown
                            scrollableYearDropdown
                            customInput={<CustomDateInput />}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className={Styles.row}>
                    <div className={Styles.label}>Email</div>
                    <div className={Styles.value}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className={Styles.row}>
                    <div className={Styles.label}>Phone</div>
                    <div className={Styles.value}>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className={Styles.row}>
                    <div className={Styles.label}></div>
                    <div className={Styles.value}>
                        <button type="submit" className={Styles.updateBtn}>
                            Update Profile
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
