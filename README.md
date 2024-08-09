# Realtime Chat App

![Chat App](https://img.shields.io/badge/MERN-Stack-blue)
![Socket.io](https://img.shields.io/badge/Socket.io-Real--time-green)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)

![signUp](https://github.com/user-attachments/assets/725b3a63-17b3-401f-a705-e680f7720fdf)
![login](https://github.com/user-attachments/assets/3231870a-554b-472d-8581-1a63eb0b3be9)
![homePage](https://github.com/user-attachments/assets/45690189-1e90-48e5-96f8-057f19b231d8)
![chat1](https://github.com/user-attachments/assets/1424b497-e973-4711-a693-1057001ddaa9)
![chat2](https://github.com/user-attachments/assets/83c13da8-16c4-4444-85b1-1953993d96e4)
![database](https://github.com/user-attachments/assets/134acca8-4698-404e-b3aa-cba2ee68351b)

This is a real-time chat application built with the MERN (MongoDB, Express, React, Node.js) stack and Socket.io for real-time communication.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Docker Setup](#docker-setup)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Real-time Communication**: Send and receive messages instantly with Socket.io.
- **User Authentication**: Secure login and signup using JWT (JSON Web Token).
- **Responsive Design**: Fully responsive UI built with React and Tailwind CSS.
- **Message History**: View chat history stored in MongoDB.
- **Notifications**: Receive notifications for new messages.

## Demo

Check out the live demo of the app [[here](https://chitchat-2-o4xj.onrender.com/)](#).

## Installation

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or on MongoDB Atlas)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/habiba2811/Chat.git
   cd Chat/backend
   ```

2. Install the backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```bash
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`.

## Usage

Once the server is running, you can register a new user, log in, and start chatting in real-time with other users.

## Technologies Used

- **Frontend**: React, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT for authentication
- **Real-time Communication**: Socket.io
- **Containerization**: Docker
- **Deployment**: Render

## Docker Setup

To simplify the process of setting up and running the application, a Docker configuration is included. Follow these steps to build and run the app using Docker.

### Prerequisites

- [Docker](https://www.docker.com/) installed on your machine.

### Building the Docker Image

1. Navigate to the root directory of the project where the `Dockerfile` is located.
   
2. Build the Docker image using the following command:
   ```bash
   docker build -t realtime-chat-app .
   ```

### Running the Container

1. After building the image, you can run the app in a Docker container using the following command:
   ```bash
   docker run -d -p 5000:5000 --name chat-app-container realtime-chat-app
   ```

   This command will run the app on port 5000. You can adjust the port if needed.

2. The app should now be accessible at `http://localhost:5000`.

## Known Issues

### Socket.io Deployment

**Note:** Currently, the Socket.io real-time features may not function correctly on Render due to deployment limitations. The application is known to work as expected when running locally on `localhost`. If you encounter issues related to Socket.io on Render or other hosting services, consider the following:

- **Check Deployment Configuration:** Ensure that the hosting environment supports WebSocket connections. Some platforms may require specific configurations to enable WebSocket support.
- **Local Testing:** For development and testing purposes, running the application locally provides the best experience with Socket.io functionality.

### Troubleshooting

- **Socket Connection Errors:** If you encounter issues with socket connections, verify the server URL and ensure that your server is properly handling Socket.io connections.
- **Network Issues:** Ensure that there are no network issues or restrictions that could be blocking WebSocket connections.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- As a programmer
