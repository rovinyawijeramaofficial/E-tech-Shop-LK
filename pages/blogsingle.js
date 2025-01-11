import React from "react";

const BlogSingle = () => {
  return (
    <div className="blog-single">
      {/* Blog Header Section */}
      <header className="blog-header">
        <img 
          src="/path-to-header-image.jpg" 
          alt="Blog Header" 
          className="header-image" 
        />
        <div className="header-content">
          <h1>Lorem Ipsum dolor sit amet, consectetur...</h1>
          <p>by Matthew Rocksmith | 23 Oct 2022 | 3 Minute Read</p>
        </div>
      </header>

      {/* Blog Content Section */}
      <section className="blog-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="share-section">
          <p>Share this article on:</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </section>

      {/* Comment Form Section */}
      <section className="comments-section">
        <h2>Add a Comment</h2>
        <form className="comment-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Comment" required></textarea>
          <button type="submit">Send</button>
        </form>

        {/* Recent Comments */}
        <div className="recent-comments">
          <h2>Recent Comments</h2>
          <ul>
            <li>
              <strong>Matthew Rocksmith:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <button className="reply-btn">Reply</button>
            </li>
            <li>
              <strong>Matthew Rocksmith:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <button className="reply-btn">Reply</button>
            </li>
            <li>
              <strong>Matthew Rocksmith:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <button className="reply-btn">Reply</button>
            </li>
          </ul>
          <button className="load-more-btn">Load More</button>
        </div>
      </section>
    </div>
  );
};

export default BlogSingle;
