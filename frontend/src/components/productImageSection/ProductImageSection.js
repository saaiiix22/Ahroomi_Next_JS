"use client";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Styles from "./productImageSection.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa";
import Link from "next/link";

export default function ProductImageSection() {
    const [wishlist, setWishList] = useState(false);

    const images = [
        "https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg",
        "https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/314f74d21f7e4fa395c26ded9bacc41c/MUSK_100_ML_2_11zon.webp",
        "https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/8d163fbc5de540909ffb26bff17dcf8d/MUSK_100_ML_5_11zon.webp",
        "https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/cb2642c9c5984633928b241863dc0f5b/MUSK_100_ML_4_11zon.webp",
        "https://setmycart.blob.core.windows.net/smcproduction//8-22-2025/3f52aae167374d7d97deca1cf4a524c7/MUSK_100_ML_3_11zon.webp"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundPosition, setBackgroundPosition] = useState("center");
    const [isZoomed, setIsZoomed] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.thumbnailWrapper}>
                    <div className={Styles.navigatorBtn} onClick={handlePrev}>
                        <FaCaretUp />
                    </div>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`${Styles.thumbnail} ${currentIndex === index ? Styles.active : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <img src={img} alt={`Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                    <div className={Styles.navigatorBtn} onClick={handleNext}>
                        <FaCaretDown />
                    </div>
                </div>

                <div>
                    <div
                        className={Styles.mainImageWrapper}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsZoomed(true)}
                        onMouseLeave={() => setIsZoomed(false)}
                        style={{
                            backgroundImage: `url(${images[currentIndex]})`,
                            backgroundPosition: isZoomed ? backgroundPosition : "center",
                            backgroundSize: isZoomed ? "200%" : "contain",
                        }}
                    >
                        <img
                            src={images[currentIndex]}
                            alt="Selected"
                            className={`${Styles.mainImage} ${isZoomed ? Styles.hidden : ""}`}
                        />
                        <div
                            className={Styles.wishList}
                            onClick={() => setWishList(!wishlist)}
                            style={{ color: wishlist ? "#f20809" : "#d5e5d5" }}
                        >
                            <FaHeart />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 mt-3">
                        <div className="col-span-6">
                            <Link href={"/cart"} className={Styles.addToCartBtn}>
                                <FaCartShopping className={Styles.cartIcon} />
                                <span>Add To Cart</span>
                            </Link>
                        </div>

                        <div className="col-span-6">
                            <button className={Styles.buyNowBtn}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
