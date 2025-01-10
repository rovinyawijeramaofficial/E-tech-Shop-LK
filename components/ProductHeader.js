const ProductHeader = () => {
    return (
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}>
        <img
          src="/images/image 2.png"
          alt="iPhone 14 Pro Max"
          style={{ width: '150px', borderRadius: '8px' }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '10px' }}>iPhone 14 Pro Max</h2>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
            Rs. 259,999 <span style={{ textDecoration: 'line-through', color: '#888' }}>Rs. 309,999</span>
          </p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>4.5/5 ★★★★☆</p>
          <div>
            {/* Add a styled bar chart for ratings */}
            <p>Average Rating</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductHeader;
  