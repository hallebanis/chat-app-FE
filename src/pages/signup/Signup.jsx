import React, { useState } from 'react'
import GenderCheckbox from './components/GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })
    const { loading, signup } = useSignup()
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await signup(inputs)
        if (response.status==='ok'){
            setInputs({
                fullName: '',
                username: '',
                password: '',
                confirmPassword: '',
                gender: '',
            })
        }
    }
    return (
        <div className='flex flex-column items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" name='fullName' placeholder="John Doe" onChange={handleChange} value={inputs.fullName} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2"><span className="text-base label-text">UserName</span></label>
                        <input type="text" placeholder="username" name='username' onChange={handleChange} value={inputs.username} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2"><span className="text-base label-text">Password</span></label>
                        <input type="password" placeholder="password" name='password' onChange={handleChange} value={inputs.password} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2"><span className="text-base label-text">Confirm Password</span></label>
                        <input type="password" placeholder="confirm password" name='confirmPassword' onChange={handleChange} value={inputs.confirmPassword} className='w-full input input-bordered h-10' />
                    </div>
                    <GenderCheckbox handleGenderSelect={handleChange} seletedGender={inputs.gender} />
                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Alerady have an account?"}
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Signup</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp