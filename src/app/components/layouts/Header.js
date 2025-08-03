'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ExternalLink } from 'lucide-react';
import logo from '../../../../public/logo.png';
import { NAVIGATION_LINKS } from '../../../lib/Constant';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    // Change header style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Detect active section using IntersectionObserver
    useEffect(() => {
        const sections = NAVIGATION_LINKS.map(link => document.querySelector(link.href));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
            ${isScrolled
                    ? 'bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-indigo-900/70 backdrop-blur-xl shadow-xl border-b border-purple-400/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button onClick={() => scrollToSection('#home')} className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                                <Image src={logo} alt="Logo" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors duration-300">Nova Agency</span>
                            <span className="text-xs text-indigo-300/80 group-hover:text-indigo-200/90 transition-colors duration-300">AI Solutions</span>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAVIGATION_LINKS.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative py-2 font-medium transition-all duration-300
                                    ${activeSection === link.href
                                        ? 'text-cyan-300'
                                        : 'text-indigo-200 hover:text-white'}
                                `}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300
                                        ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'}
                                    `}
                                ></span>
                            </button>
                        ))}
                        <a
                            href="https://cal.com/thenovaaagency-ltqrv8/15min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 hover:scale-105 flex items-center gap-2"
                        >
                            Book a Call
                            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-3 rounded-xl hover:bg-indigo-500/20 transition-all duration-300 text-white border border-indigo-300/20 hover:border-indigo-300/40"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-indigo-900/80 to-purple-900/80 backdrop-blur-xl shadow-2xl border-t border-purple-500/30 border-b border-purple-500/20">
                        <nav className="flex flex-col py-6 space-y-2">
                            {NAVIGATION_LINKS.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`px-6 py-4 transition-all duration-300 font-medium border-l-4
                                        ${activeSection === link.href
                                            ? 'text-cyan-300 bg-indigo-700/40 border-cyan-400'
                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700/30 border-transparent hover:border-cyan-400'}
                                    `}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="px-6 py-4">
                                <a
                                    href="https://cal.com/thenovaaagency-ltqrv8/15min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg inline-flex items-center justify-center w-full gap-2 hover:scale-105"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Book a Call
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
