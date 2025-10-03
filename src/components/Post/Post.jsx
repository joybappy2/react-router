import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {

  const navigate = useNavigate()
  return (
    <div className="border mt-5 p-3">
      <p>{post.id}</p>
      <p>{post.body}</p>

      <Link to={`/post/${post.id}`}>
        <button className="btn btn-success h-7 px-2 ">Show Detail </button>

      </Link>
        <button onClick={()=>navigate(`/post/${post.id}`) } className="btn btn-primary ml-5">Need Details</button>
    </div>
  );
};

export default Post;
