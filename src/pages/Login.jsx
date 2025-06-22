import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, {email: email, password: password});
      console.log(res.data);
      sessionStorage.setItem('token', res.data.token)
      sessionStorage.setItem('name', res.data.user.name)
      alert('login successful')
      navigate("/")
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
    //alert(`Login attempted with Email: ${email}, Password: ${password}`);
  };

  return (
    <div className='w-full h-screen bg-black flex items-center justify-center bg-[url(/assets/images/background/Background1.png)] bg-no-repeat bg-center'>
        <form onSubmit={handleSubmit} className="bg-grey-700 bg-black flex flex-col justify-around p-6 rounded shadow-md w-150 h-80">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
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
            Login
        </button>
        </form>
    </div>
  );
}

export default Login;
