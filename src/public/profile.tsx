import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineUser, HiOutlineMail } from "react-icons/hi";

const API_URL = "http://localhost:5001";

interface ProfileData {
  _id: string;
  fullname: string;
  email: string;
}

function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  useEffect(() => {
    const getProfile = async () => {
      if (!token) {
        setError("Please login first.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message);

        setProfile(data.data);
      } catch (err: any) {
        setError(err.message);
      }

      setLoading(false);
    };

    getProfile();
  }, []);

  const updateProfile = async () => {
    if (!profile) return;

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullname: profile.fullname,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setProfile(data.data);

      localStorage.setItem(
        "user",
        JSON.stringify(data.data)
      );

      setMessage("Profile updated successfully.");
    } catch (err: any) {
      setError(err.message);
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-8 text-3xl font-bold">
          My Profile
        </h1>

        {message && (
          <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
            {error}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl bg-white p-6 shadow"
          >
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100">
              <HiOutlineUser className="text-6xl text-blue-600" />
            </div>

            <h2 className="mt-4 text-center text-xl font-bold">
              {profile.fullname}
            </h2>

            <p className="text-center text-gray-500">
              {profile.email}
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl bg-white p-6 shadow md:col-span-2"
          >
            <div className="mb-5">
              <label className="font-medium">
                Full Name
              </label>

              <div className="mt-2 flex items-center rounded-lg border px-4 py-3">
                <HiOutlineUser className="mr-2 text-gray-400" />

                <input
                  value={profile.fullname}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      fullname: e.target.value,
                    })
                  }
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="font-medium">
                Email
              </label>

              <div className="mt-2 flex items-center rounded-lg border bg-gray-100 px-4 py-3">
                <HiOutlineMail className="mr-2 text-gray-400" />

                <input
                  value={profile.email}
                  disabled
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>



            <button
              onClick={updateProfile}
              disabled={saving}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </motion.div>

        </div>
      </div>
    </main>
  );
}

export default Profile;