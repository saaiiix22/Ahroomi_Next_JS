import Styles from './bestselling.module.css'

export default function BestSelling() {
    const {
        card,
        nav,
        heart,
        photo,
        photoImg,
        description,
        descriptionH1,
        descriptionH2,
        descriptionH4,
        descriptionP,
        descriptionBtn,
        descriptionWishList,
        bestSellerHead,
        quantity
    } = Styles


    const data = [
        {
            nameOfPRoduct: 'Musk ',
            imgUrl: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg',
            quantityOfPoduct: '100 ml',
            priceOfProduct: '399.00',
            descriptionOfProduct: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.'

        },
        {
            nameOfPRoduct: 'Rosemary Oil ',
            imgUrl: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/25d3976ca6f64972a2120bb96dd555e3/ROSEMARY_10_ML_1.jpg',
            quantityOfPoduct: '10 ml',
            priceOfProduct: '399.00',
            descriptionOfProduct: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.'

        },
        {
            nameOfPRoduct: 'Face Mask ',
            imgUrl: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/38def3fa123542238422566364e7c819/Aarhomi_face_125.jpg',
            quantityOfPoduct: '125 g',
            priceOfProduct: '399.00',
            descriptionOfProduct: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.'

        },
        {
            nameOfPRoduct: 'Hair Oil',
            imgUrl: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/1268bda9139a48378a14bd2aae71c240/HAIR_OIL_30_ML_1.jpg',
            quantityOfPoduct: '30 ml',
            priceOfProduct: '399.00',
            descriptionOfProduct: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.'

        },
        {
            nameOfPRoduct: 'Face Oil ',
            imgUrl: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/ad4cefab99664e529714b0d540416177/FACE_OIL_30_ML_1.jpg',
            quantityOfPoduct: '30 ml',
            priceOfProduct: '399.00',
            descriptionOfProduct: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.'

        },
    ]
    return (
        <div>
            <div className='p-2 mt-3'>
                <h6 className={bestSellerHead}>Best Sellers</h6>
            </div>
            <div className='p-8 flex gap-10 justify-center'>

                {
                    data.map((i, index) => {
                        return (
                            <div className={card} key={index}>
                                <nav className={nav}>
                                    {i.nameOfPRoduct} {i.quantityOfPoduct}
                                    <div className={heart}></div>
                                </nav>
                                <div className='flex'>
                                    <div className={photo}>
                                        <img
                                            className={photoImg}
                                            src={i.imgUrl}
                                            alt="Classic Peace Lily"
                                        />
                                    </div>
                                    <div className={description}>
                                        <h2 className={descriptionH2}>{i.nameOfPRoduct} <span className={quantity}>{i.quantityOfPoduct}</span></h2>
                                        <h4 className={descriptionH4}>By AHroomi</h4>
                                        <h1 className={descriptionH1}><span>₹</span>{i.priceOfProduct}</h1>
                                        <p className={descriptionP}>
                                            {
                                                i.descriptionOfProduct
                                            }
                                        </p>
                                        <button className={descriptionBtn}>Add to Cart</button>
                                        <button className={descriptionWishList}>Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}