import React from "react";
import Image from "next/image";
import Arrowrighticon from "@/app/icons/arrowright-icon";

export default function sectionHeroImage() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/image/bg-heroimage.png"
        alt="background wisata aceh"
        priority={true}
        className="bg-cover object-contain bg-center fill-current"
      />
      <div className="absolute inset-20 flex flex-col items-start justify-center w-[40rem] mt-10">
        <h1 className="text-white text-5xl font-bold leading-snug">
          Beragam Destinasi Wisata Aceh yang Wajib Anda Kunjungi
        </h1>
        <button className="bg-yellow-primary text-white flex items-center py-2 px-10 mt-7 text-sm gap-1 rounded-lg">
          Jelajahi Aceh <Arrowrighticon />
        </button>
      </div>
    </div>
  );
}
