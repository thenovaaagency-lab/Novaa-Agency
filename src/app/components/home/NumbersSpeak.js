"use client"
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { number: '98%', label: 'Client Satisfaction', description: 'Happy Customers World Wide' },
    { number: '150%', label: 'Average ROI', description: 'Return On Invest for Clients' },
    { number: '24/7', label: 'Support Available', description: 'Round-The-Clock assistance' }
];

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

const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const NumbersSpeak = () => {
    return (
        <section className="section-padding">
            {/* Stats Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Numbers That Speak
                    </h3>
                    <p className="text-gray-300 text-lg">
                        Our track record demonstrates our commitment to excellence
                    </p>
                </motion.div>
                <div className='section-padding'>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={statVariants}
                                className="text-center group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
                                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:border-purple-400/50 group-hover:shadow-lg transition-all duration-300">
                                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {stat.number}
                                    </div>
                                    <div className="text-lg font-semibold text-white mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-gray-300 text-sm">
                                        {stat.description}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default NumbersSpeak;
