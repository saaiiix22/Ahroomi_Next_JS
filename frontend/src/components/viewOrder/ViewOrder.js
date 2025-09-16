import Styles from './vieworder.module.css'

export default function ViewOrder() {
    return (
        <div className='pt-5'>
            <div className={Styles.container}>
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
                            <p className={Styles.title}>Arrives tomorrow</p>
                            <p className={Styles.time}>7am - 7pm</p>
                        </div>
                    </div>

                    <div className={Styles.card}>
                        <img
                            src="https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/32d290e41624492eb9e44e786c7c2a84/MUSK_100_ML_1_11zon.webp"
                            alt="product"
                            className={Styles.image}
                        />
                        <div>
                            <p className={Styles.title}>Expected on Mon, 2 July</p>
                            <p className={Styles.time}>7am - 7pm</p>
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
    )
}
