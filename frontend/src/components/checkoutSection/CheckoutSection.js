import Link from 'next/link';
import Styles from './checkoutSection.module.css'
import { RiDiscountPercentFill } from "react-icons/ri";

export default function CheckoutSection() {
    return (
        <div className={Styles.checkoutContainer}>
            <h6 className={Styles.title}>Coupons</h6>

            <div className={Styles.couponBox}>
                <h6 className={Styles.couponTitle}>
                    <span className={Styles.icon}><RiDiscountPercentFill /></span>
                    Coupons & Offers
                </h6>
                <button className={Styles.checkBtn}>Check</button>
            </div>

            <ul className={Styles.summaryList}>
                <li>
                    <p>Sub Total</p>
                    <p>₹500</p>
                </li>
                <li>
                    <p>Total Discount</p>
                    <p>- ₹50</p>
                </li>
                <li>
                    <p>Discounted Price</p>
                    <p>₹450</p>
                </li>
                <li>
                    <p>GST</p>
                    <p>₹100</p>
                </li>
                <li>
                    <p>Final Amount</p>
                    <p>₹550</p>
                </li>
            </ul>

            <ul className={Styles.grandTotalBox}>
                <li>
                    <h6>Grand Total</h6>
                    <h6>₹550</h6>
                </li>
            </ul>

            <Link href={'/cart/address'} className={Styles.checkoutBtn}>Proceed To Checkout</Link>
        </div>
    );
}
