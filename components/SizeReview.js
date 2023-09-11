import styles from "./SizeReview.module.css";
import formatDate from "@/util/formatDate";
import sizeReviewLabels from "@/data/sizeReviewLabels";

const SizeReview = ({ sizeReview }) => {
    return (
        <li className={styles.sizeReview}>
            <div>
                <div className={styles.date}>
                    {formatDate(new Date(sizeReview.createdAt))}
                </div>
                <div className={styles.profile}>
                    ({sizeReviewLabels.sex[sizeReview.sex]} {sizeReview.height}
                    cm 기준) {sizeReview.size}
                </div>
            </div>
            <div className={styles.fit}>
                {sizeReviewLabels.fit[sizeReview.fit]}
            </div>
        </li>
    );
};

export default SizeReview;
