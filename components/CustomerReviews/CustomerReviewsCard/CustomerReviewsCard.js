import React from "react";
import CustomerReviewsBG from "../CustomerReviewsBG/CustomerReviewsBG";
import styles from "./CustomerReviewsCard.module.css";

export default function CustomerReviews() {
  const reviews = [
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
    },
  ];

  return (
    <CustomerReviewsBG>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Customer Reviews</h2>
          <div className={styles.grid}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.rating}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className={styles.star}>&#9733;</span>
                  ))}
                </div>
                <p className={styles.text}>{review.text}</p>
                <p className={styles.author}>{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CustomerReviewsBG>
  );
}
