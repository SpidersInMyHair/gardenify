
import React, {useState} from 'react';
import { colorStyle } from 'styled-system';

type RatingsProps = {
    ratings: any,
    handleRating: (r: number) => void
};

const Ratings: React.FC<RatingsProps> = ({ratings, handleRating}) => {
    const [rating, setRating] = useState(0)
    return (
        <span style={{marginLeft: 20, fontSize: "xx-large"}}>
            <span style={{color: "forestgreen", cursor: "pointer"}}>
                {[1,2,3,4,5].map((key) => (
                    <span key={key} onClick={() =>  handleRating(key)} onMouseEnter={() => setRating(key)} onMouseLeave={() => setRating((ratings && ratings.user_rating) || 0)}>
                        {rating ? (key <= rating ? "★" : "☆") : (ratings && key <= ratings.user_rating ? "★" : "☆")}
                    </span>
                ))}
            </span>
            {ratings &&
                <span style={{float: "right", color: "gold"}}>
                    {[1,2,3,4,5].map((key) => (
                        <span key={key}>
                            {key <= ratings.rating  ? "★" : "☆"}
                        </span>
                    ))}
                </span>
            }
        </span>
    )
}

export default Ratings;