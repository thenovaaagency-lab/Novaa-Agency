import { ArrowRight } from 'lucide-react'
import React from 'react'

const NewsLetter = () => {
    return (
        <section id='contact' className=''>
            {/* Newsletter Section */}
            <div className=" py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                            Get In Touch
                        </h3>
                        <p className="text-blue-100 text-lg mb-8">
                            Get the latest insights on AI automation, industry trends, and exclusive tips delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
                                Subscribe
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default NewsLetter
