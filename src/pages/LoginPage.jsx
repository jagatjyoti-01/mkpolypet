import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/image/companeyGate.png";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials
        const fixedEmail = "mkpolypet@gmail.com";
        const fixedPassword = "Admin@9696";

        if (email === fixedEmail && password === fixedPassword) {
            localStorage.setItem("isLoggedIn", "true");
            setErrorMsg("");
            navigate("/dashboard");
        } else {
            setErrorMsg("Invalid email or password");
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/30 my-20 md:mt-24">
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Welcome <span className="text-[#34B34C]">Back</span>
                </h2>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-white/20 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-white/20 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    <div className="flex justify-between text-sm text-white/90">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-500" />
                            Remember me
                        </label>
                        <span className="hover:underline cursor-pointer">Forgot password?</span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-300"
                    >
                        Login
                    </button>

                    {errorMsg && (
                        <p className="text-red-300 text-sm text-center mt-2">{errorMsg}</p>
                    )}
                </form>

                <p className="text-gray-300 text-sm text-center mt-6">
                    Need help accessing your account? Contact support.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
