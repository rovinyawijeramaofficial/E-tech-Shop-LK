import React from "react";
import styles from "./CustomerReviewsCard.module.css";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe" },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.91,
    slidesToScroll: 1,
    arrows: true,  // Enables manual navigation
    rtl: true,  // Moves from right to left
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hidden sm:block bg-[rgb(244, 241, 241)]">
      <section className={styles.section}>
        <h2 className={`${styles.heading} -mt-20`}>Customer Reviews</h2>

        {/* First Row */}
        <Slider {...settings} className={styles.slider}>
          {firstRow.map((review, index) => (
            <Link key={index} href="/allreviews">
              <div className={`${styles["card-container"]} ${styles.firstRow}`}>
                <div className={`${styles.card} mt-5`}>
                  <div className={`${styles.rating} -mt-1`}> <br/> <br/><br/>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className={styles.star} >&#9733;</span>
                    ))}
                  </div>
                  <p className={`${styles.text} -mt-3`}>{review.text}</p>
                  <p className={styles.author}>{review.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>

        {/* Second Row */}
        <Slider {...settings} className={styles.slider}>
          {secondRow.map((review, index) => (
            <Link key={index} href="/allreviews">
              <div className={`${styles["card-container"]} ${styles.secondRow}`}>
                <div className={`${styles.card} mt-5`}>
                  <div className={`${styles.rating} -mt-1`}> <br/> <br/><br/>
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
        </Slider>

      </section>
      <br/> <br/>
    </div>
  );
}
