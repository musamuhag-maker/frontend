import React, { useState, useRef, useEffect } from "react";
import agents from "../mock/agents.json";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface Agent {
    id: number;
    name: string;
    position: string;
    image: string;
    bio: string;
}

const AgentPage = () => {
    const [search, setSearch] = useState("");
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
    const [messages, setMessages] = useState<string[]>([]); // Just an array of text!
    const [inputValue, setInputValue] = useState("");

    const chatEndRef = useRef<HTMLDivElement>(null);

    const filteredAgents = agents.filter((agent: Agent) =>
        agent.name.toLowerCase().includes(search.toLowerCase())
    );

    const openChat = (agent: Agent) => {
        setSelectedAgent(agent);
        setMessages([]);
        setInputValue("");
    };
    const closeChat = () => {
        setSelectedAgent(null);
    };

    const sendMessage = () => {
        if (inputValue.trim() === "") return;

        setMessages([...messages, inputValue.trim()]);
        setInputValue("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") sendMessage();
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="min-h-screen bg-white p-8">

            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-black mb-6">Our Agents</h1>
                <Input
                    placeholder="Search agents by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-md mx-auto bg-white border text-black placeholder:text-blue-white  h-12 rounded-md px-6"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredAgents.map((agent) => (
                    <Card key={agent.id} className="bg-white shadow-2xl shadow-black/15 rounded-2xl overflow-hidden hover:border-blue-500 transition-colors">
                        <div className="h-64 bg-white-950">
                            <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-2xl font-bold text-black">{agent.name}</h3>
                            <p className="text-blue-400 font-medium">{agent.position}</p>
                            <p className="text-gray-800 mt-3 text-sm">{agent.bio}</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button
                                onClick={() => openChat(agent)}
                                className="w-full bg-blue-600 cursor-pointer hover:bg-blue-500 text-white font-bold h-12 rounded-xl"
                            >
                                Message Agent
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>


            {selectedAgent && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 bg-white/80 flex items-center justify-center p-4 z-50">
                    <Card className="w-full max-w-md bg-white border border-black/15 rounded-2xl flex flex-col h-150">

                        <div className="p-4 border-b border-black flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-black">{selectedAgent.name}</h3>
                                <p className="text-blue-600 text-sm">{selectedAgent.position}</p>
                            </div>
                            <Button className="cursor-pointer"
                                onClick={closeChat}>
                                <X className="text-white text-3xl h-8 w-8 p-0" />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.length === 0 && (
                                <p className="text-center text-black mt-10">
                                    Start the conversation...</p>
                            )}

                            {/* We only map USER messages (aligned right, blue background) */}
                            {messages.map((msg, index) => (
                                <div key={index} className="flex justify-end">
                                    <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-br-sm max-w-[80%]">
                                        {msg}
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} /> {/* Invisible element to scroll to */}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-black flex gap-2">
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your message..."
                                className="flex-1 border border-black text-black placeholder:text-black rounded-xl"
                            />
                            <Button
                                onClick={sendMessage}
                                disabled={!inputValue.trim()}
                                className="bg-black hover:bg-black text-white px-6 rounded-xl"
                            >
                                Send
                            </Button>
                        </div>

                    </Card>
                </motion.div>
            )}
        </div>
    );
};

export default AgentPage;