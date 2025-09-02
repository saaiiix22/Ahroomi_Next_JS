import ProductImageSection from '@/components/productImageSection/ProductImageSection';
import Styles from './productdetails.module.css'
import ProductDetailsSection from '@/components/productDetailsSection/ProductDetailsSection';
import MightLikeProducts from '@/components/mightLikeProducts/MightLikeProducts';
import ReviewSectionParent from '@/components/reviewSectionParent/ReviewSectionParent';
export default function Page() {
    return (
        <div className={Styles.homeContainer}>
            <div className="grid grid-cols-10 gap-7 justify-center">
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
            </div>
            <MightLikeProducts/>
            <ReviewSectionParent/>
        </div>
    );
}