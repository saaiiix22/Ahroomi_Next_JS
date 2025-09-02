import Rating from "@mui/material/Rating";
import Styles from "./reviewSection.module.css";

export default function ReviewSection() {
  const reviewData = [
    { stars: 5, count: "14K", percent: 80 },
    { stars: 4, count: "6K", percent: 60 },
    { stars: 3, count: "4K", percent: 40 },
    { stars: 2, count: "800", percent: 20 },
    { stars: 1, count: "9K", percent: 50 },
  ];

  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.heading}>Customer Reviews</h2>

      <div className={Styles.reviewSectionAlt}>
        <div className={Styles.leftCard}>
          <h2 className={Styles.avgRating}>4.0</h2>
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={0.5}
            readOnly
            sx={{ fontSize: "28px"}}
          />
          <p className={Styles.totalReviews}>35K ratings</p>
        </div>

        <div className={Styles.rightStack}>
          {reviewData.map((row, i) => (
            <div className={Styles.rowAlt} key={i}>
              <span className={Styles.starLabel}>{row.stars} ★</span>
              <div className={Styles.progressBarAlt}>
                <div
                  className={Styles.progressFillAlt}
                  style={{ width: `${row.percent}%` }}
                ></div>
              </div>
              <p className={Styles.countLabel}><span>{row.count}</span> reviews</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
