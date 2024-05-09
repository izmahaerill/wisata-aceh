import React from "react";
import Link from "next/link";
import nav from "@/utils/Navigation";
import LinkNavigation from "./micro/LinkNavigation";
import Image from "next/image";

export default function Navigation({ children }) {
  return (
    <>
      <header className="fixed z-40 top-0 right-0 left-0 shadow-md backdrop-blur-md">
        <nav className="flex justify-between px-10 py-3 items-center box-content text-black">
          <Link href={"/"}>
            <Image
              src={"/image/home-logo.png"}
              width={50}
              height={50}
              priority={true}
              alt="home logo"
            ></Image>
          </Link>
          <div className="flex gap-9 font-medium text-sm items-center">
            {nav.map((item) => (
              <LinkNavigation
                key={item.route}
                route={item.route}
                text={item.text}
                type={item.type}
              />
            ))}
          </div>
        </nav>
      </header>
      <main className="mt-16">{children}</main>
    </>
  );
}
