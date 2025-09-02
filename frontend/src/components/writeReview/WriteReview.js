"use client";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Styles from "./writeReview.module.css";

export default function WriteReview() {
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Review submitted!");
    };

    return (
        <>
            <h2 className={Styles.heading}>Write a Review</h2>
            <div className={Styles.writeReview}>

                <form className={Styles.form} onSubmit={handleSubmit}>
                    {/* Left column */}
                    <div className={Styles.leftCol}>
                        <div className={Styles.field}>
                            <label className={Styles.label}>Your Rating :</label>
                            <Rating
                                name="user-rating"
                                value={rating}
                                onChange={(e, newValue) => setRating(newValue)}
                                precision={0.5}
                                sx={{ fontSize: "28px" }}
                            />
                        </div>

                        <div className={Styles.field}>
                            <label className={Styles.label}>Your Name :</label>
                            <input
                                type="text"
                                className={Styles.input}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        
                    </div>

                    {/* Right column */}
                    <div className={Styles.rightCol}>
                        <div className={Styles.field}>
                            <label className={Styles.label}>Your Review :</label>
                            <textarea
                                className={Styles.textarea}
                                rows="4"
                                placeholder="Write your review here..."
                                required
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className={Styles.submitBtn}>
                            Submit Review
                        </button>
                </form>
            </div>
        </>
    );
}
