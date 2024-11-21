const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Our Website! 🌟
        </h1>
        <p className="text-lg text-gray-700">
          Explore the amazing features we have to offer. Start your journey
          here!
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
