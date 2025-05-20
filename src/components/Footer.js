import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer aria-label="Footer" className="bg-footerGray text-white px-6 sm:px-10 md:px-20 lg:px-40 py-10 text-center md:text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mb-10">
                <div className="flex flex-col items-center md:items-start gap-5">
                    <Link href="/">
                        <Image
                            src="/images/footer-logo.png"
                            alt="Logo"
                            width={150}
                            height={50}
                            className="object-contain"
                        />
                    </Link>
                    <p className="text-white text-sm">
                        Get professional medical consultations from licensed doctors in the comfort of your home. Available 24/7 in Abu Dhabi & Al Ain
                    </p>
                    <Image
                        src="/images/googleReviews.png"
                        alt="Google Reviews"
                        width={200}
                        height={50}
                        className="object-contain"
                    />
                </div>

                <div className="md:ml-20">
                    <h3 className="text-lg font-gilroyBold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-white text-sm">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Why Choose Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="block md:hidden border-t border-white/20" />

                <div className="md:ml-20">
                    <h3 className="text-lg font-gilroyBold mb-3">Services</h3>
                    <ul className="space-y-2 text-white text-sm">
                        <li>Doctor Consultation</li>
                        <li>IV Drip Therapy</li>
                        <li>Physiotherapy</li>
                        <li>Lab Test & Checkups</li>
                    </ul>
                </div>

                <div className="block md:hidden border-t border-white/20" />

                <div className="md:ml-20">
                    <h3 className="text-lg font-gilroyBold mb-3">Social Media</h3>
                    <ul className="space-y-3 text-white text-sm">
                        <li>
                            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start items-center gap-2 hover:text-blue-500 transition">
                                <FaFacebookF /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start items-center gap-2 hover:text-pink-400 transition">
                                <FaInstagram /> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start items-center gap-2 hover:text-red-500 transition">
                                <FaYoutube /> YouTube
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start items-center gap-2 hover:text-gray-300 transition">
                                <FaTiktok /> TikTok
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col mb-10 lg:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-6 text-center">
                <div>
                    <p className="text-white text-lg font-semibold">Important Updates Waiting For You</p>
                    <p className="text-white text-sm">Get your latest and best offers right into your inbox</p>
                </div>

                <div className="relative w-full max-w-lg">
                    <input
                        aria-label="Email address"
                        type="text"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-xl bg-white text-black border border-gray-600 focus:outline-none"
                    />
                    <button className="absolute right-2 top-2 bottom-2 px-4 bg-orange rounded-md text-sm md:text-base hover:bg-blue-500 text-white">
                        Subscribe
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;