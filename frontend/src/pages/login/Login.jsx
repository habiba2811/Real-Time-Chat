import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-6">
          Login <span className="text-blue-900">ChitChat</span>
        </h1>
        <form>
          <div className="mb-3">
            <label className="block text-lg font-medium text-blue-100 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-blue-100 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-blue-100 hover:underline hover:text-blue-400 mb-4 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-900 text-white text-lg font-semibold rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

//STARTER CODE FOR THIS LOGIN COMPONENT

/*
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-4xl font-semibold text-center text-gray-300 mb-6">
          Login <span className="text-yellow-500">ChitChat</span>
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-lg font-medium text-blue-100 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-blue-100 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <a
            href="#"
            className="text-sm text-blue-100 hover:underline hover:text-yellow-500 mb-4 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-yellow-500 text-white text-lg font-semibold rounded-lg hover:bg-yellow-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;


*/