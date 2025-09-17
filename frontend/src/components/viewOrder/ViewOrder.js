import Styles from './vieworder.module.css'

export default function ViewOrder() {
    return (
        <div className='pt-5'>

            <h2 className={Styles.OrderHead}>Order History <span className='block'>2 orders</span></h2>


            <div className={Styles.containerActive}>
                {/* Left Section */}
                <div className='flex justify-between items-center'>
                    <p className={Styles.status}>● On the way</p>
                    <p className={Styles.orderId}>Order ID : <span>#B6CT3</span></p>
                </div>
                <div className={Styles.mainContainer}>
                    <div className={Styles.left}>


                        <div className={Styles.card}>
                            <img
                                src="https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/32d290e41624492eb9e44e786c7c2a84/MUSK_100_ML_1_11zon.webp"
                                alt="product"
                                className={Styles.image}
                            />
                            <div>
                                <p className={Styles.title}>Musk , <span>100 ML</span></p>
                                <p className={Styles.category}>Fragnance By AHroomi</p>
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
                                <p className={Styles.category}>Fragnance By AHroomi</p>
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
            </div>


            <div className={Styles.containerInActive}>
                <div className='flex justify-between items-center'>
                    <p className={Styles.status}>● Delivered</p>
                    <p className={Styles.orderId}>Order ID : <span>#B6CT3</span></p>
                </div>
                <div className={Styles.mainContainer}>
                    <div className={Styles.left}>


                        <div className={Styles.card}>
                            <img
                                src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/1c9c4a1d763344619edbdf60803a4989/BASIL_10_ML_1.jpg"
                                alt="product"
                                className={Styles.image}
                            />
                            <div>
                                <p className={Styles.title}>Basil , <span>10 ML</span></p>
                                <p className={Styles.category}>Essential Oil By AHroomi</p>
                            </div>
                        </div>

                        <div className={Styles.card}>
                            <img
                                src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/e098ebbafeaf4d448e7f013d489b80ed/CINNAMON_10_ML_1.jpg"
                                alt="product"
                                className={Styles.image}
                            />
                            <div>
                                <p className={Styles.title}>Cinnamon Oil , <span>10 ML</span></p>
                                <p className={Styles.category}>Essential Oil By AHroomi</p>
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



        </div>
    )
}
