import { DollarSign, Users } from "lucide-react"
import { PiChartLineUp } from "react-icons/pi"
import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri"
import { TbBuildingSkyscraper } from "react-icons/tb"
import { easeIn, motion } from "framer-motion"
import DashboardCharts from "../../components/Adminchart"

function AdminDashbooard() {
    return (
        <div className="mt-5">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-3xl font-semibold text-black">Dashboard</h1>
                <p className="mt-2">Welcome back! Here's what's happening with your platform today</p>
            </motion.div>
            <div className="flex gap-5">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: easeIn }}
                    className="mt-10 border border-neutral-300 w-50 rounded-2xl">
                    <p className="mt-6 ml-6">Total Properties</p>
                    <div className="flex ml-6 gap-15 items-center">
                        <p className="text-2xl text-black font-semibold">1,234</p>
                        <div className="bg-blue-100 p-2 rounded-xl"><TbBuildingSkyscraper className="text-blue-600 text-2xl" /></div>
                    </div>
                    <div className="flex ml-6 items-center gap-2 mb-4">
                        <div className="flex text-center text-sm text-green-600"><RiArrowRightUpLine className="text-sm" />12.5%</div> <p className="text-sm">vs last <br /> month</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: easeIn }}
                    className="mt-10 border border-neutral-300 w-50 rounded-2xl">
                    <p className="mt-6 ml-6">Active Listings</p>
                    <div className="flex ml-6 gap-15 items-center">
                        <p className="text-2xl text-black font-semibold">892</p>
                        <div className="bg-green-100 p-2 rounded-xl"><PiChartLineUp className="text-green-600 text-2xl" /></div>
                    </div>
                    <div className="flex ml-6 items-center gap-2 mb-4">
                        <div className="flex text-center text-sm text-green-600"><RiArrowRightUpLine className="text-sm" />8.2%</div> <p className="text-sm">vs last <br /> month</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: easeIn }}
                    className="mt-10 border border-neutral-300 w-50 rounded-2xl">
                    <p className="mt-6 ml-6">Total Users</p>
                    <div className="flex ml-6 gap-15 items-center">
                        <p className="text-2xl text-black font-semibold">5,678</p>
                        <div className="bg-purple-100 p-2 rounded-xl"><Users className="text-purple-600 text-2xl" /></div>
                    </div>
                    <div className="flex ml-6 items-center gap-2 mb-4">
                        <div className="flex text-center text-sm text-green-600"><RiArrowRightUpLine className="text-sm" />15.3%</div> <p className="text-sm">vs last <br /> month</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: easeIn }}
                    className="mt-10 border border-neutral-300 w-50 rounded-2xl">
                    <p className="mt-6 ml-6">Total Revenue</p>
                    <div className="flex ml-6 gap-15 items-center">
                        <p className="text-2xl text-black font-semibold">$2.4M</p>
                        <div className="bg-red-100 p-2 rounded-xl"><DollarSign className="text-red-600 text-2xl" /></div>
                    </div>
                    <div className="flex ml-6 items-center gap-2 mb-4">
                        <div className="flex text-center text-sm text-red-600"><RiArrowRightDownLine className="text-sm" />3.1%</div> <p className="text-sm">vs last <br /> month</p>
                    </div>
                </motion.div>

            </div>

            <DashboardCharts />

        </div>
    )
}

export default AdminDashbooard