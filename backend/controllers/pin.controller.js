import Pin from "../modals/pin.model.js"
import User from "../modals/user.model.js"
import mongoose from "mongoose";

// export const getPins = async (req, res) => {
//   const pageNumber = Number(req.query.cursor) || 0;
//   const search = req.query.search;
//   const userId = req.query.userId;
//   const LIMIT = 21;

//   const pins = await Pin.find(
//     search
//       ? {
//         $or: [
//           { title: { $regex: search, $options: "i" } },
//           { tags: { $in: [search] } },
//         ],
//       }
//       : userId
//         ? { user: userId }
//         : {}
//   )
//     .limit(LIMIT)
//     .skip(pageNumber * LIMIT);

//   const hasNextPage = pins.length === LIMIT;

//   // await new Promise((resolve) => setTimeout(resolve, 3000));

//   res
//     .status(200)
//     .json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
// };
export const getPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const search = req.query.search?.trim();
  const userId = req.query.userId;
  const boardId = req.query.boardId;

  const LIMIT = 21;

  const query = {};

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { tags: { $in: [search] } },
    ];
  }

  if (userId) {
    query.user = userId;
  }

  if (boardId) {
    query.board = boardId;
  }

  try {
    const pins = await Pin.find(query)
      .limit(LIMIT)
      .skip(pageNumber * LIMIT);

    const hasNextPage = pins.length === LIMIT;

    res.status(200).json({
      pins,
      nextCursor: hasNextPage ? pageNumber + 1 : null,
    });
  } catch (err) {
    console.error("Error fetching pins:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};


export const getPin = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if it's a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid pin ID" });
    }

    const pin = await Pin.findById(id).populate("user", "username img displayName");

    if (!pin) {
      return res.status(404).json({ message: "Pin not found" });
    }

    res.status(200).json(pin);
  } catch (err) {
    console.error("Error in getPin:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

