"use client";

import styles from "./notfound.module.css";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <div className={styles.circle}></div>
        <h1 className={styles.code}>404</h1>
      </div>
      <h2 className={styles.title}>Oops! Page Not Found</h2>
      <p className={styles.subtitle}>
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button className={styles.button} onClick={() => router.push("/")}>
        Back to Home
      </button>
    </div>
  );
}
