import React, { useState } from 'react'
import './ProfilePage.css'
import Image from '../../components/Image/Image'
import Gallary from '../../components/gallary/Gallary'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import apiRequest from "../../utils/apiRequest"
import Board from '../../components/Board/Board'
import FollowButton from './FollowButton'


const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "User not found!";

  //  console.log(data);

  return (
    <div className='profilePage'>
      <Image className="profileImg"
        path={data.img || "/general/noAvatar.png"}
        w={100}
        h={100}
        alt="" />
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUsername'>{data.username}</span>
      <div className='followCounts'>{data.followerCount} followers .{data.followingCount} followig</div>
      <div className='profileIntereactions'>
        <Image path="/general/share.svg" />
        <div className='profileButtons'>
          <button>Message</button>
          <FollowButton isFollowing={data.isFollowing}
            username={data.username} />
        </div>
        <Image path="/general/more.svg" />
      </div>
      <div className="profileOptions">
        <span className={type == "created" ? "active" : ""}
          onClick={() => setType("created")}
        >Created</span>
        <span className={type == "saved" ? "active" : ""}
          onClick={() => setType("saved")}
        >Saved</span>
      </div>
      {type === "created" ? <Gallary userId={data._id} /> : <Board userId={data._id} />}
    </div>
  )
}

export default ProfilePage