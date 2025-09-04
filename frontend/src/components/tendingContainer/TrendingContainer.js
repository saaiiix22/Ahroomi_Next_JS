import Trending from "../trending/Trending";
import Styles from './trendingContainer.module.css'

export default function TrendingContainer() {
    const {trendingContainer}  = Styles
    const topInfo  =[
        {
            label:'Trending',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg'
        },
        {
            label:'Rakhi Gift Hamper',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//7-25-2025/090055e8548147a49f54b71220124180/gift.jpg'
        },
        {
            label:'Self Care',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//3-22-2025/0dd8c99d67334c9e81d4ebd08733c7e5/main%20image.webp'
        },
        {
            label:'Essential Oil',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//2-28-2025/1913aef2ebb94131aa7235c74f733f91/essential%20oil.webp'
        },
        {
            label:'Fragnances',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//3-22-2025/b13c8c1f127e439580c0ece045a2647a/main%20image.png'
        },
        {
            label:'Air Freshner',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//2-28-2025/2725fd6165b4411a92dc9b7fb457bdcd/fragrance.webp'
        },
        {
            label:'Gift Set',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//2-28-2025/2d5d1f32b2bc47ad8dd76767f724d0bf/gift%20sets.webp'
        },
        {
            label:'Body Mist',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//3-22-2025/a763c6063f1d47758fe3105ec1a6380d/main%20image.webp'
        },
        {
            label:'Pocket Perfume',
            imgUrl:'https://setmycart.blob.core.windows.net/smcproduction//3-22-2025/a2e6351dcbd84f2b9d71f5fe272bb797/main.webp'
        }
    ]
    return (
        <div className={trendingContainer}>
            {
                topInfo?.map((i,index)=>{
                    return(
                        <Trending key={index} props={i}/>
                    )
                })
            }
        </div>
    );
}   