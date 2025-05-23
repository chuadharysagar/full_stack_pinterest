import React, { useState } from 'react'
import './Comments.css'
import { useQuery } from "@tanstack/react-query"
import apiRequest from '../../utils/apiRequest.js'
import Comment from './Comment.jsx';
import CommentFrom from './CommentFrom.jsx';

const Comments = ({ id }) => {

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "comment not found!";
  console.log(data);

  return (
    <div className='comments'>
      <div className="commentList">
        <span className="commentCount">{data.length ===0 ?"No comments":data.length+" comments"}</span>

        {/* single commet  */}
        {data.map((comment) => (
          <Comment key={comment._id} comment ={comment}/>
        ))}
        {/* Commnet Form  */}
       <CommentFrom id={id}/>
      </div>

    </div>
  )
}

export default Comments