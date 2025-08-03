"use client"
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.2 }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Process = () => {
    return (
        <section className='bg-black/20 section-padding'>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className=""
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Our Proven Process
                    </h3>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        A systematic approach that ensures successful AI implementation every time
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            step: "01",
                            title: "Book a Free Consultation Call",
                            description: "We analyze your business needs and create a comprehensive AI strategy tailored to your goals."
                        },
                        {
                            step: "02",
                            title: "Customize Your AI Solution",
                            description: "From chatbots to voice agents, smart workflows, Shopify stores, and custom websites — everything tailored to your business needs."
                        },
                        {
                            step: "03",
                            title: "Deployment & Support",
                            description: "We deploy your solution and provide ongoing support to ensure continued success."
                        }
                    ].map((process, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative text-center group"
                        >
                            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300">
                                {process.step}
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                                {process.title}
                            </h4>
                            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                {process.description}
                            </p>

                            {/* Connector Line */}
                            {index < 2 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 transform translate-x-8"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Process;
