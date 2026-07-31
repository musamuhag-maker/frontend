import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BiCheckShield } from "react-icons/bi";
import { useState } from "react";
import { toast } from "sonner";

function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validate = () => {
        let valid = true;

        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        if (!name) {
            setNameError("Full name is required");
            valid = false;
        }

        if (!email.trim()) {
            setEmailError("Email is required");
            valid = false;
        } else if (!email.endsWith("@gmail.com")) {
            setEmailError("Enter a valid Gmail address");
            valid = false;
        }

        if (!password) {
            setPasswordError("Password is required");
            valid = false;
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            valid = false;
        }

        if (!confirmPassword) {
            setConfirmPasswordError("Confirm your password");
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            valid = false;
        }

        return valid;
    };

    const handleSignup = async () => {
        if (!validate()) return;

        try {
            const response = await fetch("http://localhost:5001/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname: name,
                    email,
                    role: "user",
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Account Created", {
                    description: "Your account has been created successfully.",
                });

                navigate("/login");
            } else {
                toast.error("Signup Failed", {
                    description: data.message || "Unable to create account.",
                });
            }
        } catch (error) {
            console.error(error);

            toast.error("Server Error", {
                description: "Unable to connect to the server.",
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
        >
            <div className="w-120 bg-white/60 rounded-2xl h-auto mt-8 shadow-2xl p-2 shadow-blue-300 pb-8">
                <div className="text-center mb-8 flex flex-col items-center">
                    <img
                        src="/luxury-dwell-logo.png"
                        alt="Luxury Dwells Logo"
                        className="w-16 h-16 mb-3"
                    />

                    <h1 className="text-3xl font-bold text-blue-700">
                        Luxury Dwells
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Create an account
                    </p>
                </div>

                <div className="ml-0.5 flex flex-col items-center gap-2">
                    <BiCheckShield size={23} className="text-green-500" />
                    <p>Secure and trusted property platform</p>
                </div>

                <div className="mt-5 ml-8">
                    <h3>Fullname</h3>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter your full name"
                        className="border border-blue-200 w-100 h-15 rounded-xl p-2"
                    />
                    <p className="text-red-600 text-sm mt-1">{nameError}</p>
                </div>

                <div className="mt-5 ml-8">
                    <h3>Email</h3>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your Email"
                        className="border border-blue-200 w-100 h-15 rounded-xl p-2"
                    />
                    <p className="text-red-600 text-sm mt-1">{emailError}</p>
                </div>

                <div className="mt-5 ml-8">
                    <h3>Password</h3>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your Password"
                        className="border border-blue-200 w-100 h-15 rounded-xl p-2"
                    />
                    <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                </div>

                <div className="mt-5 ml-8">
                    <h3>Confirm Password</h3>
                    <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        placeholder="Confirm your password"
                        className="border border-blue-200 w-100 h-15 rounded-xl p-2"
                    />
                    <p className="text-red-600 text-sm mt-1">
                        {confirmPasswordError}
                    </p>
                </div>

                <button
                    onClick={handleSignup}
                    className="cursor-pointer w-100 h-15 bg-blue-500 text-white rounded-xl text-2xl mt-8 ml-8"
                >
                    Signup
                </button>

                <p className="flex gap-2 ml-30 mt-4">
                    Already have an account?
                    <Link to="/login" className="underline text-blue-600">
                        Login
                    </Link>
                </p>
            </div>
        </motion.div>
    );
}

export default Signup;