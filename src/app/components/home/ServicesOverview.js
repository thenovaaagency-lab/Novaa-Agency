'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MessageSquare, Bot, ArrowRight, LaptopMinimalCheck, LaptopMinimalCheckIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const services = [
    {
        id: 1,
        title: "AI Chatbots",
        description: "Smart chatbots that understand intent, handle complex queries, and engage customers 24/7 — all while learning and improving with every interaction.",
        icon: MessageCircle,
        color: "from-cyan-400 to-blue-500",
        accent: "cyan",
        features: ["24/7 Channel Support", "Multi-Channel Support", "Integration Ready"],
    },
    {
        id: 2,
        title: "AI Voice Agents",
        description: "Automated voice systems for seamless customer interaction with natural speech recognition and intelligent responses.",
        icon: Phone,
        color: "from-pink-400 to-purple-500",
        accent: "pink",
        features: ["Natural Voice Recognition", "Call Analytics", "Real-time Responses"],
    },
    {
        id: 3,
        title: "Shopify & Web Development",
        description: "High-converting websites built from scratch or on Shopify — tailored to your brand, optimized for performance and user experience.",
        icon: LaptopMinimalCheckIcon,
        color: "from-emerald-400 to-teal-500",
        accent: "emerald",
        features: ["Custom Web Design", "Shopify Store Setup", "Responsive & Fast"],
    },
    {
        id: 4,
        title: "AI Workflows Automation",
        description: "Automate repetitive tasks and streamline operations using AI-driven workflows — freeing up your team to focus on strategic growth.",
        icon: Bot,
        color: "from-orange-400 to-red-500",
        accent: "orange",
        features: ["Process Automation", "Smart Scheduling", "Document Handling"],
    }
];

export default function ServicesOverview() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.8 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section id='services' className="py-20 bg-black/20 relative overflow-hidden">

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
                        What We Do
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        We specialize in creating intelligent AI solutions that automate your business processes,
                        enhance customer experience, and drive measurable growth.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative"
                >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        speed={1500}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 28 },
                            1280: { slidesPerView: 3, spaceBetween: 32 },
                        }}
                        className="pb-16 overflow-visible"

                    >
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <SwiperSlide key={service.id} className="h-auto">
                                    <motion.div
                                        variants={itemVariants}
                                        animate={floatingAnimation}
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                        className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col min-h-[450px]"
                                    >
                                        {/* Background gradient on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col min-h-[280px]">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-3">
                                                {service.features.map((feature, featureIndex) => (
                                                    <motion.div
                                                        key={featureIndex}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: featureIndex * 0.3 }}
                                                        className="flex items-center text-gray-700"
                                                    >
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                        {feature}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    {/* <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:shadow-xl transition-all duration-300 cursor-pointer -ml-6">
                        <ArrowRight className="w-5 h-5 rotate-180" />
                    </div>
                    <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:shadow-xl transition-all duration-300 cursor-pointer -mr-6">
                        <ArrowRight className="w-5 h-5" />
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
}