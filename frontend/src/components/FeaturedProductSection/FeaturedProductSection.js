import FeaturedProduct from "../featuredProduct/FeaturedProduct";
import Styles from './featureProductSection.module.css'

export default function FeaturedProductSection() {
    const { homeHead } = Styles
    return (
        <div>
            <div className='p-2 mt-3'>
                <h6 className={homeHead}>Featured Products</h6>
            </div>
            <div className="p-8 flex gap-10 justify-center">
                <FeaturedProduct />
                <FeaturedProduct />
                <FeaturedProduct />
                <FeaturedProduct />
                <FeaturedProduct />
            </div>
        </div>
    );
}