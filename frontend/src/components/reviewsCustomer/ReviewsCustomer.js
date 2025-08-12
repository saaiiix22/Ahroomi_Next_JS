'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ReviewCustomer() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="p-10 m-auto">
            <Carousel
                responsive={responsive}
                draggable={false}
                showDots={true}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </div>
    );
}