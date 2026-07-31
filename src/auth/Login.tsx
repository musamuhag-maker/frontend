import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { BiCheckShield } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validate = () => {
        let valid = true;

        setEmailError("");
        setPasswordError("");

        if (email === "") {
            setEmailError("Email is Required");
            valid = false;
        } else if (!email.endsWith("@gmail.com")) {
            setEmailError("Enter a valid Email");
            valid = false;
        }

        if (password === "") {
            setPasswordError("Password is Required");
            valid = false;
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            valid = false;
        }

        return valid;
    };

    const handleLogin = async () => {
        if (!validate()) return;

        try {
            const response = await
                fetch("http://localhost:5001/api/loginUser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });

            const data = await response.json();


            if (response.ok) {

                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.data));


                toast.success("Login Successful", {
                    description: "Welcome back to Luxury Dwell!",
                });
                console.log(data);
                navigate("/");
            } else {
                toast.error("Login Failed", {
                    description: data.message || "Invalid email or password.",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Unable To Connect To The Server.", {
                description: "Please try again later.",
            });
        }
    };

    return (
        <div className="flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="w-120 bg-white/60 rounded-2xl h-160 mt-8 shadow-2xl p-2 shadow-blue-300"
            >
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
                        Login to your account
                    </p>
                </div>

                <div className="ml-0.5 flex flex-col items-center gap-2">
                    <BiCheckShield size={23} className="text-green-500" />
                    <p>Secure and trusted property platform</p>
                </div>

                <div className="mt-10">
                    <div className="mt-7 ml-8">
                        <h3>Email</h3>

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your Email"
                            className="border border-blue-200 w-100 h-15 rounded-xl p-2"
                        />

                        <p className="text-red-700 text-sm mt-1">
                            {emailError}
                        </p>
                    </div>

                    <div className="mt-7 ml-8">
                        <h3>Password</h3>

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your Password"
                            className="border border-blue-200 w-100 h-15 rounded-xl p-2"
                        />

                        <p className="text-red-700 text-sm mt-1">
                            {passwordError}
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleLogin}
                    className="w-100 h-15 bg-blue-500 text-white rounded-xl text-2xl mt-15 ml-8 cursor-pointer"
                >
                    Login
                </button>

                <p className="ml-30 mt-5 flex gap-2">
                    Don't have an account?

                    <Link
                        to="/signup"
                        className="underline text-blue-600"
                    >
                        Signup
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}

export default Login;