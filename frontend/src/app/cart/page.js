import CartItems from '@/components/cartItems/CartItems';
import Styles from './cart.module.css'
import CheckoutSection from '@/components/checkoutSection/CheckoutSection';
export default function Cart() {
    return (
        <div className={Styles.cartSection}>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-8">
                    <CartItems/>
                </div>
                <div className="col-span-4">
                    <CheckoutSection/>
                </div>
            </div>
        </div>
    );
}