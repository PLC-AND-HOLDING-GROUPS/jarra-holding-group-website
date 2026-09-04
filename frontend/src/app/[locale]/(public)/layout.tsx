import type { Metadata } from "next";
import PublicNavbar from "@/components/public-layout/nav-bar";
import Footer from "@/components/public-layout/footer";

export const metadata: Metadata = {
    title: "Jarra Holdings",
    description: "Jarra Holdings",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative bg-[#f7f9fc] w-full min-h-screen flex flex-col">
            <PublicNavbar />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}
