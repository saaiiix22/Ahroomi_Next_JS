import Link from 'next/link';
import Styles from './orderConfirm.module.css'

export default function Page() {
    
    return (
        <div className={Styles.confirmation}>
            {/* <div className={Styles.confirmWrapper}>
                <img src="/images/confirm.png" alt="Success" />
            </div> */}
            <svg
                width="115px"
                height="115px"
                viewBox="0 0 133 133"
                xmlns="http://www.w3.org/2000/svg"
                style={{fill:"none"}}
            >
                <g className={Styles.checkGroup}>
                    <circle fill="#07b481" cx="66.5" cy="66.5" r="54.5" />
                    <circle
                        className={Styles.whiteCircle}
                        fill="#FFFFFF"
                        cx="66.5"
                        cy="66.5"
                        r="55.5"
                    />
                    <circle
                        className={Styles.outline}
                        stroke="#07b481"
                        strokeWidth="4"
                        cx="66.5"
                        cy="66.5"
                        r="54.5"
                    />
                    <polyline
                        className={Styles.check}
                        stroke="#FFFFFF"
                        strokeWidth="5.5"
                        points="41 70 56 85 92 49"
                    />
                </g>
            </svg>
            <h2 className={Styles.thankyou}>Thank you for your purchase</h2>
            <p className={Styles.info}>
                We've received your order and it will ship in 5-7 business days. <br />
                Your order number is <strong>#B6CT3</strong>
            </p>

            <table className={Styles.orderTable}>
                <tbody>
                    <tr className={Styles.orderRow}>
                        <td style={{ width: '130px' }}>
                            <img
                                src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg"
                                alt="Musk Perfume"
                            />
                        </td>
                        <td>
                            <div className={Styles.productDetails}>
                                <h4 className={Styles.productName}>Musk </h4>
                                <div>
                                    <p className={Styles.productMeta}>Size: 100 ML</p>
                                    <p className={Styles.productMeta}>Category: Fragrance</p>
                                    <p className={Styles.productMeta}>Qty: 1</p>
                                </div>
                            </div>
                        </td>
                        <td className={Styles.price}>₹ 550</td>
                    </tr>



                    <tr className={Styles.orderTotal}>
                        <td colSpan="2">Total</td>
                        <td>₹ 550</td>
                    </tr>
                </tbody>
            </table>


            <div className={Styles.savingsBox}>
                <p className={Styles.savedPrice}>
                    You Saved: <span>₹ 250</span>
                </p>
                <p className={Styles.discountNote}>
                    Discount Applied: <strong>30% OFF</strong>
                </p>
            </div>

            <Link href={'/'} className={Styles.homeBtn}>Back to Home</Link>
        </div>
    );
}