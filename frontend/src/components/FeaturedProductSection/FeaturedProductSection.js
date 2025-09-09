import FeaturedProduct from "../featuredProduct/FeaturedProduct";
import SectionHeading from "../sectionHeading/SectionHeading";
import Styles from './featureProductSection.module.css'

export default function FeaturedProductSection() {
    const data = [
        {
            productName:'Desire',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/aa37d6e3c3f24dcdaf82524df8c63161/DESIRE_100_ML_1.jpg',
            productPrice: 550,
            productCategory: 'Fragnance',
        },
        {
            productName:'Mystique Basil',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/abe55e5b1a4f450abe0e7fea01083ff9/MYSTIQUE_BASIL_100_ML_1.jpg',
            productPrice: 350,
            productCategory: 'Fragnance',
        },
        {
            productName:'Sunburst Orange',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/481830a8ecfc4e27b48bf339396263fc/SUNBURST_ORANGE_100_ML_1.jpg',
            productPrice: 400,
            productCategory: 'Fragnance',
        },
        {
            productName:'Rose Oil',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//5-1-2025/66324ebd27ff4b8e87468c734de6249a/ROSE10.png',
            productPrice: 500,
            productCategory: 'Essential Oil',
        },
        {
            productName:'Tea Tree Oil',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/7854c2f080a84852bc5d974836928c69/TEA_TREE_10_ML_1.jpg',
            productPrice: 300,
            productCategory: 'Essential Oil',
        },
    ]
    return (
        <div>
            <SectionHeading props={'Featured Products'} />
            <div className="p-8 flex gap-10 justify-center flex-wrap">
                {
                    data?.map((i,index)=>{
                        return(
                            <FeaturedProduct key={index} props={i}/>
                        )
                    })
                }
            </div>
        </div>
    );
}