# Realtime Chat App

![Socket.io](https://img.shields.io/badge/Socket.io-Real--time-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-yellowgreen)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-yellow)


This is a real-time chat application built with the MERN (MongoDB, Express, React, Node.js) stack and Socket.io for real-time communication. This repository also includes Docker support and a CI/CD pipeline to automate the deployment process.

## Demo

Check out the live demo of the app [[here](https://chitchat-2-o4xj.onrender.com/)](#).

![signUp](https://github.com/user-attachments/assets/725b3a63-17b3-401f-a705-e680f7720fdf)
![login](https://github.com/user-attachments/assets/3231870a-554b-472d-8581-1a63eb0b3be9)
![homePage](https://github.com/user-attachments/assets/45690189-1e90-48e5-96f8-057f19b231d8)
![chat2](https://github.com/user-attachments/assets/83c13da8-16c4-4444-85b1-1953993d96e4)


## Features

- **Real-time Communication**: Send and receive messages instantly with Socket.io.
- **User Authentication**: Secure login and signup using JWT (JSON Web Token).
- **Responsive Design**: Fully responsive UI built with React and Tailwind CSS.
- **Message History**: View chat history stored in MongoDB.
- **Notifications**: Receive notifications for new messages.

## Technologies Used

- **Frontend**: React, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT for authentication
- **Real-time Communication**: Socket.io
- **Containerization**: Docker
- **Deployment**: Render

## Known Issues

### Socket.io Deployment

**Note:** Currently, the Socket.io real-time features may not function correctly on Render due to deployment limitations. The application is known to work as expected when running locally on `localhost`. If you encounter issues related to Socket.io on Render or other hosting services
