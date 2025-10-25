import { useState } from "react";
import { Notification } from "./uicomponents";

const useNotification = () => {
  // Message store
  const [store, setStore] = useState<string|null>(null);

  // Push new message
  const pushMessage = (message: string) => {
    // const id = Date.now();
    setStore(message );

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setStore(null);
    }, 3000);
  };

  // Renderer component
  const MessageRenderer = () => (
    <>
      {/* {store.map(item => (
        <Notification message={item.message} key={item.id} />
      ))} */}
      
      {store !==null && <Notification message={store}/>}

    </>
  );

  return { pushMessage, MessageRenderer };
};

export default useNotification;
