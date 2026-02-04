import React from 'react'
import Social_Media from '../../../components/Shared_Componant/Social_Media'
import assets from '../../../assets/assets'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { IoPerson } from 'react-icons/io5'
import { MdLockOutline, MdOutlineMailOutline } from 'react-icons/md'

const Register = () => {
    const [branch, setBranch] = React.useState('');

    const handleChange = (event) => {
        setBranch(event.target.value);
    };
    const arr = [
        {placeholder: "Name" ,icon: <IoPerson/>},
                {placeholder: "Email" ,icon: <MdOutlineMailOutline/>},
        {placeholder: "Password" ,icon: <MdLockOutline/>},
        
    ]
    return (
        <div className="auth-container">
            <div className="auth-left bg-gradient-to-b from-[#1C9D89] to-[#025154]">
                <div className="w-[75%]  flex flex-col justify-center items-center text-white h-full p-8 space-y-6">
                    <img src={assets.theClub_Logo} />
                    <h2 className="text-3xl font-bold">Welcome Back!</h2>
                    <p className="text-center text-gray-300">
                        To keep conected with us please login with your personal info                    </p>
                    <button className=" px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-[#025154] transition">
                        Sign In
                    </button>
                </div>

            </div>

            <div className="flex-1 flex flex-col justify-center p-20 gap-4 ">
                <h2 className='text-4xl font-bold text-center text-[#00786F]'>Create Account</h2>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <Social_Media />
                    <p>Or use your email for registration</p>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center '>
                    {arr.map((item, index) => (
                        <div key={index} className="relative flex  w-[80%]">
                          <span className="absolute left-3 text-lg top-2 text-gray-500">{item.icon}</span>
                            <input className='w-full p-2 px-10 bg-[#E9F0F0]  rounded-lg' placeholder={item.placeholder} />
                            </div>
                    ))}
                  <p>choose the branch you would like to register for</p>
                    <FormControl className='w-[80%]'>
                        <InputLabel id="branch-label" className="text-[#00786F]">Branch</InputLabel>
                        <Select
                            labelId="branch-label"
                            value={branch}
                            label="Branch"
                            onChange={handleChange}
                        >
                            <MenuItem value="october">October Branch</MenuItem>
                            <MenuItem value="newCapital">New Capital</MenuItem>
                        </Select>
                    </FormControl>
                </div>




                <div className='flex justify-center'>
                    <button className=" w-fit bg-[#00786F] text-white py-2 px-6 rounded-full hover:bg-[#025154] transition">Register</button>

                </div>
            </div>
        </div>

    )
}

export default Register


