"use client";
import { useState } from "react";
import Styles from "./cartItems.module.css";
import { IoIosClose } from "react-icons/io";

export default function CartItems() {
    const [itemAmount, setItemAmount] = useState(1);

    return (
        <div className={Styles.cartItems}>
            <div className={Styles.header}>
                <h2>Your Cart</h2>
                <p className={Styles.continue}>Explore More</p>
            </div>

            <div className={Styles.cartList}>
                <div>
                    <div
                        className={Styles.productImg}>
                        <img
                            src="https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/32d290e41624492eb9e44e786c7c2a84/MUSK_100_ML_1_11zon.webp"
                            alt="Musk Perfume"
                        />
                    </div>

                </div>

                <div className={Styles.details}>
                    <div className={Styles.detailsTop}>
                        <h6>
                            Musk ,<span> 100ml</span>
                        </h6>
                        <button className={Styles.removeBtn}>
                            <IoIosClose size={18} />
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <div className={Styles.metaInfo}>
                                <p className={Styles.category}>Fragnance By Ahroomi</p>
                                <p><strong>Delivery:</strong> Estimated by <span>10th Sept</span></p>
                                <p className={Styles.offer}>Special Offer: Buy 2 Get 10% Off</p>
                            </div>
                            <div className={Styles.qtyControl}>
                                <button
                                    onClick={() => setItemAmount(itemAmount > 1 ? itemAmount - 1 : 1)}
                                >
                                    −
                                </button>
                                <span>{itemAmount}</span>
                                <button onClick={() => setItemAmount(itemAmount + 1)}>+</button>
                            </div>
                        </div>
                        <div className={Styles.detailsBottom}>
                            <div className={Styles.priceBlock}>
                                <h2 className={Styles.price}>₹550 </h2>
                                <p className={Styles.mrp}>MRP: <span>₹999</span></p>
                                <p className={Styles.save}>You Save ₹200 (20%)</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



        </div>
    );
}
