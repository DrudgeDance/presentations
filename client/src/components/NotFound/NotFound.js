import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
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
        <h1 className="text-4xl font-bold text-[#9b088c]">404: Page Not Found</h1>
        <h2 className="text-2xl text-black mt-4">The page you are looking for does not exist.</h2>
        <h3 className="text-xl text-black mt-4">You will be redirected to the homepage in {countdown} seconds...</h3>
      </div>
    </div>
  );
}
