import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to the Dashboard!
        </h2>
        <p className="text-lg text-gray-600 max-w-lg">
          Here you can view analytics, predict performance, and manage students efficiently.
        </p>
      </div>
    </div>
  );
}
