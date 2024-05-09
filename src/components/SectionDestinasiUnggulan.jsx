import React from "react";
import HeadingSection from "./micro/HeadingSection";
import Image from "next/image";
import unggulan from "@/data/destinasi-unggulan";
import Arrowrighticon from "@/app/icons/arrowright-icon";

export default function SectionDestinasiUnggulan({ id, text, url }) {
  return (
    <>
      <div className="flex justify-between items-start content-center">
        <HeadingSection>Destinasi Unggulan</HeadingSection>
        <button className="bg-yellow-primary text-white flex py-1 px-4 text-xs gap-1 rounded-lg">
          Lihat Semua
          <Arrowrighticon />
        </button>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-10">
        {unggulan.map((item) => (
          <div key={id} className="relative">
            <Image
              className="bg-cover object-contain rounded-2xl"
              src={item.url}
              width={500}
              height={500}
              alt="destinasi unggulan aceh"
            />
            <p className="absolute inset-10 flex justify-center items-end text-center text-white text-2xl">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
