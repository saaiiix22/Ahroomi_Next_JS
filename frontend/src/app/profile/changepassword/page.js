"use client";
import { useState } from "react";
import { FiEye, FiEyeOff, FiCheck } from "react-icons/fi";
import Styles from "./changepassword.module.css";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validations = {
    length: newPassword.length >= 12,
    uppercase: /[A-Z]/.test(newPassword),
    lowercase: /[a-z]/.test(newPassword),
    number: /\d/.test(newPassword),
    special: /[^A-Za-z0-9]/.test(newPassword),
  };

  const isNewPasswordValid = Object.values(validations).every(Boolean);
  const doPasswordsMatch = newPassword && newPassword === confirmPassword;

  return (
    <div className={Styles.container}>
      {/* Old Password */}
      <div className={`${Styles.field} ${oldPassword ? Styles.successField : ""}`}>
        <label>Old Password</label>
        <div className={Styles.inputWrapper}>
          <input
            type={showOld ? "text" : "password"}
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <span className={Styles.icon} onClick={() => setShowOld(!showOld)}>
            {showOld ? <FiEye /> : <FiEyeOff />}
          </span>
          {oldPassword && <FiCheck className={Styles.checkIcon} />}
        </div>
      </div>

      {/* New Password */}
      <div className={`${Styles.field} ${newPassword && !isNewPasswordValid ? Styles.errorField : ""}`}>
        <label>New Password</label>
        <div className={Styles.inputWrapper}>
          <input
            type={showNew ? "text" : "password"}
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span className={Styles.icon} onClick={() => setShowNew(!showNew)}>
            {showNew ? <FiEye /> : <FiEyeOff />}
          </span>
        </div>
        {!isNewPasswordValid && (
          <p className={Styles.errorMsg}>Please add all necessary characters to create safe password.</p>
        )}
        <ul className={Styles.checklist}>
          <li className={validations.length ? Styles.valid : ""}>Minimum characters 12</li>
          <li className={validations.uppercase ? Styles.valid : ""}>One uppercase character</li>
          <li className={validations.lowercase ? Styles.valid : ""}>One lowercase character</li>
          <li className={validations.special ? Styles.valid : ""}>One special character</li>
          <li className={validations.number ? Styles.valid : ""}>One number</li>
        </ul>
      </div>

      {/* Confirm Password */}
      <div className={Styles.field}>
        <label>Confirm New Password</label>
        <div className={Styles.inputWrapper}>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="enter your confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className={Styles.icon} onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <FiEye /> : <FiEyeOff />}
          </span>
        </div>
        {confirmPassword && !doPasswordsMatch && (
          <p className={Styles.errorMsg}>Passwords do not match</p>
        )}
      </div>

      {/* Submit */}
      <button className={Styles.submitBtn} disabled={!isNewPasswordValid || !doPasswordsMatch}>
        Change Password
      </button>

      <p className={Styles.forgot}>Forgot Password?</p>
    </div>
  );
}
