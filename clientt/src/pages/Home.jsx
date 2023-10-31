import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      description: "This is the description of the first post.",
      imgUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuclsFxyhoFQ8PJx-0mq4GDLrsBHscirxAn6TDnKpp0M9HtI9g",
    },
    {
      id: 2,
      title: "Post 2",
      description: "This is the description of the second post.",
      imgUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuclsFxyhoFQ8PJx-0mq4GDLrsBHscirxAn6TDnKpp0M9HtI9g",
    },
    {
      id: 3,
      title: "Post 3",
      description: "This is the description of the third post.",
      imgUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuclsFxyhoFQ8PJx-0mq4GDLrsBHscirxAn6TDnKpp0M9HtI9g",
    },
    // Add more posts as needed
  ];
  return (
    <div className="home">
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="img">
            <img src={post.imgUrl} alt="" />
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.description}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
};

export default Home;
