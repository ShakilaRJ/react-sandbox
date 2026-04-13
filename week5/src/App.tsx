import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { FeedbackForm } from './components/FeedbackForm';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('my_real_token');
    setIsLoggedIn(false);
    setToken('');
  };

  return (
    <div className="p-8 max-w-lg mx-auto mt-10 font-sans">
      {isLoggedIn ? (
        <div>
          <div className="bg-zinc-800 p-4 rounded-xl flex items-center justify-between shadow-md mb-6">
            <span className="text-green-500 font-bold px-2">You are logged <br/>in!</span>
            <div className="bg-white text-gray-600 text-xs p-2 rounded w-40 truncate">
              Your token:<br/>{token}
            </div>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600 transition-colors">
              Logout
            </button>
          </div>

          <FeedbackForm />
        </div>
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}