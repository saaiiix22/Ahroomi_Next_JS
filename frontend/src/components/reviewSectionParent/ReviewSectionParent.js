import EachReviewStarWise from "../eachReviewStarWise/EachReviewStarWise";
import ReviewSection from "../reviewSection/ReviewSection";
import WriteReview from "../writeReview/WriteReview";

export default function ReviewSectionParent() {
    return (
        <div className="grid grid-cols-12 gap-10" style={{ marginTop: "80px" }}>
            <div className="col-span-6">
                <ReviewSection />
            </div>
            <div className="col-span-6">
                <WriteReview />
            </div>
            <div className="col-span-12">
                <EachReviewStarWise />
            </div>
        </div>
    );
}