import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
            Predict Student Performance Effortlessly
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Empower educators and students with data-driven insights for better
            academic outcomes.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      
      

      {/* Footer */}
      <Footer />
    </div>
  );
}
