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
        descriptionBtn
    } = Styles
    return (
        <div className='p-8 flex gap-10'>
            <div className={card}>
                <nav className={nav}>
                    Classic Peace Lily
                    <div className={heart}></div>
                </nav>
                <div className={photo}>
                    <img
                        className={photoImg}
                        src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
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
                    <button className={descriptionBtn}>Wishlist</button>
                </div>
            </div>



            <div className={card}>
                <nav className={nav}>
                    Classic Peace Lily
                    <div className={heart}></div>
                </nav>
                <div className={photo}>
                    <img
                        className={photoImg}
                        src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
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
                    <button className={descriptionBtn}>Wishlist</button>
                </div>
            </div>



            <div className={card}>
                <nav className={nav}>
                    Classic Peace Lily
                    <div className={heart}></div>
                </nav>
                <div className={photo}>
                    <img
                        className={photoImg}
                        src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
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
                    <button className={descriptionBtn}>Wishlist</button>
                </div>
            </div>
        </div>
    );
}