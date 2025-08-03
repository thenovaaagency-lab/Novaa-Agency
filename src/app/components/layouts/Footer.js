"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import { COMPANY_INFO } from "../../../lib/Constant";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Services",
            links: [
                { href: "#services", label: "AI Chatbots" },
                { href: "#services", label: "Voice Solutions" },
                { href: "#services", label: "WhatsApp Automation" },
                { href: "#services", label: "Custom AI Agents" },
                { href: "#services", label: "AI Consultation" },
            ],
        },
        {
            title: "Company",
            links: [
                { href: "#about", label: "About Us" },
                { href: "#case-studies", label: "Case Studies" },
                { href: "#contact", label: "Contact" },
                { href: "/careers", label: "Careers" }, // example external page
            ],
        },
        {
            title: "Resources",
            links: [
                { href: "#blog", label: "AI Insights" },
                { href: "#documentation", label: "Documentation" },
                { href: "#support", label: "Support Center" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
            ],
        },
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        if (href.startsWith("#")) {
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = href; // fallback for normal links
        }
    };

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-4">
                            <button
                                onClick={(e) => handleScroll(e, "#home")}
                                className="flex items-center space-x-2 mb-6"
                            >
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <Image src="/logo.png" width={100} height={100} alt="Nova Agency Logo" />
                                </div>
                                <span className="text-2xl font-bold">Nova Agency</span>
                            </button>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {COMPANY_INFO.description}. We help businesses harness the power of artificial intelligence to automate processes, improve efficiency, and drive growth.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center text-gray-400">
                                    <Mail className="w-5 h-5 mr-3 text-blue-500" />
                                    <a
                                        href={`mailto:${COMPANY_INFO.email}`}
                                        className="hover:text-white transition-colors"
                                    >
                                        {COMPANY_INFO.email}
                                    </a>
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <Phone className="w-5 h-5 mr-3 text-blue-500" />
                                    <a
                                        href={`tel:${COMPANY_INFO.phone}`}
                                        className="hover:text-white transition-colors"
                                    >
                                        {COMPANY_INFO.phone}
                                    </a>
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                                    <span>{COMPANY_INFO.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {footerSections.map((section) => (
                                    <div key={section.title}>
                                        <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                                        <ul className="space-y-3">
                                            {section.links.map((link) => (
                                                <li key={link.href + link.label}>
                                                    <a
                                                        href={link.href}
                                                        onClick={(e) => handleScroll(e, link.href)}
                                                        className="text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-200 block cursor-pointer"
                                                    >
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Novaa Agency. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href={COMPANY_INFO.social.linkedin}
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href={COMPANY_INFO.social.twitter}
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href={COMPANY_INFO.social.instagram}
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
