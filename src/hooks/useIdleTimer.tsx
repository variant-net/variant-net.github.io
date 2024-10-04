// src/hooks/useIdleTimer.tsx
import { useEffect, useState } from "react";

const useIdleTimer = (onIdle: () => void, timeout: number = 60000) => {
  const [lastActive, setLastActive] = useState<number>(Date.now());

  useEffect(() => {
    const handleActivity = () => setLastActive(Date.now());

    // Listen to user activity events
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    const interval = setInterval(() => {
      if (Date.now() - lastActive > timeout) {
        onIdle(); // Call the onIdle function (logout) when timeout is reached
      }
    }, 1000); // Check every second

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      clearInterval(interval);
    };
  }, [lastActive, timeout, onIdle]);

  return lastActive;
};

export default useIdleTimer;
