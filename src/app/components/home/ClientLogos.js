'use client';

import { motion } from 'framer-motion';

const clientLogos = [
    {
        name: "TechCorp",
        logo: "/images/clients/techcorp.png",
        width: 120,
        height: 40
    },
    {
        name: "InnovateLabs",
        logo: "/images/clients/innovatelabs.png",
        width: 140,
        height: 45
    },
    {
        name: "FutureFlow",
        logo: "/images/clients/futureflow.png",
        width: 130,
        height: 35
    },
    {
        name: "DataStream",
        logo: "/images/clients/datastream.png",
        width: 125,
        height: 42
    },
    {
        name: "CloudSync",
        logo: "/images/clients/cloudsync.png",
        width: 135,
        height: 38
    },
    {
        name: "NextGen",
        logo: "/images/clients/nextgen.png",
        width: 115,
        height: 40
    }
];

export default function ClientLogos() {
    return (
        <section className="container section-padding bg-transparent border-b border-purple-500/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-purple-200 text-lg font-medium">
                        Trusted by leading companies worldwide
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative overflow-hidden"
                >
                    {/* Animated logos container */}
                    <div className="flex animate-scroll">
                        {/* First set of logos */}
                        <div className="flex items-center justify-around min-w-full">
                            {clientLogos.map((client, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex-shrink-0 mx-8 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="w-32 h-16 bg-white/10 backdrop-blur-sm border border-purple-300/20 rounded-lg flex items-center justify-center hover:bg-white/15 hover:border-purple-300/40 transition-all duration-300">
                                        <span className="text-purple-100 font-semibold text-sm">
                                            {client.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate set for seamless loop */}
                        <div className="flex items-center justify-around min-w-full">
                            {clientLogos.map((client, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex-shrink-0 mx-8 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="w-32 h-16 bg-white/10 backdrop-blur-sm border border-purple-300/20 rounded-lg flex items-center justify-center hover:bg-white/15 hover:border-purple-300/40 transition-all duration-300">
                                        <span className="text-purple-100 font-semibold text-sm">
                                            {client.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}