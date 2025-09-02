"use client";
import { FaStar } from "react-icons/fa";
import Styles from "./customerReviewCard.module.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function CustomerReviewCard() {
    return (
        <div className={Styles.reviewCard}>
            {/* Top row: avatar, name + time, rating */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg"
                        alt="Reviewer"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-sm">Alexander Rity</h3>
                        <p className="text-xs text-gray-500">4 months ago</p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">4.0</span>
                    <div className="flex text-purple-500">
                        <Stack spacing={1}>
                            <Rating
                                name="half-rating-read"
                                defaultValue={4}
                                precision={0.5}
                                readOnly
                                sx={{ fontSize: "18px" }}
                            />
                        </Stack>
                    </div>
                </div>
            </div>

            {/* Review text */}
            <p className={Styles.reviewText}>
                “I’ve been using Ahroomi Musk for a few weeks now and really enjoy the warm, subtle fragrance. It’s refreshing without being overpowering, and the essential-oil base feels gentle on the skin. The scent lasts a few hours, which is decent for a body mist, and the 100 ml bottle is perfect to carry around. Would love it if the fragrance lingered a little longer, but overall it’s a great everyday option.
            </p>

            {/* Review images */}
            <div className="flex gap-2 mt-3">
                <img src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg" alt="review" className={Styles.reviewImage} />
                <img src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg" alt="review" className={Styles.reviewImage} />
                <img src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg" alt="review" className={Styles.reviewImage} />
                <img src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg" alt="review" className={Styles.reviewImage} />
            </div>
        </div>
    );
}
