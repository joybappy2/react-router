

import { useState } from "react";
import { Link, Navigate } from "react-router";

const User = ({user}) => {

  const {id, photo, name, country, state} = user

  const [visitHome , setVisitHome] = useState(false)

  if ( visitHome ) {
    return <Navigate to="/home"></Navigate>
  }

  return (
    <div className="border mt-5 p-3 flex flex-col justify-center items-center bg-blue-200">
      <p className="text-lef0000t">{id}</p>
      <img className="h-20 w-20 p-2" src={photo} alt="" />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-center text-xs">{country}</p>
      <p className="text-center text-xs" >
        {state}
      </p>

      <Link to={`/users/userdetails/${id}`}>Show Details</Link>


    <button onClick={()=>setVisitHome(true)} className="btn btn-success">Visit Home</button>
    </div>
  );
};

export default User;
