"use client";
import { useScrollReveal } from "../hooks/useReveal";

export default function AboutSection() {
  const getToKnow = useScrollReveal({ threshold: 0.05 });
  const nameTitle = useScrollReveal({ threshold: 0.005 });
  const education = useScrollReveal({ threshold: 0.0005 });
  return (
    <section
      className="h-full w-full px-[16vw] justify-center flex flex-col select-none"
      id="about"
    >
      <div className="mb-[3rem]">
        <p
          className={`reveal-right${getToKnow.visible ? " visible" : ""} leading font-light mb-3`}
          ref={getToKnow.ref}
        >
          Get to know about me
        </p>
        <h1
          className={`reveal${nameTitle.visible ? " visible" : ""} text-4xl xs:text-8xl lg:text-6xl mb-[.4em] font-bold color-main leading-none tracking-[-2px] lg:tracking-[-4px]`}
          ref={nameTitle.ref}
        >
          Budi Prasetiyo.
        </h1>
        <p className="text-sm font-light text-justify color-main mb-[3em]">
          Active student majoring Informatics Management intersted in full-stack
          programming in software development with strong technical skills,
          highly motivated and willingness to learn, disciplined, hardworking,
          and able to work both in a team and independently.
        </p>
        <div
          className={`reveal${education.visible ? " visible" : ""} mb-[3rem]`}
          ref={education.ref}
        >
          <h3 className="font-semibold text-2xl mb-3">Education</h3>
          <div className="flex gap-3">
            <div className="p-4 border border-blue-300 rounded-2xl flex flex-col">
              <h5 className="font-semibold text-xl tracking-[-1px] lg:tracking-[0px] leading-none mb-3">
                Politeknik Astra
              </h5>
              <p className="text-xs font-light mb-5">Diploma-III (2023-2026)</p>
              <div className="flex gap-1 mb-1">
                <small className="text-xs text-gray-500">
                  Informatics Management
                </small>
              </div>
              <div className="flex gap-1">
                <small className="text-xs text-gray-500">
                  Cikarang, Kabupaten Bekasi
                </small>
              </div>
            </div>
            <div className="p-4 border border-blue-300 rounded-2xl flex flex-col">
              <h5 className="font-semibold text-xl tracking-[-1px] lg:tracking-[0px] leading-none mb-3">
                SMAN 1 Ngawen
              </h5>
              <p className="text-xs font-light mb-5">Highschool (2020-2023)</p>
              <div className="flex gap-1 mb-1">
                <small className="text-xs text-gray-500">MIPA</small>
              </div>
              <div className="flex gap-1">
                <small className="text-xs text-gray-500">
                  Ngawen, Kabupaten Blora
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
