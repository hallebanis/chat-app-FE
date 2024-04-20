import React from 'react'
import GenderCheckbox from './components/GenderCheckbox'

const SignUp = () => {
    return (
        <div className='flex flex-column items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder="John Doe" className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2"><span className="text-base label-text">UserName</span></label>
                        <input type="text" placeholder="username" className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2"><span className="text-base label-text">Password</span></label>
                        <input type="password" placeholder="password" className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2"><span className="text-base label-text">Confirm Password</span></label>
                        <input type="password" placeholder="confirm password" className='w-full input input-bordered h-10' />
                    </div>
                    <GenderCheckbox/>
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Alerady have an account?"}
                    </a>
                    <div>
                    <button className="btn btn-block btn-sm mt-2">Signup</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp