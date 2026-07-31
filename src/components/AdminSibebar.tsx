import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    LogOut,
    MessageSquareIcon,
    BellIcon,
    BriefcaseBusiness,
} from "lucide-react";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {
    const navigate = useNavigate();
    return (
        
        <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-white text-black">

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeIn }}
                className="flex mt-5 border-slate-700 px-6 gap-2 mb-5">
                <div className="bg-blue-700 flex items-center justify-center rounded-xl">
                    <TbBuildingSkyscraper className="text-5xl p-2 text-white" />
                </div>
                <div className="justify-between items-center ">
                    <h1 className="text-xl font-bold text-black">
                        Luxury Dwells
                    </h1>
                    <p className="text-sm text-neutral-500">Admin Pannel</p>
                </div>
            </motion.div>


            {/* Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeIn }}
                className="flex-1 space-y-2 p-4 mt-2">

                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg font-semibold px-4 py-3 ${isActive
                            ? "bg-blue-100 text-blue-600"
                            : "text-black"
                        }`
                    }
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/admin/pendingregistrations"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 font-semibold py-3 ${isActive
                            ? "bg-blue-100 text-blue-600"
                            : "text-black"
                        }`
                    }
                >
                    <BellIcon size={20} />
                    Agent Registration
                </NavLink>

                <NavLink
                    to="/admin/propertiees"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg font-semibold px-4 py-3 ${isActive
                            ? "bg-blue-100 text-blue-600"
                            : "text-black"
                        }`
                    }
                >
                    <TbBuildingSkyscraper size={25} />
                    Properties
                </NavLink>

                <NavLink
                    to="/admin/agents"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg font-semibold px-4 py-3 ${isActive
                            ? "bg-blue-100 text-blue-600"
                            : "text-black"
                        }`
                    }
                >
                    <BriefcaseBusiness size={20} />
                    Agents
                </NavLink>
                

                <NavLink
                    to="/admin/totalUsers"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 font-semibold py-3 ${isActive
                            ? "bg-blue-100 text-blue-600"
                            : "text-black"
                        }`
                    }
                >
                    <MessageSquareIcon size={20} />
                    Users
                </NavLink>

                

            </motion.nav>

            {/* Logout */}
            <div className="border-t border-slate-700 p-4">
                <button 
                onClick={ () => navigate("/") }
                className="flex bg-red-700/20 w-full items-center gap-3 rounded-lg px-4 py-3 text-red-800 cursor-pointer hover:bg-red-500/20 hover:text-red-400">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>

        </aside>
    );
}

export default AdminSidebar;