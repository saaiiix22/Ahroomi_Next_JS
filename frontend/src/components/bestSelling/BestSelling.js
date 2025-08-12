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
        bestSellerHead
    } = Styles
    return (
        <div>
            <div className='p-2 mt-3'>
                <h6 className={bestSellerHead}>Best Sellers</h6>
            </div>
            <div className='p-8 flex gap-10 justify-center'>



                <div className={card}>
                    <nav className={nav}>
                        Musk 100 ml
                        <div className={heart}></div>
                    </nav>
                    <div className='flex'>
                        <div className={photo}>
                            <img
                                className={photoImg}
                                // src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
                                src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg"
                                alt="Classic Peace Lily"
                            />
                        </div>
                        <div className={description}>
                            <h2 className={descriptionH2}>Classic Peace Lily</h2>
                            <h4 className={descriptionH4}>Popular House Plant</h4>
                            <h1 className={descriptionH1}>$18</h1>
                            <p className={descriptionP}>
                                Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
                                planter with a blue & red ribbom and butterfly pick.
                            </p>
                            <button className={descriptionBtn}>Add to Cart</button>
                            <button className={descriptionWishList}>Wishlist</button>
                        </div>
                    </div>
                </div>


                <div className={card}>
                    <nav className={nav}>
                        Rosemary Oil 10 ml
                        <div className={heart}></div>
                    </nav>
                    <div className='flex'>
                        <div className={photo}>
                            <img
                                className={photoImg}
                                // src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
                                src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/25d3976ca6f64972a2120bb96dd555e3/ROSEMARY_10_ML_1.jpg"
                                alt="Classic Peace Lily"
                            />
                        </div>
                        <div className={description}>
                            <h2 className={descriptionH2}>Classic Peace Lily</h2>
                            <h4 className={descriptionH4}>Popular House Plant</h4>
                            <h1 className={descriptionH1}>$18</h1>
                            <p className={descriptionP}>
                                Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
                                planter with a blue & red ribbom and butterfly pick.
                            </p>
                            <button className={descriptionBtn}>Add to Cart</button>
                            <button className={descriptionWishList}>Wishlist</button>
                        </div>
                    </div>
                </div>



                <div className={card}>
                    <nav className={nav}>
                        Face Mask 125 g
                        <div className={heart}></div>
                    </nav>
                    <div className='flex'>
                        <div className={photo}>
                            <img
                                className={photoImg}
                                // src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
                                src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/38def3fa123542238422566364e7c819/Aarhomi_face_125.jpg"
                                alt="Classic Peace Lily"
                            />
                        </div>
                        <div className={description}>
                            <h2 className={descriptionH2}>Classic Peace Lily</h2>
                            <h4 className={descriptionH4}>Popular House Plant</h4>
                            <h1 className={descriptionH1}>$18</h1>
                            <p className={descriptionP}>
                                Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
                                planter with a blue & red ribbom and butterfly pick.
                            </p>
                            <button className={descriptionBtn}>Add to Cart</button>
                            <button className={descriptionWishList}>Wishlist</button>
                        </div>
                    </div>
                </div>



                <div className={card}>
                    <nav className={nav}>
                        Hair Oil 30 ml
                        <div className={heart}></div>
                    </nav>
                    <div className='flex'>
                        <div className={photo}>
                            <img
                                className={photoImg}
                                // src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
                                src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/1268bda9139a48378a14bd2aae71c240/HAIR_OIL_30_ML_1.jpg"
                                alt="Classic Peace Lily"
                            />
                        </div>
                        <div className={description}>
                            <h2 className={descriptionH2}>Classic Peace Lily</h2>
                            <h4 className={descriptionH4}>Popular House Plant</h4>
                            <h1 className={descriptionH1}>$18</h1>
                            <p className={descriptionP}>
                                Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
                                planter with a blue & red ribbom and butterfly pick.
                            </p>
                            <button className={descriptionBtn}>Add to Cart</button>
                            <button className={descriptionWishList}>Wishlist</button>
                        </div>
                    </div>
                </div>



                <div className={card}>
                    <nav className={nav}>
                        Face Oil 30 ml
                        <div className={heart}></div>
                    </nav>
                    <div className='flex'>
                        <div className={photo}>
                            <img
                                className={photoImg}
                                // src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
                                src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/ad4cefab99664e529714b0d540416177/FACE_OIL_30_ML_1.jpg"
                                alt="Classic Peace Lily"
                            />
                        </div>
                        <div className={description}>
                            <h2 className={descriptionH2}>Classic Peace Lily</h2>
                            <h4 className={descriptionH4}>Popular House Plant</h4>
                            <h1 className={descriptionH1}>$18</h1>
                            <p className={descriptionP}>
                                Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
                                planter with a blue & red ribbom and butterfly pick.
                            </p>
                            <button className={descriptionBtn}>Add to Cart</button>
                            <button className={descriptionWishList}>Wishlist</button>
                        </div>
                    </div>
                </div>














            </div>
        </div>
    );
}