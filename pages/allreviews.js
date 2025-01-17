import ProductHeader from '../components/ProductHeader';
import ReviewCard from '../components/ReviewCard';
import Pagination from '../components/Pagination';
import Header from "@/components/Header";
import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import { useRouter } from "next/router";

const AllReviews = () => {
  const router = useRouter();
  const { id } = router.query; // Access the id from the URL query

  const reviews = [
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "James Franco",
      location: "Panadura",
      date: "23 Oct, 2022",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "James Franco",
      location: "Panadura",
      date: "23 Oct, 2022",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "James Franco",
      location: "Panadura",
      date: "23 Oct, 2022",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "James Franco",
      location: "Panadura",
      date: "23 Oct, 2022",
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto mt-60 py-8 px-4">
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <ProductHeader />
          <div style={{ marginTop: '20px' }}>
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
          <Pagination />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AllReviews;
