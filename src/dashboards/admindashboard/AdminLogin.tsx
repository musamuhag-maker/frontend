import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ShieldCheck,
  ArrowRight,
  Loader2,
} from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/card";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }


    try {
      setLoading(true);


      const res = await axios.post(
        "http://localhost:5001/api/admin/admin-login",
        {
          email,
          password,
        }
      );


      if (res.data.status) {

        localStorage.setItem(
          "adminToken",
          res.data.token
        );

        localStorage.setItem(
          "admin",
          JSON.stringify(res.data.admin)
        );


        if (rememberMe) {
          localStorage.setItem(
            "rememberAdmin",
            "true"
          );
        }


        navigate("/admin/dashboard");

      } else {

        setError(
          res.data.message || "Login failed."
        );

      }


    } catch (err: any) {

      setError(
        err.response?.data?.message ||
        "Unable to login. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >

        <Card className="rounded-3xl border-0 shadow-2xl bg-white/80 backdrop-blur-xl">

          <CardHeader className="text-center">

            <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <ShieldCheck
                className="text-blue-600"
                size={32}
              />
            </div>


            <CardTitle className="text-2xl font-bold">
              Admin Login
            </CardTitle>


            <CardDescription>
              Welcome back 👋 Access your admin dashboard.
            </CardDescription>

          </CardHeader>


          <CardContent>

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >

              {error && (
                <div className="bg-red-100 border border-red-300 text-red-600 rounded-xl px-4 py-3 text-sm">
                  {error}
                </div>
              )}


              {/* Email */}

              <div>

                <label className="text-sm font-medium mb-1.5 block">
                  Email Address
                </label>


                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-3 top-3.5 text-gray-400"
                  />


                  <Input
                    type="email"
                    placeholder="Enter admin email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="pl-10 h-11 rounded-xl"
                  />

                </div>

              </div>



              {/* Password */}

              <div>

                <label className="text-sm font-medium mb-1.5 block">
                  Password
                </label>


                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-3 top-3.5 text-gray-400"
                  />


                  <Input
                    type={
                      showPassword
                      ? "text"
                      : "password"
                    }
                    placeholder="Enter password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="pl-10 pr-10 h-11 rounded-xl"
                  />



                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-3 text-gray-400"
                  >

                    {
                      showPassword
                      ? <EyeOff size={18}/>
                      : <Eye size={18}/>
                    }

                  </button>


                </div>

              </div>



              {/* Remember */}

              <label className="flex items-center gap-2 text-sm">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e)=>
                    setRememberMe(e.target.checked)
                  }
                  className="rounded"
                />

                Remember me

              </label>



              {/* Button */}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700"
              >

                {
                  loading
                  ?
                  (
                    <>
                      <Loader2
                        className="animate-spin mr-2"
                        size={18}
                      />
                      Signing In...
                    </>
                  )
                  :
                  (
                    <>
                      Login
                      <ArrowRight
                        className="ml-2"
                        size={18}
                      />
                    </>
                  )
                }


              </Button>


            </form>


          </CardContent>


        </Card>


      </motion.div>

    </div>
  );
}


export default AdminLogin;