import React from 'react'

function Login() {
  return (
    <div className="flex justify-center w-50">
        <div className="flex ">
            <img src="/IE-network.png" alt="IE-network" className="h-100 w-50 flex" />
        </div>
        <div className="justify-center bg-white p-8 rounded shadow-md w-full h-full ">
            <form>
            <img src="/IElogo.png" alt="IE-network" className="mx-auto justify-center " />
                <h2 className="text-4xl font-bold mb-5">Login</h2>
                <div className="mb-4">
                    <label htmlFor='email' className="block text-xl mb-2 text-left text-gray-700 "><strong>Email:</strong></label>
                    <input type="email" name="email" autoComplete='off' placeholder='Enter Email'required className="w-full px-3 py-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor='password' className="block text-xl mb-2 text-left text-gray-700"><strong>Password:</strong></label>
                    <input type="password" name="password" placeholder='Enter Password' required className="w-full px-3 py-2 border rounded" />
                </div>
                <button type="submit" className="mt-4 w-200 py-2 px-14 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
            </form>
        </div>
    </div>
);
}

export default Login;