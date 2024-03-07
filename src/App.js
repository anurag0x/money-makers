import { useEffect, useState } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PushNotification from "./Components/PushNotification";

function App() {
  const [token, setToken] = useState("");

  async function requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        // Generate Token
        const token = await getToken(messaging, {
          vapidKey:
            "BGchzt_DyozDLUdhRKwbfcXi_gDQOiZ2Eqt8oZNzpla6CY_RzTj7gryRdikbBfD-8aMOzLx2u_gTXYj__9BtW4M",
        });
        console.log("Token Gen", token);
        setToken(token);
      } else if (permission === "denied") {
        alert("You denied notification permission");
      }
    } catch (error) {
      console.error("Error requesting permission:", error);
    }
  }

  useEffect(() => {
    // Request user for notification permission on mount
    requestPermission();
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0XawF4KynrIjrJ0n_Gg_wSD7-AtORJw0Qw&usqp=CAU)",
        backgroundSize: "cover",
        height: "100vh",
        margin: "0px",
        padding: "0px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
      <PushNotification token={token} />
    </div>
  );
}

export default App;
