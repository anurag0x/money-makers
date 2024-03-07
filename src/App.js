import { useEffect, useState } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [notificationData, setNotificationData] = useState({
    title: '',
    body: '',
    imageLink: '',
  });

  const notify = () => toast("Notification sent Successfully")

  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNotificationData({
      ...notificationData,
      [name]: value,
    });
  };

  const sendNotification = async () => {
    const serverKey = "AAAAQDORITs:APA91bEAE9WZ7Anx5zydW9F6UqbuaeZLNl_6Pm2LMr4mfdSfusSva837QAerYwDyyJGdVYCptztr03hR8e8FkU_4kYVlB8l8V6iju3EgzEXJvg7XBcQ-sCx7dUZpT4DkOSk_Eo_boNC9";
    
  
    const AllData = {
      to: token,
      notification: {
        title:notificationData.title,
        body:notificationData.body,
      },
    };
  
    try {
      const response = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `key=${serverKey}`,
        },
        body: JSON.stringify(AllData),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        // Handle success, if needed
        notify(); // Notify on successful sending
        setNotificationData({
          title: '',
          body: '',
          imageLink: '',
        });
        // messaging.onMessage(response);
        // messaging.onBackgroundMessage(response)
        console.log(token)
      
        console.log(response)
       
      } else {
        console.error('Error sending notification:', response.status, response.statusText);
        // Handle errors
      }
    } catch (error) {
      console.error('Error sending notification:', error);
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  

     

  async function requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        // Generate Token
        const token = await getToken(messaging, {
          vapidKey: "BGchzt_DyozDLUdhRKwbfcXi_gDQOiZ2Eqt8oZNzpla6CY_RzTj7gryRdikbBfD-8aMOzLx2u_gTXYj__9BtW4M",
        });
        console.log("Token Gen", token);
        setToken(token);
      } else if (permission === "denied") {
        alert("You denied notification permission");
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  }

  useEffect(() => {
    // Request user for notification permission on mount
    requestPermission();
  }, []);

  return (
    <div style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0XawF4KynrIjrJ0n_Gg_wSD7-AtORJw0Qw&usqp=CAU)", backgroundSize: "cover", height: "100vh", margin: "0px", padding: "0px", display: "flex", justifyContent: "center" }}>
      <ToastContainer />

      <div style={styles.container}>
        <h2 style={styles.title}>Notification</h2>
        <div>
          <label style={styles.label}>Title:</label>
          <input
            required
            type="text"
            name="title"
            value={notificationData.title}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Body:</label>
          <input
            required
            type="text"
            name="body"
            value={notificationData.body}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Image Link:</label>
          <input
            type="text"
            name="imageLink"
            value={notificationData.imageLink}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <button onClick={sendNotification} style={styles.button} disabled={loading}>
          {loading ? 'Sending...' : 'Send Notification'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "340px",
    padding: '20px',
    color: "white",
    borderRadius: '8px',
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'whitesmoke',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default App;
