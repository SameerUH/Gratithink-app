import { useNavigate } from 'react-router-dom';
import logo from '/favicon-assets/Gratithink logo without background.png'

function Start() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div className='min-h-screen bg-black p-2 flex flex-col items-center justify-center'>
      <h1 className="text-4xl font-bold text-white mb-8">Gratithink</h1>
      <img src={logo} alt="Gratithink logo" className='w-100 h-auto mb-3'/>

      <button
        onClick={goToHome}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        Get Started
      </button>
    </div>
  );
}

export default Start;