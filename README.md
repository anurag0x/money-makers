# Firebase Push Notification App

This is a simple React application for sending Firebase push notifications. The app includes a user interface for requesting notification permission, and a form for sending notifications with a title and body.

## Features

- **Notification Permission**: Requests the user's permission for receiving notifications.
- **Send Notification**: Allows the user to send a custom notification with a title and body.
- **Real-time Updates**: Updates the UI in real-time when a background or foreground message is received.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following:

- Node.js and npm installed on your machine.
- Firebase Cloud Messaging (FCM) project set up with necessary credentials.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anurag0x/money-makers.git
Install dependencies:

bash

cd firebase-push-notification-app
npm install
Configure Firebase:

Create a Firebase project and obtain your Firebase configuration.
Replace the Firebase configuration in src/firebase.js with your own.
Usage
Run the application:

bash

npm start
The app will be accessible at http://localhost:3000.
Or u can directly Visit "https://money-makers.vercel.app/"

Allow notifications when prompted to grant permission.

Enter a title and body in the form, and click "Send Notification" to send a notification.

Folder Structure
The project has the following folder structure:

public: Contains the HTML template and static assets.
src: Contains the React application source code.
components: Reusable React components.
firebase.js: Firebase configuration and messaging setup.
App.js: Main application component.
PushNotification.js: Component for sending notifications.
Firebase Configuration
Ensure you have replaced the Firebase configuration in src/firebase.js with your own. This includes the apiKey, authDomain, projectId, messagingSenderId, and appId.

Sending Notifications
To send a notification:

Enter a title and body in the respective input fields.
Optionally, provide an image link.
Click the "Send Notification" button.
Real-time Updates
The app listens for background and foreground messages using Firebase Cloud Messaging. Ensure that the messaging service worker (firebase-messaging-sw.js) is correctly configured.

Contributing
Contributions are welcome! If you find any issues or want to add new features, please submit a pull request.
