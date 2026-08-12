import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Building2,
    Briefcase,
    Phone,
    MapPin,
    FileText,
    CheckCircle,
    Clock
} from "lucide-react";
const API_URL = "http://localhost:5001";
export default function AgentSignup() {
    const token =
        localStorage.getItem("token")
    const navigate = useNavigate();
    const [checkingStatus, setCheckingStatus] = useState(true);
    const [agentStatus, setAgentStatus] = useState("");
    const [formData, setFormData] = useState({
        agencyName: "",
        yearsExperience: "",
        specialization: "",
        phone: "",
        address: "",
        bio: "",
        licenseNumber: "",
        areasCovered: "",
        profileImage: ""

    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    // CHECK APPLICATION STATUS
    useEffect(() => {
        const checkStatus = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/agent/status`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                const data = await res.json();
                if (data.agentStatus === "pending") {
                    setAgentStatus("pending");
                }
                if (
                    data.agentStatus === "approved" &&
                    data.isAgent === true
                ) {
                    navigate("/agent/dashboard");
                }
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setCheckingStatus(false);
            }
        };
        checkStatus();
    }, []);
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const submitApplication = async () => {
        setLoading(true);
        setError("");
        setMessage("");
        try {
            const res = await fetch(
                `${API_URL}/api/agent/apply`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        ...formData,
                        areasCovered:
                            formData.areasCovered
                                .split(",")
                                .map(item => item.trim())
                    })
                }
            );
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }
            setMessage(
                "Application submitted successfully. Waiting for admin approval."
            );
            setAgentStatus("pending");
        }
        catch (err: any) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    };
    // CHECKING SCREEN
    if (checkingStatus) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="text-center">
                    <ShieldCheck
                        size={50}
                        className="mx-auto text-blue-600 animate-pulse"
                    />
                    <p className="mt-4 font-semibold">
                        Checking application status...
                    </p>
                </div>
            </div>
        )
    }
    // PENDING SCREEN
    if (agentStatus === "pending") {
        return (
            <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl rounded-3xl bg-white p-10 shadow-xl text-center"
                >
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                        <Clock
                            size={50}
                            className="text-blue-600"
                        />
                    </div>
                    <h1 className="mt-6 text-3xl font-bold">
                        Application Under Review
                    </h1>
                    <p className="mt-4 text-gray-600 leading-7">
                        Your Luxury Dwells Agent application has been submitted.
                        Our verification team is currently reviewing your information.
                        Once approved, you will automatically gain access to your Agent Dashboard.
                    </p>
                    <div className="mt-8 rounded-xl bg-blue-50 p-4 font-bold text-blue-700">
                        Status: Pending Approval
                    </div>
                </motion.div>
            </main>
        )
    }
    return (
        <main className="min-h-screen bg-slate-100 px-6 py-10">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-3xl bg-linear-to-r from-blue-700 to-indigo-700 p-10 text-white shadow-xl"

                >
                    <div className="flex items-center gap-4">
                        <ShieldCheck size={50} />
                        <div>
                            <h1 className="text-3xl font-bold">
                                Become a Luxury Dwells Agent
                            </h1>
                            <p className="mt-2 text-blue-100">

                                Complete your professional profile.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
                    {
                        message &&
                        <div className="mb-5 rounded-xl bg-green-50 p-4 text-green-700">
                            {message}
                        </div>
                    }
                    {
                        error &&
                        <div className="mb-5 rounded-xl bg-red-50 p-4 text-red-700">
                            {error}
                        </div>
                    }
                    <div className="grid gap-6 md:grid-cols-2">
                        <Input
                            icon={<Building2 />}
                            name="agencyName"
                            placeholder="Agency Name"
                            value={formData.agencyName}
                            onChange={handleChange}
                        />
                        <Input
                            icon={<Briefcase />}
                            name="yearsExperience"
                            placeholder="Years Experience"
                            value={formData.yearsExperience}
                            onChange={handleChange}
                        />
                        <Input
                            icon={<Briefcase />}
                            name="specialization"
                            placeholder="Specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                        />
                        <Input
                            icon={<Phone />}
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <Input
                            icon={<FileText />}
                            name="licenseNumber"
                            placeholder="License Number"
                            value={formData.licenseNumber}
                            onChange={handleChange}
                        />
                        <Input
                            icon={<MapPin />}
                            name="areasCovered"
                            placeholder="Areas Covered (Lagos, Abuja)"
                            value={formData.areasCovered}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea

                        name="address"
                        placeholder="Office Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-6 w-full rounded-xl border p-4"
                    />
                    <textarea
                        name="bio"
                        placeholder="Tell clients about yourself"
                        value={formData.bio}
                        onChange={handleChange}
                        className="mt-6 w-full rounded-xl border p-4"
                    />
                    <button
                        onClick={submitApplication}
                        disabled={loading}
                        className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700"

                    >
                        <CheckCircle />
                        {
                            loading
                                ?
                                "Submitting..."
                                :
                                "Submit Agent Application"
                        }
                    </button>
                </div>
            </div>
        </main>
    )
}

function Input({
    icon,
    name,
    placeholder,
    value,
    onChange
}: any) {
    return (
        <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
            {icon}
            <input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full outline-none"
            />
        </div>
    )
}