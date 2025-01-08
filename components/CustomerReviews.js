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
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-black-500 text-xl">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <p className="text-gray-900 font-semibold">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  