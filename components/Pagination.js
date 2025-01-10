const Pagination = () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}>
        <button style={{
          margin: '0 5px',
          padding: '5px 10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}>❮</button>
        <button style={{
          margin: '0 5px',
          padding: '5px 10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: '#000',
          color: '#fff',
          cursor: 'pointer',
        }}>1</button>
        <button style={{
          margin: '0 5px',
          padding: '5px 10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}>2</button>
        <button style={{
          margin: '0 5px',
          padding: '5px 10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}>3</button>
        <button style={{
          margin: '0 5px',
          padding: '5px 10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}>❯</button>
      </div>
    );
  };
  
  export default Pagination;
  