import Styles from './vieworder.module.css'

export default function ViewOrder() {
    return (
        <div className='pt-5'>

            <h2 className={Styles.OrderHead}>Order History <span className='block'>2 orders</span></h2>

            <div className={Styles.containerActive}>
                {/* Left Section */}
                <div className={Styles.left}>
                    <p className={Styles.status}>● Dispatched</p>

                    <div className={Styles.card}>
                        <img
                            src="https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/32d290e41624492eb9e44e786c7c2a84/MUSK_100_ML_1_11zon.webp"
                            alt="product"
                            className={Styles.image}
                        />
                        <div>
                            <p className={Styles.title}>Musk , <span>100 ML</span></p>
                            <p className={Styles.time}>Arrives tomorrow</p>
                        </div>
                    </div>

                    <div className={Styles.card}>
                        <img
                            src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/481830a8ecfc4e27b48bf339396263fc/SUNBURST_ORANGE_100_ML_1.jpg"
                            alt="product"
                            className={Styles.image}
                        />
                        <div>
                            <p className={Styles.title}>Sunburst Orange , <span>100 ML</span></p>
                            <p className={Styles.time}>Expected on Mon, 2 July</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className={Styles.right}>
                    <button className={Styles.trackBtn}>Track order</button>
                    <button className={Styles.secondaryBtn}>View order details</button>
                    <div className='flex gap-3'>
                        <button className={Styles.linkBtn}>Get invoice</button>
                        <button className={Styles.linkBtn}>Edit order</button>
                    </div>
                </div>
            </div>


            <div className={Styles.containerInActive}>
                {/* Left Section */}
                <div className={Styles.left}>
                    <p className={Styles.status}>● Delivered</p>

                    <div className={Styles.card}>
                        <img
                            src="https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/32d290e41624492eb9e44e786c7c2a84/MUSK_100_ML_1_11zon.webp"
                            alt="product"
                            className={Styles.image}
                        />
                        <div>
                            <p className={Styles.title}>Musk , <span>100 ML</span></p>
                            <p className={Styles.time}>Arrives tomorrow</p>
                        </div>
                    </div>

                    <div className={Styles.card}>
                        <img
                            src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/481830a8ecfc4e27b48bf339396263fc/SUNBURST_ORANGE_100_ML_1.jpg"
                            alt="product"
                            className={Styles.image}
                        />
                        <div>
                            <p className={Styles.title}>Sunburst Orange , <span>100 ML</span></p>
                            <p className={Styles.time}>Expected on Mon, 2 July</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className={Styles.right}>
                    <button className={Styles.OrderAgain}>Order Again</button>
                    <button className={Styles.secondaryBtn}>View order details</button>
                    <div className='flex gap-3'>
                        <button className={Styles.linkBtn}>Get invoice</button>
                        <button className={Styles.linkBtn}>Edit order</button>
                    </div>
                </div>
            </div>



        </div>
    )
}
