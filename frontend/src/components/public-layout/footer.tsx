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
            <div className="max-w-7xl mx-auto px-6 py-6 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About */}
                <div className="flex justify-left items-start">
                    <div className="flex flex-col gap- justify-center items-center" >
                        <Image src="/waa-logo.png" alt="Logo" width={100} height={100} />
                        <h3 className="text-base font-semibold text-primary mb-4">
                            WAAAMS
                        </h3>

                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/mining" className="hover:text-primary">
                                Mining Sector
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-primary">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/news" className="hover:text-primary">
                                News & Updates
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Resources
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/mining/licensing-and-legislation" className="hover:text-primary">
                                Licensing & Legislation
                            </Link>
                        </li>
                        <li>
                            <Link href="/mining/data" className="hover:text-primary">
                                Mining Data
                            </Link>
                        </li>
                        <li>
                            <Link href="/mining/gemstones" className="hover:text-primary">
                                Gemstones
                            </Link>
                        </li>
                        <li>
                            <Link href="/mining/application-portal" className="hover:text-primary">
                                Application Portal
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Contact
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/offices/federal" className="hover:text-primary">
                                Federal Office
                            </Link>
                        </li>
                        <li>
                            <Link href="/offices/regional" className="hover:text-primary">
                                Regional Offices
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="hover:text-primary">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/stakeholder-consultations" className="hover:text-primary">
                                Stakeholder Consultations
                            </Link>
                        </li>
                        <li>
                            <Link href="/tenders-and-vacancies" className="hover:text-primary">
                                Tenders and Vacancies
                            </Link>
                        </li>
                        <li>
                            <Link href="/feedback-and-complaints" className="hover:text-primary">
                                Feedback and Complaints
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 pb-5 flex flex-col  md:flex-row items-center justify-between text-sm">
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
                        © {new Date().getFullYear()} Wollega Adventist Academy Alumni Association. All rights
                        reserved.
                    </p>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
