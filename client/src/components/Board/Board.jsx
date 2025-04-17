import React from 'react'
import './Board.css'
import Image from '../Image/Image'
import apiRequest from '../../utils/apiRequest'
import { useQuery } from '@tanstack/react-query'
import { format } from "timeago.js"
import { Link } from 'react-router'

const Board = ({ userId }) => {

  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "User not found!";
  // console.log(data);

  return (
    <div className="collections">
      {/* collection  */}
      {data?.map((board) => (
        <Link to={`/search?boardId=${board._id}`}
          className='collection' key={board._id}>
          <Image src={board.firstPin.media} alt="" />
          <div className="collectioInfo">
            <h1>{board.title}</h1>
            <span>{board.pinCount} Pins .{format(board.createdAt)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Board