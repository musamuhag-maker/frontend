import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { DollarSign, Eye, Users2 } from 'lucide-react';
import { RiArrowRightUpLine } from 'react-icons/ri';


function DashboardCharts() {

    const sales = [
        { name: "Mon", Revenue$: 45000 },
        { name: "Tue", Revenue$: 52000 },
        { name: "Wed", Revenue$: 48000 },
        { name: "Thr", Revenue$: 68000 },
        { name: "Fri", Revenue$: 72000 },
        { name: "Sat", Revenue$: 89000 },
        { name: "Sun", Revenue$: 65000 }
    ];
    const data = [
        { name: "Jan", listed: 45, sold: 32 },
        { name: "Feb", listed: 52, sold: 38 },
        { name: "Mar", listed: 68, sold: 45 },
        { name: "Apr", listed: 75, sold: 52 },
        { name: "May", listed: 89, sold: 68 },
        { name: "Jun", listed: 102, sold: 78 },
    ];
    const users = [
        { month: "Jan", agent: "10", listed: 2, Buyers: 50, Staffs: 1 },
        { month: "Feb", agent: "18", listed: 5, Buyers: 35, Staffs: 3 },
        { month: "Mar", agent: "23", listed: 8, Buyers: 45, Staffs: 4 },
        { month: "Apr", agent: "25", listed: 12, Buyers: 60, Staffs: 5 },
        { month: "May", agent: "27", listed: 10, Buyers: 55, Staffs: 7 },
        { month: "Jun", agent: "32", listed: 15, Buyers: 70, Staffs: 9 },
    ];



    return (
        <div>
            <div className="grid grid-cols-2 gap-5 w-215 mt-10">
                <div className="col-span-1 bg-white/50 border border-neutral-300 rounded-2xl">
                    <h3 className="mt-5 ml-7 text-black">Property Trends</h3>
                    <div className='p-2'>
                        <AreaChart
                            style={{ width: '100%', maxHeight: '300px', aspectRatio: 1.618 }}
                            responsive
                            data={data}
                            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey={"listed"}
                                stroke="#8884d8"
                                fillOpacity={1}
                                fill="url(#colorUv)"
                                isAnimationActive={true}
                                animationBegin={200}
                                animationDuration={1300}
                            />
                            <Area
                                type="monotone"
                                dataKey={"sold"}
                                stroke="#82ca9d"
                                fillOpacity={1}
                                fill="url(#colorPv)"
                                isAnimationActive={true}
                            />
                            
                        </AreaChart>
                    </div>
                </div>
                <div className="col-span-1 bg-white/50 border border-neutral-300 rounded-2xl">
                    <h3 className="mt-5 ml-7 text-black">User Growth</h3>
                    <div>
                        <BarChart
                            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                            responsive
                            data={users}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis width="auto" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="agent" fill="#8884d8" radius={[10, 10, 0, 0]} />
                            <Bar dataKey="Buyers" fill="blue" radius={[10, 10, 0, 0]} />
                            <Bar dataKey="Staffs" fill="green" radius={[10, 10, 0, 0]} />
                           
                        </BarChart>
                    </div>
                </div>
            </div>

            {/* Sales Analytics */}
            <div className='grid grid-cols-3 w-215 gap-5 mt-10'>
                <div className='bg-white/50 border col-span-2 border-neutral-300 rounded-2xl p-5'>
                    <LineChart
                        style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={sales}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="var(--color-text-3)" />
                        <YAxis width="auto" stroke="var(--color-text-3)" />
                        <Tooltip
                            cursor={{
                                stroke: 'var(--color-border-2)',
                            }}
                            contentStyle={{
                                backgroundColor: 'var(--color-surface-raised)',
                                borderColor: 'var(--color-border-2)',
                            }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Revenue$"
                            stroke="orange"
                            dot={{
                                fill: 'orange',
                            }}
                            activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
                        />
                        
                    </LineChart>
                </div>
                <div className='text-white/30 border border-neutral-300 rounded-2xl col-span-1 '>

                    {/* Recent */}
                    <div className='h-[80vh]'>
                        <h1 className='text-black ml-5 my-4'>Recent Activities</h1>
                        <div>
                            <div className='flex gap-2 ml-3'>
                                <div className='bg-blue-100 w-10 h-10 flex rounded-md items-center justify-center '>
                                    <TbBuildingSkyscraper size={26} className='text-blue-700' />
                                </div>
                                <div className='text-black'>
                                    <h1>New Property Listed</h1>
                                    <p className='text-sm font-thin'>3BHK Apartment in Downtown...</p>
                                    <p className='text-[12px]'>5 Minuits Ago</p>
                                </div>
                            </div>
                            <div className='flex gap-2 ml-3 mt-5'>
                                <div className='bg-purple-100 w-10 h-10 flex rounded-md items-center justify-center '>
                                    <Eye size={26} className='text-purple-700' />
                                </div>
                                <div className='text-black'>
                                    <h1>New Inquiry Received</h1>
                                    <p className='text-sm font-thin'>John Doe inquired about ...</p>
                                    <p className='text-[12px]'>12 minutes ago</p>
                                </div>
                            </div>
                            <div className='flex gap-2 ml-3 mt-5'>
                                <div className='bg-green-100 w-10 h-10 flex rounded-md items-center justify-center '>
                                    <Users2 size={26} className='text-green-700' />
                                </div>
                                <div className='text-black'>
                                    <h1>New User Registration</h1>
                                    <p className='text-sm font-thin'>Sarah Smith joined as buyer...</p>
                                    <p className='text-[12px]'>23 minutes ago</p>
                                </div>
                            </div>
                            <div className='flex gap-2 ml-3 mt-5'>
                                <div className='bg-orange-100 w-10 h-10 flex rounded-md items-center justify-center '>
                                    <DollarSign size={26} className='text-orange-700' />
                                </div>
                                <div className='text-black'>
                                    <h1>Property Sold</h1>
                                    <p className='text-sm font-thin'>2BHK Apartment sold for $...</p>
                                    <p className='text-[12px]'>1 hour ago</p>
                                </div>
                            </div>
                            <div className='flex gap-2 ml-3 mt-5'>
                                <div className='bg-blue-100 w-10 h-10 flex rounded-md items-center justify-center '>
                                    <RiArrowRightUpLine size={26} className='text-blue-700' />
                                </div>
                                <div className='text-black'>
                                    <h1>Property Updated</h1>
                                    <p className='text-sm font-thin'>Price reduced for Villa #B205...</p>
                                    <p className='text-[12px]'>2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardCharts