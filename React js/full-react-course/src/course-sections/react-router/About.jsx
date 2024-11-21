const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-green-600">About Us 🌍</h1>
        <p className="text-lg text-gray-700">
          We are passionate about delivering the best experience for our users.
          Our team works tirelessly to ensure you have access to amazing
          features and support.
        </p>
        <p className="text-lg text-gray-700">
          Our mission is to empower individuals and businesses to achieve more
          through our innovative platform.
        </p>
        <img
          src="https://via.placeholder.com/300"
          alt="Team Illustration"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default About;
