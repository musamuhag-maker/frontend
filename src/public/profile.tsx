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
  Phone,
  Sparkles,
  Crown,
  Settings,
  Check,
} from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://luxury-dwells-backend.onrender.com";

const fetchJSON = async (
  url: string,
  options: RequestInit = {}
) => {
  const response = await fetch(url, options);

  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    throw new Error(
      `Server error: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || "Something went wrong. Please try again."
    );
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

type PasswordVisibility = {
  current: boolean;
  new: boolean;
  confirm: boolean;
};

export default function Profile() {
  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  const [profile, setProfile] =
    useState<ProfileData | null>(null);

  const [agentStatus, setAgentStatus] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPasswords, setShowPasswords] =
    useState<PasswordVisibility>({
      current: false,
      new: false,
      confirm: false,
    });

  const [passwordLoading, setPasswordLoading] =
    useState(false);

  const [passwordMsg, setPasswordMsg] =
    useState("");

  const [passwordErr, setPasswordErr] =
    useState("");

  const [showUpgradeModal, setShowUpgradeModal] =
    useState(false);

  /*
   * We intentionally don't store sensitive identity
   * information in localStorage/sessionStorage.
   *
   * Your production verification flow should handle
   * identity verification securely on the backend.
   */
  const [verificationLoading, setVerificationLoading] =
    useState(false);

  const [verificationError, setVerificationError] =
    useState("");

  // --------------------------------------------------
  // LOAD PROFILE
  // --------------------------------------------------

  useEffect(() => {
    const loadProfile = async () => {
      if (!token) {
        setError("Please login first.");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchJSON(
          `${API_URL}/api/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const user = data?.data;

        setProfile(user);
        setAgentStatus(user?.agentStatus || "");
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load profile."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [token]);

  // --------------------------------------------------
  // UPDATE PROFILE
  // --------------------------------------------------

  const handleUpdateProfile = async () => {
    if (!profile || !token) return;

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const data = await fetchJSON(
        `${API_URL}/api/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            fullname: profile.fullname.trim(),
          }),
        }
      );

      setProfile(data.data);

      localStorage.setItem(
        "user",
        JSON.stringify(data.data)
      );

      setMessage("Profile updated successfully.");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to update profile."
      );
    } finally {
      setSaving(false);
    }
  };

  // --------------------------------------------------
  // CHANGE PASSWORD
  // --------------------------------------------------

  const handleChangePassword = async () => {
    setPasswordMsg("");
    setPasswordErr("");

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      setPasswordErr("All password fields are required.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordErr(
        "Your new password must contain at least 8 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordErr("Your passwords do not match.");
      return;
    }

    if (!token) {
      setPasswordErr("Your session has expired. Please login again.");
      return;
    }

    setPasswordLoading(true);

    try {
      const data = await fetchJSON(
        `${API_URL}/api/profile/change-password`,
        {
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
        }
      );

      setPasswordMsg(
        data?.message ||
          "Password changed successfully."
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setPasswordErr(
        err instanceof Error
          ? err.message
          : "Unable to change password."
      );
    } finally {
      setPasswordLoading(false);
    }
  };

  // --------------------------------------------------
  // START AGENT VERIFICATION
  // --------------------------------------------------

  const handleStartVerification = async () => {
    setVerificationError("");

    if (!token) {
      setVerificationError(
        "Your session has expired. Please login again."
      );
      return;
    }

    setVerificationLoading(true);

    try {
      /*
       * IMPORTANT:
       *
       * Do not send or store NIN in localStorage.
       *
       * Replace this section with your approved secure
       * identity-verification provider/backend flow.
       *
       * For example:
       *
       * POST /api/agent/start-verification
       *
       * The backend can return a secure verification URL.
       */

      const data = await fetchJSON(
        `${API_URL}/api/agent/start-verification`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setShowUpgradeModal(false);

      if (data?.verificationUrl) {
        window.location.href = data.verificationUrl;
        return;
      }

      /*
       * If your backend simply changes the user to pending,
       * reload the profile.
       */
      window.location.reload();
    } catch (err) {
      setVerificationError(
        err instanceof Error
          ? err.message
          : "Unable to start verification."
      );
    } finally {
      setVerificationLoading(false);
    }
  };

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="inline-flex"
          >
            <ShieldCheck
              size={52}
              className="text-blue-600"
            />
          </motion.div>

          <p className="mt-5 text-gray-500 font-medium">
            Loading your profile...
          </p>
        </div>
      </main>
    );
  }

  // --------------------------------------------------
  // ERROR / NO PROFILE
  // --------------------------------------------------

  if (!profile) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <X className="text-red-600" />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            Unable to load profile
          </h2>

          <p className="mt-3 text-gray-500">
            {error || "Something went wrong."}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  // --------------------------------------------------
  // PASSWORD FIELDS
  // --------------------------------------------------

  const passwordFields = [
    {
      label: "Current Password",
      value: currentPassword,
      setValue: setCurrentPassword,
      key: "current" as const,
    },
    {
      label: "New Password",
      value: newPassword,
      setValue: setNewPassword,
      key: "new" as const,
    },
    {
      label: "Confirm Password",
      value: confirmPassword,
      setValue: setConfirmPassword,
      key: "confirm" as const,
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-100">
      {/* ============================================= */}
      {/* PAGE HEADER */}
      {/* ============================================= */}

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
                <Settings size={16} />
                Account Settings
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Welcome back,{" "}
                <span className="text-blue-400">
                  {profile.fullname.split(" ")[0]}
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-slate-300">
                Manage your Luxury Dwells account,
                security and agent status from one place.
              </p>
            </div>

            <div className="hidden sm:flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 backdrop-blur">
              <User
                size={38}
                className="text-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* ============================================= */}
        {/* AGENT STATUS */}
        {/* ============================================= */}

        {!agentStatus && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-6 shadow-2xl sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_260px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <Sparkles size={17} />
                  Luxury Dwells Agent Program
                </div>

                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                  Take your account to the next level
                </h2>

                <p className="mt-4 max-w-2xl text-blue-100">
                  Become a verified Luxury Dwells Agent and
                  get access to professional property listing
                  tools and your own agent dashboard.
                </p>

                <button
                  onClick={() =>
                    setShowUpgradeModal(true)
                  }
                  className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Become an Agent
                  <ArrowRight size={19} />
                </button>
              </div>

              <div className="hidden justify-center lg:flex">
                <div className="flex h-52 w-52 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                  <Crown
                    size={88}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {agentStatus === "pending" && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center"
          >
            <ShieldCheck
              size={58}
              className="mx-auto text-amber-600"
            />

            <h2 className="mt-5 text-3xl font-bold text-amber-700">
              Application Under Review
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Your agent application has been received.
              Our team is reviewing your information.
            </p>
          </motion.section>
        )}

        {agentStatus === "approved" && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center"
          >
            <CheckCircle2
              size={60}
              className="mx-auto text-green-600"
            />

            <h2 className="mt-5 text-3xl font-bold text-green-700">
              You're a Verified Agent 🎉
            </h2>

            <p className="mt-3 text-gray-600">
              Your Luxury Dwells agent account is active.
            </p>

            <button
              onClick={() =>
                (window.location.href =
                  "/agent/dashboard")
              }
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 font-bold text-white transition hover:bg-green-700"
            >
              Open Agent Dashboard
              <ArrowRight size={18} />
            </button>
          </motion.section>
        )}

        {agentStatus === "rejected" && (
          <motion.section className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
            <X
              size={52}
              className="mx-auto text-red-600"
            />

            <h2 className="mt-5 text-3xl font-bold text-red-700">
              Application Rejected
            </h2>

            <p className="mt-3 text-gray-600">
              Your application wasn't approved. You can
              start another application.
            </p>

            <button
              onClick={() => setAgentStatus("")}
              className="mt-6 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Apply Again
            </button>
          </motion.section>
        )}

        {/* ============================================= */}
        {/* PROFILE + PERSONAL INFORMATION */}
        {/* ============================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* PROFILE CARD */}

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
          >
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 ring-8 ring-blue-50">
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt={profile.fullname}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User
                      size={58}
                      className="text-white"
                    />
                  )}
                </div>

                <div className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-green-500">
                  <Check
                    size={17}
                    className="text-white"
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-7 text-center text-2xl font-bold text-gray-900">
              {profile.fullname}
            </h2>

            <p className="mt-2 text-center text-gray-500">
              Luxury Dwells Member
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <Mail
                  size={21}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 break-all font-semibold text-gray-800">
                    {profile.email}
                  </p>
                </div>
              </div>

              {profile.phone && (
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <Phone
                    size={21}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Phone
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {profile.phone}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 rounded-2xl bg-green-50 p-4">
                <ShieldCheck
                  size={21}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-green-600">
                    Account
                  </p>

                  <p className="mt-1 font-semibold text-green-700">
                    Verified User
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PERSONAL INFORMATION */}

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:col-span-2"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <User
                  size={22}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Personal Information
                </h2>

                <p className="text-sm text-gray-500">
                  Keep your account information up to date.
                </p>
              </div>
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

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                  <User
                    size={19}
                    className="text-gray-400"
                  />

                  <input
                    type="text"
                    value={profile.fullname}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        fullname: e.target.value,
                      })
                    }
                    className="w-full bg-transparent outline-none"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">
                  <Mail
                    size={19}
                    className="text-gray-400"
                  />

                  <input
                    type="email"
                    disabled
                    value={profile.email}
                    className="w-full bg-transparent text-gray-500 outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleUpdateProfile}
              disabled={saving}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
              {!saving && <Check size={18} />}
            </button>
          </motion.section>
        </div>

        {/* ============================================= */}
        {/* PASSWORD */}
        {/* ============================================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <KeyRound
                size={22}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Password & Security
              </h2>

              <p className="text-sm text-gray-500">
                Keep your Luxury Dwells account secure.
              </p>
            </div>
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
            {passwordFields.map((field) => {
              const visible =
                showPasswords[field.key];

              return (
                <div key={field.key}>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    {field.label}
                  </label>

                  <div className="flex items-center rounded-xl border border-gray-200 px-4 py-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                    <Lock
                      size={19}
                      className="mr-3 shrink-0 text-gray-400"
                    />

                    <input
                      type={visible ? "text" : "password"}
                      value={field.value}
                      onChange={(e) =>
                        field.setValue(
                          e.target.value
                        )
                      }
                      className="min-w-0 flex-1 bg-transparent outline-none"
                      placeholder={field.label}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPasswords((prev) => ({
                          ...prev,
                          [field.key]:
                            !prev[field.key],
                        }))
                      }
                      className="ml-2 shrink-0 text-gray-400 transition hover:text-gray-700"
                    >
                      {visible ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleChangePassword}
            disabled={passwordLoading}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-black disabled:opacity-60"
          >
            <ShieldCheck size={19} />

            {passwordLoading
              ? "Changing Password..."
              : "Change Password"}
          </button>
        </motion.section>

        {/* ============================================= */}
        {/* AGENT CTA */}
        {/* ============================================= */}

        {!agentStatus && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mt-10 overflow-hidden rounded-3xl bg-slate-950 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-950 to-indigo-950" />

            <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_300px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-200">
                  <BadgeCheck size={17} />
                  Verified Agent Program
                </div>

                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                  Become a Luxury Dwells Agent
                </h2>

                <p className="mt-4 max-w-2xl text-slate-300">
                  Build your presence, list properties and
                  connect with buyers through the Luxury
                  Dwells platform.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Property Listings",
                    "Verified Agent Badge",
                    "Agent Dashboard",
                    "Better Buyer Trust",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-slate-200"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-green-400"
                      />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setShowUpgradeModal(true)
                  }
                  className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-bold text-slate-900 shadow-xl transition hover:-translate-y-0.5"
                >
                  Start Verification
                  <ArrowRight size={19} />
                </button>
              </div>

              <div className="hidden justify-center lg:flex">
                <div className="flex h-60 w-60 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl">
                    <Crown
                      size={72}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ============================================= */}
        {/* VERIFICATION MODAL */}
        {/* ============================================= */}

        <AnimatePresence>
          {showUpgradeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
              onClick={() =>
                setShowUpgradeModal(false)
              }
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                onClick={(e) =>
                  e.stopPropagation()
                }
                className="relative w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
              >
                <button
                  onClick={() =>
                    setShowUpgradeModal(false)
                  }
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-slate-100"
                >
                  <X size={20} />
                </button>

                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <ShieldCheck
                      size={42}
                      className="text-blue-700"
                    />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-gray-900">
                    Agent Verification
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-gray-500">
                    To protect our users and maintain a
                    trusted marketplace, agent accounts
                    require identity verification.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Secure verification",
                      text: "Your identity verification should be handled through a secure backend or approved verification provider.",
                    },
                    {
                      icon: BriefcaseBusiness,
                      title: "Professional agent account",
                      text: "Approved agents can access their property listing and management tools.",
                    },
                    {
                      icon: BadgeCheck,
                      title: "Verified status",
                      text: "Successful verification allows your account to display its appropriate agent status.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex gap-4 rounded-2xl bg-slate-50 p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                          <Icon
                            size={21}
                            className="text-blue-700"
                          />
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-gray-500">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {verificationError && (
                  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {verificationError}
                  </div>
                )}

                <button
                  onClick={handleStartVerification}
                  disabled={verificationLoading}
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <ShieldCheck size={20} />

                  {verificationLoading
                    ? "Starting Verification..."
                    : "Continue Secure Verification"}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                  Verification information should be processed
                  securely by your backend. Do not store
                  sensitive identity numbers in browser
                  storage.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}