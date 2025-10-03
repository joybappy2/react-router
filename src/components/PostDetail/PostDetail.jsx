import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const PostDetail = () => {
  const postDetail = useLoaderData();

  const {id} = useParams()


  const navigate = useNavigate()
  const handleBack = ()=> navigate(-1)

  return (
    <div className="border p-3">
      <p>Post Detail</p>
      <p>{postDetail.id}</p>
      <p>{postDetail.title}</p>
      <p>{postDetail.body}</p>

      <button className="btn btn-error" onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;
