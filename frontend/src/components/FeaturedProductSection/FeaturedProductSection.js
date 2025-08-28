import FeaturedProduct from "../featuredProduct/FeaturedProduct";
import SectionHeading from "../sectionHeading/SectionHeading";
import Styles from './featureProductSection.module.css'

export default function FeaturedProductSection() {
    const {  } = Styles
    return (
        <div>
            <SectionHeading props={'Featured Products'}/>
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