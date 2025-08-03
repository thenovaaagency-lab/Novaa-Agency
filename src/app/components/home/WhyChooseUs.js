'use client';

import { motion } from 'framer-motion';
import {
    Zap,
    Users,
    Trophy,
    Clock,
    Headphones,
    Target,
} from 'lucide-react';
import Image from 'next/image';

// ✅ All images now served from public/assets
const benefits = [
    {
        id: 1,
        title: "End-to-End AI Solutions",
        description: "From concept to deployment, we handle every aspect of your AI implementation with comprehensive support.",
        icon: Zap,
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/20",
        bgImage: "/assets/bg1.jpg"
    },
    {
        id: 2,
        title: "Industry Expertise",
        description: "Deep understanding of various industries allows us to create tailored solutions that fit your specific needs.",
        icon: Target,
        color: "text-purple-400",
        bgColor: "bg-purple-500/20",
        bgImage: "/assets/industry.png"
    },
    {
        id: 3,
        title: "Fast Delivery",
        description: "Agile development process ensures quick turnaround times without compromising on quality.",
        icon: Clock,
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/20",
        bgImage: "/assets/delevery.png"
    },
    {
        id: 4,
        title: "Expert Team",
        description: "Our team of AI specialists, developers, and consultants brings years of experience to every project.",
        icon: Users,
        color: "text-orange-400",
        bgColor: "bg-orange-500/20",
        bgImage: "/assets/team.png"
    },
    {
        id: 5,
        title: "24/7 Support",
        description: "Round-the-clock technical support ensures your AI solutions run smoothly at all times.",
        icon: Headphones,
        color: "text-pink-400",
        bgColor: "bg-pink-500/20",
        bgImage: "/assets/support.png"
    },
    {
        id: 6,
        title: "Proven Results",
        description: "Track record of successful implementations with measurable ROI and customer satisfaction.",
        icon: Trophy,
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/20",
        bgImage: "/assets/industry.png"
    }
];

const stats2 = [
    { number: '98%', label: 'Client Satisfaction', description: 'Happy Customers World Wide' },
    { number: '150%', label: 'Average ROI', description: 'Return On Invest for Clients' },
    { number: '24/7', label: 'Support Available', description: 'Round-The-Clock assistance' }
];

export default function WhyChooseUs() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6
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

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id='about' className="py-20 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Your Trusted AI Partner
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-200 max-w-3xl mx-auto"
                    >
                        We combine cutting-edge technology with deep industry expertise to deliver
                        AI solutions that truly transform your business operations.
                    </motion.p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
                >
                    {benefits.map((benefit) => {
                        const IconComponent = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.id}
                                variants={itemVariants}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 overflow-hidden"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <Image
                                        src={benefit.bgImage}
                                        alt={benefit.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        width={800}
                                        height={600}
                                    />
                                </div>

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent transition-all duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-14 h-14 ${benefit.bgColor} backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20`}
                                    >
                                        <IconComponent className={`w-7 h-7 ${benefit.color}`} />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse group-hover:animate-none group-hover:left-full transition-all duration-1000"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Stats */}
                <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats2.map((stat, index) => (
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
        </section>
    );
}
