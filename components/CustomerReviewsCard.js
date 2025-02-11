import React from "react";
import styles from "./CustomerReviewsCard.module.css";
import Link from "next/link";

export default function CustomerReviews() {
  const reviews = [
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
  ];

  
  return (
    <div
  className="hidden sm:block bg-[rgb(244, 241, 241)] ">
      <section className={styles.section}>
        <h2 className={`${styles.heading} -mt-20`}>Customer Reviews</h2>
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <Link key={index} href="/allreviews">
              <div
                className={`${styles['card-container']} ${
                  index < 4 ? styles.firstRow : styles.secondRow
                }`}
              >
                <div className={`${styles.card} mt-5`}>
                  <div className={`${styles.rating} mt-5`}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className={styles.star}>&#9733;</span>
                    ))}
                  </div>
                  <p className={`${styles.text} -mt-3`}>{review.text}</p>
                  <p className={styles.author}>{review.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}