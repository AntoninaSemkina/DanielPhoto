import React, { useState } from "react";
import style from "./style.module.css";
import Star5 from "../../../../../components/EvaluationStars/Star5/Star5";
import SocialMedia from "../../../../../components/SocialMedia/SocialMedia";
import btnLeft from "../../../../../images/btnLeft.png";
import btnRight from "../../../../../images/btnRight.png";

interface Review {
  name: string;
  location: string;
  review: string;
}
interface ReviewBlockProps {
  reviews: Review[];
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const visibleReviews =
    window.innerWidth >= 1440
      ? reviews.slice(currentIndex, currentIndex + 3) // Отображаем 3 отзыва
      : [reviews[currentIndex]]; // Отображаем 1 отзыв

  return (
    <div className={style.container}>
      {visibleReviews.map((review, index) => (
        <div key={index} className={style.reviewBlock}>
          <div className={style.box1}>
            <div className={style.box1_el1}>
              <div className={style.name}>{review.name}</div>
              <div className={style.location}>{review.location}</div>
            </div>
            <div className={style.box1_el2}>
              <div className={style.socialMedia}>
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className={style.stars}>
            <Star5 />
          </div>
          <div className={style.reviewText}>
            <span>{review.review}</span>
          </div>
          <div className={style.controls}>
            <button onClick={prevReview} className={style.btn1}>
              <img className={style.arrow} src={btnLeft} alt="leftArrow" />
            </button>
            <button onClick={nextReview} className={style.btn2}>
              <img className={style.arrow} src={btnRight} alt="rightArrow" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewBlock;
