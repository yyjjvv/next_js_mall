const RATINGS = [1, 2, 3, 4, 5];

const StarRating = ({ value = 1 }) => {
    return (
        <span>{RATINGS.map((rating) => (value >= rating ? "★" : "✩"))}</span>
    );
};

export default StarRating;
