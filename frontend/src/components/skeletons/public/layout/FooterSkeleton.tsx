import { Skeleton } from "@/components/ui/skeleton";

export function FooterSkeleton() {
    return (
        <footer className="bg-footer-bg bg-blur-md text-footer">
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-6 py-6 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="flex justify-left items-start">
                    <div className="flex flex-col gap-2 justify-center items-center text-center w-full md:w-auto">
                        <Skeleton className="w-[60px] h-[60px] mb-2 mx-auto rounded-full bg-gray-800" />
                        <Skeleton className="h-6 w-32 bg-gray-800" />
                    </div>
                </div>

                {/* Sections */}
                {Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx}>
                        <Skeleton className="h-6 w-32 mb-4 bg-gray-800" />
                        <ul className="space-y-3">
                            {Array.from({ length: 4 }).map((_, linkIdx) => (
                                <li key={linkIdx}>
                                    <Skeleton className="h-4 w-24 bg-gray-800" />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
                    {/* Social */}
                    <div className="flex gap-4 justify-left w-full md:w-fit mb-10 md:mb-0">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} className="w-5 h-5 rounded-full bg-gray-800" />
                        ))}
                    </div>

                    <Skeleton className="h-4 w-64 md:w-80 bg-gray-800 text-center w-full md:w-fit" />
                </div>
            </div>
        </footer>
    );
}
