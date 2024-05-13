"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const AdminSidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-3 pl-5">
                <div className="flex gap-2 items-center">
                    <Image src="/assets/tunebars.svg" width={32} height={32} alt="tunebars"/>
                    <h1 className="text-heading1-semibold">Admin</h1>
                </div>
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`leftsidebar_link ${isActive && "bg-muted-normal"}`}
                        >
                            <div className="flex gap-2 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    width={36}
                                    height={36}
                                    className={`rounded-full py-2 ml-2 ${isActive ? "stroke-white bg-black" : "stroke-black"}`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d={link.svgPath}
                                    />
                                </svg>
                                <p className={`w-40 max-lg:hidden text-black text-small-x-semibold h-fit ${!isActive && "-ml-2"}`}>{link.label}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default AdminSidebar;
