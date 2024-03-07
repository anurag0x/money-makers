importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);


const firebaseConfig = {
  apiKey: "AIzaSyCD4foqq4a3LaDu-tq8e9Pqw77nFE7FR7s",
  authDomain: "money-makers-a9908.firebaseapp.com",
  projectId: "money-makers-a9908",
  storageBucket: "money-makers-a9908.appspot.com",
  messagingSenderId: "275743056187",
  appId: "1:275743056187:web:1d9a45e8c503423d53571e",
  measurementId: "G-TVTW5RBPQF"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.imageLink, 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

messaging.onMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received foreground message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.imageLink, 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
messaging.setBackgroundMessageHandler((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});