import Styles from './featuredProduct.module.css'
export default function FeaturedProduct() {
    const {
        elWrapper,
        boxUp,
        img,
        imgInfo,
        infoInner,
        pName,
        pCompany,
        aSize,
        size,
        boxDown,
        hBg,
        hBgInner,
        cart,
        price,
        addToCart,
        txt
    } = Styles;
    return (
        <div className={elWrapper}>
            
            <div className={boxUp}>
                <img
                    className={img}
                    src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/aa37d6e3c3f24dcdaf82524df8c63161/DESIRE_100_ML_1.jpg"
                    alt="Product"
                />
                <div className={imgInfo}>
                    <div className={infoInner}>
                        <span className={pName}>Desire 100 ml</span>
                        <span className={pCompany}>Fragnances By AHroomi</span>
                    </div>
                    <div className={aSize}>
                        Available In : <span className={size}>10 ml</span> , <span className={size}>100 ml</span>
                    </div>
                </div>
            </div>

            <div className={boxDown}>
                <div className={hBg}>
                    <div className={hBgInner}></div>
                </div>

                <a className={cart} href="#">
                    <span className={price}>$120</span>
                    <span className={addToCart}>
                        <span className={txt}>Add in cart</span>
                    </span>
                </a>
            </div>
        </div>
    );
}