import {Link} from 'react-router-dom'
import GenderCheckbox from "./GenderCheckbox";
import {useState} from 'react'
import useSignup from '../../hooks/useSignup';
const SignUp = () => {

  const [inputs,setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  });

  const {loading,signup}=useSignup()

  const handleCheckboxChange =(gender) =>{
    setInputs({...inputs,gender})

  }
const handleSubmit = async(e) =>{
  e.preventDefault();
  await signup(inputs)
}
  return (
    
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">
          Sign Up <span className="text-blue-900">ChitChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-base font-medium text-blue-100 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 border border-gray-300 rounded-lg"
                value={inputs.fullName}
                onChange={(e) => setInputs ({...inputs,fullName: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label className="block text-base font-medium text-blue-100 mb-1">
              userName
            </label>
            <input
              type="text"
              placeholder="Enter your User name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={inputs.username}
              onChange={(e) => setInputs ({...inputs,username: e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-blue-100 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={inputs.password}
              onChange={(e) => setInputs ({...inputs,password: e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-blue-100 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs ({...inputs,confirmPassword: e.target.value})}
            />
          </div>
          <Link
            to="/login"
            className="text-xs text-blue-100 hover:underline hover:text-blue-500 mb-4 inline-block"
          >
            Already have an account?
          </Link>
         <div> <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-900 text-white text-base font-semibold rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button> </div>
          <GenderCheckbox onCheckboxChange ={handleCheckboxChange} selectedGender={inputs.gender} />
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT

/*import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">
          Sign Up <span className="text-yellow-500">ChitChat</span>
        </h1>
        <form>
          <div className="mb-3">
            <label className="block text-base font-medium text-blue-100 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-3">
            <label className="block text-base font-medium text-blue-100 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-blue-100 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-medium text-blue-100 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <a
            href="#"
            className="text-xs text-blue-100 hover:underline hover:text-yellow-500 mb-4 inline-block"
          >
            Already have an account?
          </a>
         <div> <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 text-white text-base font-semibold rounded-lg hover:bg-yellow-600"
          >
            Sign Up
          </button> </div>
          <GenderCheckbox/>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
*/