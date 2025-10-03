import { useLoaderData } from "react-router";


const UserDetails = () => {

    const user = useLoaderData()
    return (
        <div>
            User Details Here
            <div>
                <h3>{ user.name }</h3>
                <div className="border">

                    <p>{ user.address }</p>
                    <p>{ user.country }</p>
                    <p>{ user.zip }</p>
                    <p>{ user.address }</p>
                    <img className="h-20 w-20 p-3" src={user.photo} alt="" />

                </div>
            </div>
        </div>
    );
};

export default UserDetails;