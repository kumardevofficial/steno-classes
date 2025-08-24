import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        {/* Toggle Buttons */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 rounded-l-2xl ${
              isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 rounded-r-2xl ${
              !isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        {isLogin ? (
          <form className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-lg"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Login
            </button>
          </form>
        ) : (
          <form className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Signup</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-lg"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
