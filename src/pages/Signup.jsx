import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const[name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/auth/register`, {name: name, email: email, password: password});
      console.log(res.data);
      alert("user registered")
      navigate("/login")
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-[url(/assets/images/background/Background1.png)] bg-no-repeat bg-center'>
        <form onSubmit={handleSubmit} className="bg-black p-6 rounded flex flex-col justify-around shadow-md w-150 h-80">
        <h2 className="text-xl font-semibold mb-4">Signup</h2>
        <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
            Signup
        </button>
        </form>
    </div>
  );
}

export default Signup;
