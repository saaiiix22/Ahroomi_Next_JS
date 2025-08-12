'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "../reviewCard/ReviewCard";
import Styles from './reviewCustomer.module.css'

export default function ReviewCustomer() {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const reviews = [
        {
            id: "content1",
            img: "/images/userReview.jpg",
            name: "Aarav Mehta",
            address: "Mumbai, Maharastra",
            heading: "Skin feels amazing!",
            text: "Ahroomi products have transformed my skincare routine. My skin feels softer, healthier, and more radiant within just a few weeks of use."
        },
        {
            id: "content2",
            img: "/images/userReview.jpg",
            name: "Priya Sharma",
            address: "New Delhi",
            heading: "Pure and Natural",
            text: "I love how transparent Ahroomi is about ingredients. The products feel fresh, gentle, and perfect for my sensitive skin."
        },
        {
            id: "content3",
            img: "/images/userReview.jpg",
            name: "Rahul Verma",
            address: "Bangalore, Karnataka",
            heading: "Best purchase ever",
            text: "From packaging to performance, everything about Ahroomi products feels premium. My skin looks more hydrated and youthful."
        },
        {
            id: "content4",
            img: "/images/userReview.jpg",
            name: "Neha Kapoor",
            address: "Kolkata, West Bengal",
            heading: "Worth every penny",
            text: "Ahroomi has become my go-to brand. The natural touch and long-lasting results are exactly what I was looking for. Especially loved the body mist."
        },
        {
            id: "content5",
            img: "/images/userReview.jpg",
            name: "Vikram Singh",
            address: "Pune, Maharastra",
            heading: "Fresh and revitalizing",
            text: "The moringa-based formula feels so refreshing after workouts. My skin feels cleaner, softer, and healthier than ever."
        }
    ]


    return (
        <div className="p-10 m-auto px-20">
            <h6 className={Styles.homeHead}>What Others say about us</h6>
            <Carousel
                responsive={responsive}
                draggable={true}
                showDots={false}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="transform 0.8s ease-in-out"
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                arrows={false}
                dotListClass={`${Styles.dotList}`}
            >
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Carousel>
        </div>
    );
}
