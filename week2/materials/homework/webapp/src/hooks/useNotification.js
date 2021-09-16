import { useEffect, useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  const clearNotification = () => {
    setNotifications([]);
  }

  const createNotification = (text) => {
    // hint: use setTimeout
    const newNotifications = notifications.filter(item => item === text).concat(text);  
    setNotifications(newNotifications);
  };

  useEffect(() => {
    let timer = setTimeout(() => clearNotification(), 800);
    return () => {
      clearTimeout(timer);
    };
  }, [createNotification]);

  return { notifications, createNotification };
}

export default useNotifications;
