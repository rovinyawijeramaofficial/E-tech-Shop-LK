import React from "react";
import styles from "./CustomerReviewsCard.module.css";
import Link from "next/link";

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
    // Hide this entire block on mobile, only show on sm+ screens
    <div className="hidden sm:block">
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Customer Reviews</h2>
          <div className={styles.grid}>
            {reviews.map((review, index) => (
              <Link key={index} href="/allreviews">
                <div className={styles.card}>
                  <div className={styles.rating}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className={styles.star}>&#9733;</span>
                    ))}
                  </div>
                  <p className={styles.text}>{review.text}</p>
                  <p className={styles.author}>{review.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
