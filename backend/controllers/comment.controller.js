import Comment from "../modals/comment.model.js"
import User from '../modals/user.model.js'
import jwt from 'jsonwebtoken';

export const getPostComments = async (req, res) => {
   const { postId } = req.params;

   const comments = await Comment.find({ pin: postId })
      .populate("user", "username img displayName")
      .sort({ createdAt: -1 });
   return res.status(200).json(comments);
}

// add comment end point 
export const addComment = async (req, res) => {
   try {
      const { description, pin } = req.body;
      const userId = req.userId;

      const comment = await Comment.create({ description, pin, user: userId });
      res.status(201).json(comment);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to add new Comment" });
   }
};