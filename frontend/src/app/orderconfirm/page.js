import Styles from './orderConfirm.module.css'
export default function Page() {
    return (
        <div className={Styles.confirmation}>
            <div className={Styles.confirmWrapper}>
                <img src="/images/confirm.png" alt="Success" />
            </div>
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



            <button className={Styles.homeBtn}>Back to Home</button>
        </div>
    );
}