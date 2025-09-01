import ProductImageSection from '@/components/productImageSection/ProductImageSection';
import Styles from './productdetails.module.css'
import ProductDetailsSection from '@/components/productDetailsSection/ProductDetailsSection';
export default function Page() {
    return (
        <div className={Styles.homeContainer}>
            <div className="grid grid-cols-12 gap-4 justify-center">
                <div className="col-span-4">
                    <div >
                        <ProductImageSection/>
                    </div>
                </div>
                <div className="col-span-6">
                    <div>
                        <ProductDetailsSection/>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="p-2 bg-red-200"></div>
                </div>
            </div>
        </div>
    );
}