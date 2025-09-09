import Styles from './featuredProduct.module.css'
export default function FeaturedProduct({props}) {
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
                    src={props.productImg}
                    alt="Product"
                />
                
                <div className={imgInfo}>
                    <div className={infoInner}>
                        <span className={pName}>{props.productName}</span>
                        <span className={pCompany}>{props.productCategory} By AHroomi</span>
                    </div>
                    <div className={aSize}>
                        Available In : <span className={size}>10 ml</span>  <span className={size}>100 ml</span>
                    </div>
                </div>
            </div>

            <div className={boxDown}>
                <div className={hBg}>
                    <div className={hBgInner}></div>
                </div>

                <a className={cart} href="#">
                    <span className={price}>₹{props.productPrice}</span>
                    <span className={addToCart}>
                        <span className={txt}>Add in cart</span>
                    </span>
                </a>
            </div>
        </div>
    );
}