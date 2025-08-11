'use client';
import Styles from './carouselparent.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselParent() {
    const { carouselParent, item } = Styles
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className={carouselParent}>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                className='rounded-md'
            >
                <div className={item}>
                    <img src={'https://setmycart.blob.core.windows.net/smcproduction//7-1-2025/821333bdd6154eeba5fe387d3d132922/Asset%203.webp'} />
                </div>
                <div className={item}>
                    <img src={'https://setmycart.blob.core.windows.net/smcproduction//7-1-2025/821333bdd6154eeba5fe387d3d132922/Asset%203.webp'} />
                </div>
                <div className={item}>
                    <img src={'https://setmycart.blob.core.windows.net/smcproduction//7-1-2025/821333bdd6154eeba5fe387d3d132922/Asset%203.webp'} />
                </div>
                <div className={item}>
                    <img src={'https://setmycart.blob.core.windows.net/smcproduction//7-1-2025/821333bdd6154eeba5fe387d3d132922/Asset%203.webp'} />
                </div>
            </Carousel>
            
        </div>
    );
}