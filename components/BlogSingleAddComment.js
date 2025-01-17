import React, { useState } from "react";
import BlogSingleShareSection from "@/components/BlogSingleShareSection";


export default function BlogSingleAddComment() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Mahinda Rajapakhe",
      date: "23 Oct",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replies: [
        {
          id: 11,
          name: "Mahinda Rajapakhe",
          date: "23 Oct",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      id: 2,
      name: "Mahinda Rajapakhe",
      date: "23 Oct",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replies: [],
    },
    {
      id: 3,
      name: "Mahinda Rajapakhe",
      date: "23 Oct",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replies: [],
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.comment) {
      const newComment = {
        id: comments.length + 1,
        name: formData.name,
        date: "Today",
        comment: formData.comment,
        replies: [],
      };
      setComments([newComment, ...comments]);
      setFormData({ name: "", email: "", comment: "" });
    }
  };

  return (
    <div className="p-6 bg-white max-w-4xl mx-auto">

        <BlogSingleShareSection/>
      {/* Add a Comment Section */}
      <form className="mb-8" onSubmit={handleCommentSubmit}>
        <h3 className="text-2xl font-bold text-black mb-4">Add a Comment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-md w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="border border-gray-300 p-3 rounded-md w-full"
          />
        </div>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder="Your Comment"
          rows="4"
          className="border border-gray-300 p-3 rounded-md w-full mt-4"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md mt-4"
        >
          Send
        </button>
      </form>

      {/* Recent Comments Section */}
      <div>
        <h3 className="text-2xl font-bold text-black mb-4">Recent Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-black">{comment.name}</p>
                <p className="text-gray-500 text-sm">{comment.date}</p>
                <p className="text-gray-700 mt-2">{comment.comment}</p>
                <button className="text-blue-600 font-medium mt-2">
                  Reply
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center text-gray-500 hover:text-black">
                  👍 <span className="ml-1">19</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-black">
                  👎 <span className="ml-1">0</span>
                </button>
                <button className="text-gray-500 hover:text-black">⋮</button>
              </div>
            </div>
            {comment.replies.map((reply) => (
              <div
                key={reply.id}
                className="ml-6 mt-4 border-l border-gray-300 pl-4"
              >
                <p className="font-bold text-black">{reply.name} Replied</p>
                <p className="text-gray-500 text-sm">{reply.date}</p>
                <p className="text-gray-700 mt-2">{reply.comment}</p>
              </div>
            ))}
          </div>
        ))}
        <button className="bg-gray-200 px-4 py-2 rounded-md text-black">
          Load More
        </button>
      </div>
    </div>
   
  );
}
