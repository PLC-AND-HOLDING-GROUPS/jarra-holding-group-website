import React from "react";
import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
    Instagram,
} from "lucide-react";
import Image from "next/image";
import { IconBrandTelegram, IconBrandTiktok } from "@tabler/icons-react";

const Footer = () => {
    return (
        <footer className="bg-footer-bg bg-blur-md text-footer">
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-6 py-6 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div className="flex justify-left items-start">
                    <div className="flex flex-col gap-2 justify-start items-start" >
                        <Image src="/waa-logo.png" alt="Logo" width={100} height={100} className="mb-2" />
                        <h3 className="text-lg font-semibold text-primary mb-2">
                            Jarra Holding Group
                        </h3>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Company
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/about" className="hover:text-primary">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/businesses" className="hover:text-primary">
                                Businesses
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" className="hover:text-primary">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-primary">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Explore
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/products" className="hover:text-primary">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-primary">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/facilities" className="hover:text-primary">
                                Facilities
                            </Link>
                        </li>
                        <li>
                            <Link href="/news" className="hover:text-primary">
                                News
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm">
                    {/* Social */}
                    <div className="flex gap-4  justify-left w-full md:w-fit mb-10 md:mb-0">
                        <a href="#" className="hover:text-primary">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <Linkedin className="w-5 h-5" />
                        </a>

                        <a href="#" className="hover:text-primary">
                            <Youtube className="w-5 h-5" />
                        </a>

                        <a href="#" className="hover:text-primary">
                            <Instagram className="w-5 h-5" />
                        </a>

                    </div>

                    <p className="text-center w-full md:w-fit">
                        © {new Date().getFullYear()} Jarra Holding Group. All rights
                        reserved.
                    </p>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
