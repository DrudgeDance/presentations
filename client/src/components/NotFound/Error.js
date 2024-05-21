import React, { useEffect, useState } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  const [countdown, setCountdown] = useState(5);  

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {  
          navigate('/');  
          return 0;  
        }
        return prevCountdown - 1;  
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, [navigate]);

  return (
    <div className="mt-[1vw] bg-white p-5 flex justify-center items-center w-full min-h-screen">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-[#9b088c]">Oops!</h1>
        <h2 className="text-2xl text-black mt-4">Sorry, an unexpected error has occurred...</h2>
        <h3 className="text-xl text-black mt-4">You will be redirected to the homepage in {countdown} seconds...</h3>
        <p className="text-lg text-black mt-4">
          <i>Error: {error?.message || "Unknown error"}</i>
        </p>
      </div>
    </div>
  );
}
