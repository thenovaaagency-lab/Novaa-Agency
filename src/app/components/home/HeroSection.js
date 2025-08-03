'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Star, Users } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* Animated gradient orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="text-center max-w-5xl mx-auto"
                >
                    {/* Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        AI That Works.
                        <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                            So You Don’t Have To
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg lg:text-xl text-purple-100/90 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Automate customer chats, bookings, and workflows with smart bots and voice AI
                        <span className="text-purple-300 font-semibold"> — plus get powerful websites built on Shopify or fully custom to your brand. </span>
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center items-center mb-12"
                    >
                        <Link
                            href="https://cal.com/thenovaaagency-ltqrv8/15min"
                            target='_blank'
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-blue-400 via-blue-600 to-purple-700 hover:from-blue-400 hover:via-blue-600 hover:to-purple-800 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/40 flex items-center relative overflow-hidden text-sm"
                        >
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10 flex items-center">
                                Book a Free Consultation Call
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>


                </motion.div>
            </div>
        </section>
    );
}