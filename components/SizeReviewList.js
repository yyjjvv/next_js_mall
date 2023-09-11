import styles from "./SizeReviewList.module.css";

import SizeReview from "./SizeReview";

const SizeReviewList = ({ sizeReviews }) => {
    return (
        <ul className={styles.sizeReviewList}>
            {sizeReviews.map((sizeReview) => (
                <SizeReview key={sizeReview.id} sizeReview={sizeReview} />
            ))}
        </ul>
    );
};

export default SizeReviewList;
