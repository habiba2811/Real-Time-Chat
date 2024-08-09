# Chit Chat App

![Chat App](https://img.shields.io/badge/MERN-Stack-blue)
![Socket.io](https://img.shields.io/badge/Socket.io-Real--time-green)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)

This is a real-time chat application built with the MERN (MongoDB, Express, React, Node.js) stack and Socket.io for real-time communication. The project was inspired by the YouTube channel [As a programmer](https://www.youtube.com/channel/UCxDwS1LPJcO2BvwsVVUUBlA), which offers great tutorials for aspiring developers.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Real-time Communication**: Send and receive messages instantly with Socket.io.
- **User Authentication**: Secure login and signup using JWT (JSON Web Token).
- **Responsive Design**: Fully responsive UI built with React and Tailwind CSS.
- **User Management**: Create, update, and manage user profiles.
- **Message History**: View chat history stored in MongoDB.
- **Group Chats**: Create and manage group chats.
- **Notifications**: Receive notifications for new messages.

## Demo

Check out the live demo of the app [here](#). *(Replace this link with the deployed app URL)*

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

Once the server is running, you can register a new user, log in, and start chatting in real-time with other users. You can create group chats, view message history, and receive notifications for new messages.

## Technologies Used

- **Frontend**: React, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT for authentication
- **Real-time Communication**: Socket.io
- **Deployment**: Render (or other hosting services)

## Folder Structure

```plaintext
Chat/
│
├── backend/                # Backend (Node.js + Express + MongoDB)
│   ├── Controllers/        # Request handlers
│   ├── Models/             # Mongoose models
│   ├── Routes/             # API routes
│   ├── server.js           # Main server file
│   └── .env                # Environment variables
│
├── frontend/               # Frontend (React + Tailwind CSS)
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Application pages
│   │   ├── App.jsx         # Main React app component
│   │   └── index.js        # Entry point for React
│   └── public/             # Static files
│
└── README.md               # Project documentation
```

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

- **[As a programmer](https://www.youtube.com/channel/UCxDwS1LPJcO2BvwsVVUUBlA)**: Inspiration and tutorials.
- **[Socket.io](https://socket.io/)**: Real-time communication.
- **[Tailwind CSS](https://tailwindcss.com/)**: For styling.
- **[DaisyUI](https://daisyui.com/)**: For UI components.

---

*Feel free to customize the content above to suit your specific project details!*