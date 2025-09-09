import SectionHeading from "../sectionHeading/SectionHeading";
import Styles from "./shopSection.module.css";

export default function ShopSection() {
    const data = [
        {
            imgURL:
                "https://setmycart.blob.core.windows.net/smcproduction//7-25-2025/090055e8548147a49f54b71220124180/gift.jpg",
            giftName: "GIFT HAMPER",
            giftSub: "Curated hampers for every occasion",
        },
        {
            imgURL:
                "https://setmycart.blob.core.windows.net/smcproduction//3-22-2025/0dd8c99d67334c9e81d4ebd08733c7e5/main%20image.webp",
            giftName: "SELF CARE",
            giftSub: "Pamper yourself with our luxury range",
        },
        {
            imgURL:
                "https://setmycart.blob.core.windows.net/smcproduction//2-28-2025/1913aef2ebb94131aa7235c74f733f91/essential%20oil.webp",
            giftName: "ESSENTIAL OIL",
            giftSub: "Relax, refresh & rejuvenate naturally",
        },
        {
            imgURL:
                "https://setmycart.blob.core.windows.net/smcproduction//3-22-2025/b13c8c1f127e439580c0ece045a2647a/main%20image.png",
            giftName: "FRAGRANCES",
            giftSub: "Aroma that lingers beautifully",
        },
        {
            imgURL:
                "https://setmycart.blob.core.windows.net/smcproduction//2-28-2025/2725fd6165b4411a92dc9b7fb457bdcd/fragrance.webp",
            giftName: "AIR FRESHENER",
            giftSub: "Fresh vibes for every space",
        },
        {
            imgURL:
                "https://setmycart.blob.core.windows.net/smcproduction//2-28-2025/2d5d1f32b2bc47ad8dd76767f724d0bf/gift%20sets.webp",
            giftName: "GIFT SETS",
            giftSub: "Perfect bundles for loved ones",
        },
        {
            imgURL:
                "https://setmycart.blob.core.windows.net/smcproduction//3-22-2025/a763c6063f1d47758fe3105ec1a6380d/main%20image.webp",
            giftName: "BODY MIST",
            giftSub: "Light and refreshing scents",
        },
        {
            imgURL:
                "https://setmycart.blob.core.windows.net/smcproduction//3-22-2025/a2e6351dcbd84f2b9d71f5fe272bb797/main.webp",
            giftName: "POCKET PERFUME",
            giftSub: "On-the-go freshness anytime",
        },
    ];

    return (
        <div className={Styles.shopSectionWrapper}>
            <div className={Styles.bannerSection}>
                <h6 className={Styles.text}>Explore the Options</h6>
                <div className={Styles.sectionWrapper}>
                    <p className={Styles.subtext}>
                        Discover our curated range of gifts and essentials designed to bring
                        elegance, comfort, and fragrance into your everyday life.
                    </p>
                </div>
            </div>

            <section className={Styles.masonryGrid}>
                {data.map((item, index) => (
                    <div key={index} className={Styles.masonryItem}>
                        <img src={item.imgURL} alt={item.giftName} />
                        <div className={Styles.caption}>
                            <h3>{item.giftName}</h3>
                            <p>{item.giftSub}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
