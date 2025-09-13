"use client";
import FeaturedProduct from "@/components/featuredProduct/FeaturedProduct";
import Styles from "./productpage.module.css";
import { useState } from "react";

export default function ProductList() {
    const [discount, setDiscount] = useState([0, 50]);
    const [minPrice, setMinPrice] = useState(200);
    const [maxPrice, setMaxPrice] = useState(5000);

    const handleDiscountChange = (e) => {
        const value = e.target.value;
        setDiscount([0, value]);
    };

    const categories = [
        "Self care",
        "essential Oil",
        "pocker perfume",
        "body mist",
        "gift sets",
        "air freshner",
        "fragnances",
    ];

    const data = [
        {
            productName: 'Desire',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/aa37d6e3c3f24dcdaf82524df8c63161/DESIRE_100_ML_1.jpg',
            productPrice: 550,
            productCategory: 'Fragnance',
        },
        {
            productName: 'Mystique Basil',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/abe55e5b1a4f450abe0e7fea01083ff9/MYSTIQUE_BASIL_100_ML_1.jpg',
            productPrice: 350,
            productCategory: 'Fragnance',
        },
        {
            productName: 'Sunburst Orange',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/481830a8ecfc4e27b48bf339396263fc/SUNBURST_ORANGE_100_ML_1.jpg',
            productPrice: 400,
            productCategory: 'Fragnance',
        },
        {
            productName: 'Rose Oil',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//5-1-2025/66324ebd27ff4b8e87468c734de6249a/ROSE10.png',
            productPrice: 500,
            productCategory: 'Essential Oil',
        },
        {
            productName: 'Tea Tree Oil',
            productImg: 'https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/7854c2f080a84852bc5d974836928c69/TEA_TREE_10_ML_1.jpg',
            productPrice: 300,
            productCategory: 'Essential Oil',
        },
    ]
    return (
        <div className="p-5">
            <div className={Styles.homeContainer}>
                <div className="grid grid-cols-12 gap-5">
                    <div className={`${Styles.sidebar} col-span-3`}>
                        <h2 className={Styles.filterTitle}>Category</h2>
                        <div className={Styles.filterOptions}>
                            {categories.map((cat, i) => (
                                <div className={Styles.checkboxWrapper} key={i}>
                                    <input
                                        type="checkbox"
                                        id={cat}
                                        className={Styles.checkbox}
                                    />
                                    <label htmlFor={cat}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        <h2 className={Styles.filterTitle}>Price</h2>
                        <div className={Styles.priceInputs}>
                            <div>
                                <label htmlFor="minPrice">Min</label>
                                <input
                                    type="number"
                                    id="minPrice"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                />
                            </div>
                            <span className={Styles.priceDash}>-</span>
                            <div>
                                <label htmlFor="maxPrice">Max</label>
                                <input
                                    type="number"
                                    id="maxPrice"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                />
                            </div>
                        </div>

                        <h2 className={Styles.filterTitle}>Discount</h2>
                        <input
                            type="range"
                            min="0"
                            max="90"
                            step="5"
                            value={discount[1]}
                            onChange={handleDiscountChange}
                            className={Styles.range}
                        />
                        <p className={Styles.discountText}>
                            {discount[0]}% – {discount[1]}% Off
                        </p>
                    </div>

                    <div className="col-span-9">
                        <div className='flex  gap-5 flex-wrap items-center'>
                            {
                                data?.map((i, index) => {
                                    return (
                                        <FeaturedProduct key={index} props={i} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
