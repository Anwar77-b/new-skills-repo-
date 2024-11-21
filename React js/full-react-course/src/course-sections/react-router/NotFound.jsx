import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <p className="text-2xl text-gray-800 font-semibold">
          Page Not Found 😢
        </p>
        <p className="text-gray-600 m-8">
          Sorry, the page you re looking for doesn t exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
        >
          Go Home 🏠
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
