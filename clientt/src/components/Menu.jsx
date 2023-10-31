import React from 'react'

const Menu = () => {

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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post)=> (
            <div className="post" key={post.id}>
                <img src={post.imgUrl} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu