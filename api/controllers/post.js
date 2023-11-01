import { db } from "../db.js";
import jwt from "jsonwebtoken";

//get all posts on homepage
export const getPosts = (req, res) => {
  // res.json("from controller");
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

//get post on single post page
export const getPost = (req, res) => {
  const q =
    "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id =?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

//make a blog post
export const addPost = (req, res) => {
  res.json("from controller");
};

// //delete post
// //need to check jwt, no jwt = not authenticated to delete post
// export const deletePost = (req, res) => {
//   const token = req.cookies.access_token;
//   if (!token) return res.status(401).json("Not authenticated!");

//   jwt.verify(token, "jwtkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const postId = req.params.id;
//     const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

//     db.query(q, [postId, userInfo.id], (err, data) => {
//       if (err) return res.status(403).json("You can delete only your post!");

//       return res.json("Post has been deleted!");
//     });
//   });
// };
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("Not authenticated! Token missing.");
  }

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) {
      console.error(err); // Add this line for debugging
      return res.status(403).json("Token is not valid!");
    }

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) {
        console.error(err); // Add this line for debugging
        return res.status(403).json("You can delete only your post!");
      }

      return res.json("Post has been deleted!");
    });
  });
};

//edit an existing post
export const updatePost = (req, res) => {
  res.json("from controller");
};
