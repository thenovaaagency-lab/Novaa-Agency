"use client"
import { ArrowRight, Mail, Copy, Check } from 'lucide-react'
import React, { useState } from 'react'

const NewsLetter = () => {
    const [copied, setCopied] = useState(false);
    const email = "thenovaa.agency@gmail.com"; // Replace with your actual email

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id='contact' className='container'>
            {/* Contact Section */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                            Get In Touch
                        </h3>
                        <p className="text-blue-100 text-lg mb-12">
                            {"Ready to transform your business with AI automation? Let's connect and discuss your vision."}
                        </p>


                        <div className="relative">
                            {/* Email Display Box */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8 hover:bg-white/15 transition-all duration-300">
                                <div className="flex items-center justify-center mb-4">
                                    <Mail className="w-8 h-8 text-white mr-3" />
                                </div>

                                <div className="text-center">
                                    <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3 mb-6">
                                        <span className="text-white text-sm md:text-xl font-mono tracking-wider">
                                            {email}
                                        </span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        {/* Updated Copy Button with Header theme */}
                                        <button
                                            onClick={handleCopyEmail}
                                            className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 hover:scale-105 flex items-center justify-center"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check className="mr-2 w-4 h-4" />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                                                    Copy Email
                                                </>
                                            )}
                                        </button>

                                        {/* Updated Send Email Button with glassmorphism theme */}
                                        <a
                                            href={`mailto:${email}`}
                                            className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-white/20 hover:scale-105 flex items-center justify-center"
                                        >
                                            Send Email
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter