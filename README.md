# money-makers
# React Notification App

This is a simple React application that allows you to send push notifications. The app utilizes Firebase Cloud Messaging (FCM) for handling notifications.

## Features

- **Send Notifications:** Enter the title, body, and an optional image link to send notifications.
- **Notification Toast:** A toast notification will appear at the top-center position when a notification is successfully sent.
- **Loading State:** During the notification sending process, a loading state is displayed on the "Send Notification" button.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-notification-app
Install dependencies:

bash

npm install
Configure Firebase:

Ensure you have a Firebase project.
Replace the Firebase configuration in the firebase.js file with your own credentials.
Start the development server:

bash

npm start
The app will be accessible at http://localhost:3000.

Usage
Open the app in your browser.
Allow notification permissions when prompted.
Enter notification details (title, body, and image link).
Click the "Send Notification" button.
A toast notification will appear upon successful notification sending.
Technologies Used
React
Firebase Cloud Messaging (FCM)
React Toastify
Contributors
Anurag kushwah
Feel free to contribute or open issues if you have any suggestions or improvements.

Replace `<repository-url>` with the actual URL of your Git repository. Additionally, update the Firebase configuration in the `firebase.js` file with your own credentials.

