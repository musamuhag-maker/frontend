import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  ShieldCheck,
  BadgeCheck,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  ArrowRight,
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  X,
} from "lucide-react";

const API_URL = "http://localhost:5001";

const fetchJSON = async (url: string, options: RequestInit) => {
  const res = await fetch(url, options);
  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(`Server error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "An unexpected error occurred");
  }
  return data;
};

interface ProfileData {
  _id: string;
  fullname: string;
  email: string;
  phone?: string;
  avatar?: string;

  isAgent?: boolean;
  agentStatus?: "pending" | "approved" | "rejected" | "";
}


export default function Profile() {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
const [agentStatus, setAgentStatus] = useState("");
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fixed: Independent visibility states for each password field
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [nin, setNin] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [ninLoading, setNinLoading] = useState(false);
  const [ninError, setNinError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setError("Please login first.");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchJSON(`${API_URL}/api/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(data.data);

        setAgentStatus(
          data.data.agentStatus || ""
        );
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const handleUpdateProfile = async () => {
    if (!profile) return;
    setSaving(true);
    setMessage("");
    setError("");

    try {
      // Fixed: Correct endpoint for profile update
      const data = await fetchJSON(`${API_URL}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ fullname: profile.fullname }),
      });

      setProfile(data.data);
      localStorage.setItem("user", JSON.stringify(data.data));
      setMessage("Profile updated successfully.");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordErr("All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordErr("Passwords do not match.");
      return;
    }

    setPasswordLoading(true);
    setPasswordMsg("");
    setPasswordErr("");

    try {
      const data = await fetchJSON(`${API_URL}/api/profile/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmPassword,
        }),
      });

      setPasswordMsg(data.message);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setPasswordErr(err.message);
    } finally {
      // Fixed: Added missing closing brace for this function
      setPasswordLoading(false);
    }
  };

  const handleVerifyNIN = async () => {
    if (!nin) {
      setNinError("Please enter your National Identification Number.");
      return;
    }
    if (nin.length !== 11) {
      setNinError("A valid NIN must contain exactly 11 digits.");
      return;
    }
    if (!agreed) {
      setNinError("Please agree to the declaration before continuing.");
      return;
    }

    setNinLoading(true);
    setNinError("");

    try {
      const data = await fetchJSON(`${API_URL}/api/agent/verify-nin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nin }),
      });

      setShowUpgradeModal(false);

      localStorage.setItem(
        "ninVerified",
        "true"
      );

      window.location.href = "/agent/signup";
    } catch (err: any) {
      setNinError(err.message);
    } finally {
      setNinLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <ShieldCheck size={45} className="text-blue-600" />
        </motion.div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {
          !agentStatus && (

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 shadow-2xl"
            >

              <div className="grid lg:grid-cols-2 gap-10 p-10">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white">

                    <BadgeCheck size={18} />

                    Verified Luxury Dwells Program

                  </div>


                  <h2 className="mt-5 text-3xl font-bold text-white">
                    Become a Luxury Dwells Agent
                  </h2>


                  <p className="mt-5 text-blue-100">
                    Upgrade your account and start listing properties,
                    building trust and earning as a verified agent.
                  </p>



                  <button

                    onClick={() => setShowUpgradeModal(true)}

                    className="
mt-8 flex items-center gap-3
rounded-xl bg-white px-8 py-3
font-bold text-blue-700
hover:scale-105 transition
"

                  >

                    Upgrade Your Account

                    <ArrowRight />

                  </button>


                </div>


                <div className="hidden lg:flex items-center justify-center">

                  <div className="
h-60 w-60 rounded-full
bg-white/10
border-8 border-white/20
flex items-center justify-center
">

                    <ShieldCheck size={100} />

                  </div>

                </div>


              </div>

            </motion.div>

          )
        }





        {
          agentStatus === "pending" && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
mt-10 rounded-3xl
bg-yellow-50
border border-yellow-200
p-10
text-center
"

            >


              <ShieldCheck
                size={60}
                className="mx-auto text-yellow-600"
              />


              <h2 className="
mt-5 text-3xl font-bold text-yellow-700
">

                Application Under Review

              </h2>


              <p className="
mt-3 text-gray-600
">

                Your Luxury Dwells Agent application has been submitted.

                Our admin team is reviewing your information.

                You will get access once approved.

              </p>


            </motion.div>

          )
        }





        {
          agentStatus === "approved" && (

            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              className="
mt-10 rounded-3xl
bg-green-50
border border-green-200
p-10 text-center
"

            >


              <CheckCircle2
                size={60}
                className="mx-auto text-green-600"
              />


              <h2 className="
mt-5 text-3xl font-bold text-green-700
">

                Congratulations 🎉

              </h2>


              <p className="
mt-3 text-gray-600
">

                Your account is now a verified Luxury Dwells Agent account.

              </p>


              <button

                onClick={() => window.location.href = "/agent/dashboard"}

                className="
mt-8 rounded-xl
bg-green-600
px-8 py-3
font-bold text-white
hover:bg-green-700
"

              >

                Open Agent Dashboard

              </button>


            </motion.div>

          )
        }





        {
          agentStatus === "rejected" && (

            <motion.div

              className="
mt-10 rounded-3xl
bg-red-50
border border-red-200
p-10 text-center
"

            >


              <h2 className="
text-3xl font-bold text-red-700
">

                Application Rejected

              </h2>


              <p className="mt-3 text-gray-600">

                Your application was not approved.

                You can submit another application.

              </p>


              <button

                onClick={() => setAgentStatus("")}

                className="
mt-6 bg-blue-600
text-white px-8 py-3 rounded-xl
"

              >

                Apply Again

              </button>


            </motion.div>

          )

        }

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <div className="flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700">
                <User size={60} className="text-white" />
              </div>
            </div>
            <h2 className="mt-6 text-center text-2xl font-bold">{profile.fullname}</h2>
            <p className="mt-2 text-center text-gray-500">Luxury Dwells Member</p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 rounded-xl bg-slate-100 p-4">
                <Mail className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-semibold">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-slate-100 p-4">
                <ShieldCheck className="text-green-600" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Account Status</p>
                  <p className="font-semibold text-green-600">Verified User</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl bg-white p-8 shadow-xl lg:col-span-2"
          >
            <div className="mb-8 flex items-center gap-3">
              <User className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Personal Information</h2>
            </div>

            {message && (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                {message}
              </div>
            )}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">Full Name</label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 focus-within:border-blue-600">
                  <User size={20} className="text-gray-400" />
                  <input
                    type="text"
                    value={profile.fullname}
                    onChange={(e) => setProfile({ ...profile, fullname: e.target.value })}
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">Email Address</label>
                <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">
                  <Mail size={20} className="text-gray-400" />
                  <input type="email" disabled value={profile.email} className="w-full bg-transparent outline-none" />
                </div>
              </div>

              <button
                onClick={handleUpdateProfile}
                disabled={saving}
                className="mt-3 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10 rounded-3xl bg-white p-8 shadow-xl"
        >
          <div className="mb-8 flex items-center gap-3">
            <KeyRound className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold">Change Password</h2>
          </div>

          {passwordMsg && (
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
              {passwordMsg}
            </div>
          )}
          {passwordErr && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
              {passwordErr}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Current Password", value: currentPassword, setValue: setCurrentPassword, key: "current" },
              { label: "New Password", value: newPassword, setValue: setNewPassword, key: "new" },
              { label: "Confirm Password", value: confirmPassword, setValue: setConfirmPassword, key: "confirm" },
            ].map((field) => (
              <div key={field.key}>
                <label className="mb-2 block font-semibold text-gray-700">{field.label}</label>
                <div className="flex items-center rounded-xl border border-gray-200 px-4 py-3 focus-within:border-blue-600">
                  <Lock size={20} className="mr-3 text-gray-400" />
                  <input
                    type={showPasswords[field.key as keyof typeof showPasswords] ? "text" : "password"}
                    value={field.value}
                    onChange={(e) => field.setValue(e.target.value)}
                    className="flex-1 outline-none"
                    placeholder={field.label}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPasswords((prev) => ({
                        ...prev,
                        [field.key]: !prev[field.key as keyof typeof prev],
                      }))
                    }
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showPasswords[field.key as keyof typeof showPasswords] ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleChangePassword}
            disabled={passwordLoading}
            className="mt-8 flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-70"
          >
            <ShieldCheck size={20} />
            {passwordLoading ? "Changing Password..." : "Change Password"}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 shadow-2xl"
        >
          <div className="grid items-center gap-10 p-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white">
                <BadgeCheck size={18} />
                Verified Luxury Dwells Program
              </div>
              <h2 className="text-3xl font-bold text-white">Become a Luxury Dwells Agent</h2>
              <p className="mt-6 text-lg leading-7 text-blue-100">
                Upgrade your account today and become a verified Agent. Verification is completed using your National Identification Number (NIN).
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: CheckCircle2, text: "Unlimited Property Listings" },
                  { icon: Building2, text: "Verified Luxury Dwells Badge" },
                  { icon: BriefcaseBusiness, text: "Professional Agent Dashboard" },
                  { icon: ShieldCheck, text: "Increased Buyer Trust & Visibility" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <item.icon size={20} className="text-green-300" />
                    {item.text}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowUpgradeModal(true)}
                className="mt-10 flex items-center gap-3 rounded-xl bg-white px-8 py-3 font-bold text-blue-700 transition hover:scale-105"
              >
                Upgrade Your Account
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="hidden items-center justify-center lg:flex">
              <div className="flex h-64 w-64 items-center justify-center rounded-full border-8 border-white/20 bg-white/10 backdrop-blur">
                <ShieldCheck size={100} className="text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {showUpgradeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
              >
                <button
                  onClick={() => setShowUpgradeModal(false)}
                  className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-slate-100"
                >
                  <X size={20} />
                </button>

                <div className="mb-8 text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <ShieldCheck size={40} className="text-blue-700" />
                  </div>
                  <h2 className="text-2xl font-bold">Upgrade Your Account</h2>
                  <p className="mt-3 text-gray-500">
                    Verify your National Identification Number (NIN) to become a trusted Agent.
                  </p>
                </div>

                {ninError && (
                  <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                    {ninError}
                  </div>
                )}

                <label className="mb-3 block font-semibold text-gray-700">National Identification Number (NIN)</label>
                <div className="mb-6 flex items-center rounded-xl border border-gray-200 px-4 py-3 focus-within:border-blue-600">
                  <BadgeCheck size={20} className="mr-3 text-blue-600" />
                  <input
                    type="text"
                    maxLength={11}
                    value={nin}
                    onChange={(e) => setNin(e.target.value.replace(/\D/g, ""))}
                    placeholder="Enter your 11-digit NIN"
                    className="w-full outline-none"
                  />
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <h3 className="mb-3 flex items-center gap-2 font-bold text-gray-800">
                    <ShieldCheck size={20} className="text-blue-600" />
                    Declaration
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    By continuing, you confirm that the NIN provided belongs to you and that all information submitted is accurate.
                  </p>
                </div>

                <label className="mt-6 flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    I certify that the information provided is correct and I agree to the verification process.
                  </span>
                </label>

                <button
                  onClick={handleVerifyNIN}
                  disabled={ninLoading}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-3 text-lg font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <ShieldCheck size={20} />
                  {ninLoading ? "Verifying..." : "Verify & Continue"}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}