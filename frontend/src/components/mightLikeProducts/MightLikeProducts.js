import FeaturedProduct from '../featuredProduct/FeaturedProduct';
import Styles from './mightlikeproducts.module.css'
export default function MightLikeProducts() {
    return (
        <div className={Styles.mightLikeProducts}>
            <div className='p-2 mt-3'>
                <h6 className={Styles.text}>You Might Like Also</h6>
            </div>
            <div className='mt-10 flex justify-center gap-5 items-center'>
                <FeaturedProduct/>
                <FeaturedProduct />
                <FeaturedProduct />
                <FeaturedProduct />
                <FeaturedProduct />
            </div>
        </div>
    );
}