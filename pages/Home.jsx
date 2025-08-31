import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center justify-between flex-grow bg-gradient-to-r from-blue-100 to-blue-300 px-8 py-20 lg:px-24">
        {/* Left Side Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6 animate-fadeIn">
          <h1 className="text-6xl font-extrabold text-blue-900 leading-tight drop-shadow-lg">
            Empower Student Success
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Use AI-powered analytics to predict student performance, track progress, and make smarter academic decisions.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link
              to="/dashboard"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg shadow-lg transition transform hover:scale-105 duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/learn-more"
              className="bg-white border border-blue-700 text-blue-700 px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-100 transition transform hover:scale-105 duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/10/19/05/analytics-1964801_960_720.jpg"
            alt="Analytics"
            className="w-full max-w-lg rounded-2xl shadow-xl animate-slideIn"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
