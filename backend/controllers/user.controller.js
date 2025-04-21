import User from '../modals/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// REGISTER THE USER HERE
export const registerUser = async (req, res) => {
   const { username, displayName, email, password } = req.body;

   // check if all feild are filled
   if (!username || !email || !password) {
      res.status(400).json({ message: "All fields are required!" });
   }

   const newhashedPassword = await bcrypt.hash(password, 10);

   const user = await User.create({
      username,
      displayName,
      email,
      hashedPassword: newhashedPassword,
   })

   // Set the cookies
   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

   res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 100,
   });
   // if eveything went well then return the user innformation without hashed password 
   const { hashedPassword, ...detailWithoutPassword } = user.toObject();

   return res.status(201).json(detailWithoutPassword);
}



// LOGIN USER HERE 
export const loginUser = async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      res.status(400).json({ message: "All fields are required!" });
   }

   const user = await User.findOne({ email });

   if (!user) {
      res.status(401).json({ message: "Invalid email or password" });
   }

   const isCorrectPassword = await bcrypt.compare(password, user.hashedPassword);

   if (!isCorrectPassword) {
      res.status(401).json({ message: "Invalid email or Password!" });
   }

   // User jwt token || generate jwt token 
   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

   res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 100,
   });

   const { hashedPassword, ...detailWithoutPassword } = user.toObject();

   return res.status(200).json(detailWithoutPassword);
}


// LOGOUT USER HERE
export const logoutUser = async (req, res) => {
   res.clearCookie("token");

   res.status(200).json({ message: "Logout Sucessfull" });
}

// Get all the user without password (User Profile)
export const getUser = async (req, res) => {
   const { username } = req.params;

   const user = await User.findOne({ username });

   const { hashedPassword, ...detailWithoutPassword } = user.toObject();

   return res.status(200).json(detailWithoutPassword);
}

