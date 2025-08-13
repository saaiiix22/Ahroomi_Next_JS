import styles from './newsletter.module.css'
export default function NewsLetter() {
    return (
        <section className={styles.newsletterParent}>
        <section className={styles.newsletterSection}>
            <div className={styles.box}>
                <div className={styles.newsletterTitle}>
                    <h2>Join the Green Beauty Revolution</h2>
                </div>
                <div className={styles.boxContent}>
                    <label>
                        Get expert skincare advice, moringa-powered wellness tips, and exclusive offers all delivered straight to your inbox
                    </label>
                    <form name="subscribe" id="subscribe_form" className={styles.form}>
                        <input
                            type="email"
                            name="email"
                            id="subscribe_email"
                            placeholder="Enter your email"
                            className={styles.emailInput}
                            required
                        />
                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form>
                    <div className={styles.subscribeBottom}>
                        <input
                            type="checkbox"
                            id="dont_show_again"
                            className={styles.checkbox}
                        />
                        <label htmlFor="dont_show_again" className={styles.checkboxLabel}>
                            Get Regular Updates on Products
                        </label>
                    </div>
                </div>
            </div>
        </section>
        </section>
    );
}