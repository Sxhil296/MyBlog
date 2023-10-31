import { db } from "../db.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  //FIND THE USER BY EMAIL OR USERNAME AND CHECK PASSWORD
  const q = "SELECT * FROM users  WHERE username = ?"

  db.query(q, [req.body.username], (err, data) => {
    if(err) return res.json(err)
    if(data.length === 0) return res.status(404)("User not found!")

    //check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)
    if(!isPasswordCorrect) return res.status(400)("Wronf username or password!")

  })
};

export const logout = (req, res) => {};