import React , { useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateSubscriber.css";

const UpdateSubscriber = () => {

    const [status, setStatus] = useState("");

  const params = useParams();
  console.log(params.id);

  const updateUser = async () => {
    const res = await fetch('http://localhost:3000/update_subscribed_user/'+params.id)
    const data = await res.json();
    // console.log(data);
    setStatus(data.status);
  };

  return (

    <div>
        <p>{status}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updateUser}>
        Button
      </button>
    </div>

  );
};

export default UpdateSubscriber;


