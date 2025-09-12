"use client";

import { useState } from "react";
import Styles from "./ProductDetailsSection.module.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaShare } from "react-icons/fa";

export default function ProductDetailsSection() {
    const [showAll, setShowAll] = useState(false);
    const [quantityCount, setQuantityCount] = useState(1)



    const details = [
        {
            title: "WARM MUSK START THAT CALMS & COMFORTS",
            text: "Ahroomi Musk Body Mist opens with a rich musk note that feels cozy and grounding. It gives you a calm, confident vibe that stays with you throughout the day.",
        },
        {
            title: "MADE WITH ESSENTIAL OILS FOR LONGER STAY",
            text: "Ahroomi uses pure essential oils in this mist, which helps the fragrance stay on your skin much longer than regular body sprays—keeping you fresh for hours.",
        },
        {
            title: "SAFE & GENTLE ON SKIN",
            text: "The formula is free from parabens, sulfates, and harsh chemicals. It’s vegan, cruelty-free, and suitable for all skin types.",
        },
        {
            title: "PERFECT FOR DAILY USE",
            text: "Lightweight and refreshing, this mist is perfect for work, outings, or casual wear, giving you a subtle fragrance boost anytime.",
        },
    ];

    const visibleDetails = showAll ? details : details.slice(0, 3);



    return (
        <div className={Styles.productDetails}>
            <div className="flex justify-between items-center">
                <h1>
                    MUSK, <span className={Styles.productQuantity}>100 ml</span>
                </h1>
                <div>
                    <button className={Styles.shareBtn}><FaShare /></button>
                </div>
            </div>
            <span className={Styles.category}>Fragrances By AHroomi</span>
            <Stack spacing={1}>
                <Rating
                    name="half-rating-read"
                    defaultValue={4}
                    precision={0.5}
                    readOnly
                    sx={{ fontSize: "18px" }}
                />
            </Stack>
            <div className={Styles.ratingPriceRow}>

                <div className={Styles.priceBox}>
                    <span className={Styles.currentPrice}>₹550</span>
                    <span className={Styles.oldPrice}>₹699</span>
                </div>

                <div className={Styles.quantityCounter}>
                    <button onClick={() => setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)} className={Styles.qtyBtn}>
                        -
                    </button>
                    <span className={Styles.qtyValue}>{quantityCount}</span>
                    <button className={Styles.qtyBtn} onClick={() => setQuantityCount(quantityCount + 1)}>
                        +
                    </button>
                </div>

            </div>

            <div className={Styles.bottleSize}>
                <label htmlFor="">Available Sizes :</label>
                <button>10 ML</button>
                <button>100 ML</button>
            </div>

            <h3 className={Styles.detailsHeading}>Product Details</h3>
            <div className={Styles.detailsWrapper}>
                {visibleDetails.map((item, idx) => (
                    <div key={idx} className={Styles.detailItem}>
                        <span className={Styles.bullet}>➤</span>
                        <div>
                            <strong>{item.title}:</strong>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {!showAll && (
                <button className={Styles.readMore} onClick={() => setShowAll(true)}>
                    Read More
                </button>
            )}
        </div>
    );
}
