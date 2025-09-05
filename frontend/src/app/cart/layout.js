import CheckoutSection from "@/components/checkoutSection/CheckoutSection";
import Styles from "./cart.module.css";

export default function CartLayout({ children }) {
  return (
    <div className={Styles.cartSection}>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
            {children}
        </div>
        <div className="col-span-4">
          <CheckoutSection />
        </div>
      </div>
    </div>
  );
}
