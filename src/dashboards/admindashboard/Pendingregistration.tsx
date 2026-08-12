import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    CheckCircle,
    XCircle,
    Phone,
    MapPin,
    Briefcase,
    Building2,
    ShieldCheck,
    RefreshCw
} from "lucide-react";


const API_URL = "http://localhost:5001";



interface Agent {

    _id: string;
    fullname: string;
    email: string;
    phone: string;
    agencyName: string;
    yearsExperience: number;
    specialization: string;
    licenseNumber: string;
    areasCovered: string[];
    address: string;
    bio: string;
    submittedAt: string;

}





export default function PendingAgents() {



    const token =
        localStorage.getItem("token") ||
        sessionStorage.getItem("token");



    const [agents, setAgents] = useState<Agent[]>([]);

    const [loading, setLoading] = useState(true);

    const [message, setMessage] = useState("");





    // GET PENDING AGENTS

    const fetchAgents = async () => {


        try {


            const res = await fetch(

                `${API_URL}/api/admin/pending-agents`,

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );



            const data = await res.json();



            setAgents(data.data || []);



        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }


    };







    useEffect(() => {

        fetchAgents();

    }, []);









    // APPROVE

    const approveAgent = async (id: string) => {


        try {


            const res = await fetch(

                `${API_URL}/api/admin/approve-agent/${id}`,

                {

                    method: "PUT",

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );



            const data = await res.json();



            setMessage(data.message);



            fetchAgents();



        }

        catch (error) {

            console.log(error);

        }


    };









    // REJECT

    const rejectAgent = async (id: string) => {


        try {


            const res = await fetch(

                `${API_URL}/api/admin/reject-agent/${id}`,

                {

                    method: "PUT",

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );



            const data = await res.json();



            setMessage(data.message);



            fetchAgents();



        }

        catch (error) {

            console.log(error);

        }


    };









    if (loading) {


        return (

            <div className="min-h-screen flex items-center justify-center">

                <RefreshCw
                    className="animate-spin text-blue-600"
                    size={40}
                />


            </div>

        )


    }









    return (


        <main className="min-h-screen bg-slate-100 p-8">

            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-3xl bg-linear-to-r from-blue-700 to-indigo-700 p-8 text-white shadow-xl"
                >
                    <div className="flex items-center gap-4">
                        <ShieldCheck size={45} />
                        <div>
                            <h1 className="text-3xl font-bold">
                                Pending Agent Applications
                            </h1>
                           <p className="text-blue-100">
                                Review and verify Luxury Dwells agents.
                            </p>
                        </div>
                    </div>
                </motion.div>
                {
                    message &&
                    <div className="mt-6 rounded-xl bg-green-50 p-4 text-green-700">
                        {message}
                    </div>
                }
                {
                    agents.length === 0 ?
                        <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow">
                            <ShieldCheck
                                size={60}
                                className="mx-auto text-gray-400"
                            />
                            <h2 className="mt-4 text-2xl font-bold">
                                No pending applications
                            </h2>
                            <p className="text-gray-500">
                                All agent applications have been reviewed.
                            </p>
                        </div>
                        :
                        <div className="mt-10 grid gap-8 lg:grid-cols-2">
                            {
                                agents.map((agent) => (
                                    <motion.div
                                       key={agent._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="rounded-3xl bg-white p-8 shadow-xl"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="text-2xl font-bold">
                                                    {agent.fullname}
                                                </h2>
                                                <p className="text-gray-500">
                                                    {agent.email}
                                                </p>
                                           </div>
                                            <div className="rounded-full bg-blue-100 p-3">
                                               <Building2
                                                    className="text-blue-600"
                                                />
                                            </div>
                                      </div>
                                        <div className="mt-6 space-y-4">
                                            <Info
                                                icon={<Building2 />}
                                                text={`Agency: ${agent.agencyName}`}
                                            />
                                            <Info
                                                icon={<Briefcase />}
                                                text={`Experience: ${agent.yearsExperience} years`}
                                            />
                                            <Info
                                                icon={<Phone />}
                                                text={`Phone: ${agent.phone}`}
                                            />
                                            <Info
                                                icon={<MapPin />}
                                                text={`Areas: ${agent.areasCovered?.join(", ")}`}
                                            />
                                        </div>
                                        <div className="mt-6 rounded-xl bg-slate-100 p-4">
                                           <p className="font-semibold">
                                                Specialization
                                            </p>
                                           <p className="text-gray-600">
                                                {agent.specialization}
                                            </p>
                                        </div>
                                    <div className="mt-4 rounded-xl bg-slate-100 p-4">

                                            <p className="font-semibold">
                                                About Agent
                                            </p>
                                            <p className="text-gray-600">
                                                {agent.bio}
                                           </p>
                                    </div>
                                        <div className="mt-8 flex gap-4">
                                            <button
                                               onClick={() => approveAgent(agent._id)}
                                                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-bold text-white hover:bg-green-700"
                                            >
                                                <CheckCircle size={20} />
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => rejectAgent(agent._id)}
                                                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-bold text-white hover:bg-red-700"
                                            >
                                                <XCircle size={20} />
                                                Reject
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                }
            </div>
        </main>
    )
}
function Info({
    icon,
    text
}: any) {
    return (
        <div className="flex items-center gap-3 text-gray-700">
            <span className="text-blue-600">
                {icon}
            </span>
            <p>
                {text}
            </p>
     </div>
    )
}