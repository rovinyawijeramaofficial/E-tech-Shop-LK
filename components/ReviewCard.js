const ReviewCard = ({ review }) => {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#fff',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <p>★★★★★</p> {/* Dynamically generate stars based on review.rating */}
          <p>{review.date}</p>
        </div>
        <p style={{ marginBottom: '10px' }}>{review.text}</p>
        <p style={{ fontWeight: 'bold' }}>- {review.author}, {review.location}</p>
      </div>
    );
  };
  
  export default ReviewCard;
  