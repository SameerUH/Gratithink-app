import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#a8edea] p-4 flex flex-col items-center justify-center text-center font-sans">
      <h1 className="text-6xl font-bold text-red-500 mb-6">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Oops! It seems the page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold"
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;