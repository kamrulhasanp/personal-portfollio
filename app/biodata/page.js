"use client";

import React, { useState, useEffect } from "react";

import Contact from '@/components/Contact';

/**
 * ---------------------------------------------------------------------------
 * DATA
 * Keeping the content in arrays/objects makes it trivial to edit later
 * without touching markup, and keeps the JSX clean and readable.
 * ---------------------------------------------------------------------------
 */

const personal = [
  { label: "Name", value: "MD KAMRUL HASAN" },
  {
    label: "Father's Name",
    value: (
      <>
        Late Dr. Md. Alauddin Munshi (Muhammad Doctor)
        <ul>
          <li>Education Level: M.A. (Kamil)</li>
          <li>Former Chamber: Jatrapur Bazar, Muradnagar, Cumilla.</li>
        </ul>
      </>
    ),
  },
  { label: "Mother's Name", value: "Nilufa Akter (Homemaker)" },
  { label: "Grandfather", value: "Late Safor Ali Munshi" },
  {
    label: "Date of Birth",
    value: (
      <>
        1<sup>st</sup> October 1997
      </>
    ),
  },
  { label: "Height", value: "5 feet 6 inches" },
  { label: "Weight", value: "68 kg" },
  { label: "Blood Group", value: "B+" },
  { label: "Permanent Address", value: "(East) Jatrapur, Muradnagar, Cumilla." },
  { label: "Present Address", value: "Los Angeles, California" },
  { label: "Occupation", value: "Full-time Graduate Student" },
  {
    label: "Email",
    value: (
      <>
        kamrulhasanan@gmail.com
      </>
    ),
  },
];

const education = [
  {
    level: "S.S.C. / Dakhil",
    institute: "Narayanganj Islamia Fazil Madrasha, Narayanganj.",
    subject: "Science",
    board: "Madrasah",
    year: "2012",
    country: "Bangladesh",
  },
  {
    level: "H.S.C.",
    institute: "Govt. Tolaram College, Narayanganj.",
    subject: "Science",
    board: "Dhaka",
    year: "2014",
    country: "Bangladesh",
  },
  {
    level: "B.Sc.",
    institute: "Daffodil International University",
    subject: "B.Sc. in Software Engineering",
    board: "-",
    year: "2019",
    country: "Bangladesh",
  },
  {
    level: "Diploma",
    institute: "Toyo International Culture Academy",
    subject: "Japanese Language & Culture",
    board: "-",
    year: "2022",
    country: "Japan",
  },
  {
    level: "M.Sc.",
    institute: "California State University",
    subject: "M.S. in Cybersecurity",
    board: "-",
    year: (
      <>
        2027
        <br className="block sm:hidden" />
        (Expected)
      </>
    ),
    country: "USA",
  },
];

const profession = [
  {
    role: "Denary Computing Ltd.",
    location: "Bangladesh",
    period: "2019 – 2020",
    link: "https://denarycomputing.com",
  },
  {
    role: "Software Developer, Sakurabo Co. Ltd.",
    location: "Japan",
    period: "2023 – 2025",
    link: "https://www.sakurabo.co.jp",
  },
];

const siblings = [
    {
      name: "Hazera Begum",
      status: "Married & Homemaker",
      details: [
        { text: "Education Level: B.Sc." },
        { text: "Husband's Name: Md. Noruzzaman", sub: ["Profession: Civil Engineer at Narayanganj (Business Owner)."] },
      ],
    },
    {
      name: "Md. Salauddin Amran",
      status: "Married & expatriate in Kuwait with family",
      details: [
        { text: "Education Level: H.S.C." },
        { text: "Wife's Name: Mukta Akter (Homemaker)", sub: ["Education Level: B.A. (Honours)"] },
      ],
    },
    {
      name: "Md. Abdul Hannan",
      status: "Married & expatriate in Saudi Arabia",
      details: [
        { text: "Education Level: H.S.C." },
        { text: "Wife's Name: Sujina Akter (Homemaker)", sub: ["Education Level: H.S.C."] },
      ],
    },
    {
      name: "Taslima Begum",
      status: "Married & Homemaker",
      details: [
        { text: "Education Level: B.A." },
        { text: "Husband's Name: Md. Kazi Kibria", sub: ["Profession: Sergeant at Bangladesh Army"] },
      ],
    },
    {
      name: "Dr. Md. Abdul Mannan",
      status: "Married & Employed",
      details: [
        { text: "Education Level: Bachelor of Homoeopathic Medicine and Surgery (BHMS) – Dhaka University" },
        {
          text: "Profession:",
          numberedList: [
            "Lecturer at Tanzim Homeopathic College & Hospital, Narayanganj.",
            "Private Chamber at Jatrapur Bazar, Muradnagar, Cumilla.",
            "Private Chamber at Chittagong Road, Narayanganj.",
          ],
        },
        {
          text: "Wife's Name: Dr. Farzana Akter (Employed)",
          sub: [
            "Education Level: Bachelor of Dental Surgery (BDS)",
            "Provides dental services at a private hospital in Dhaka.",
          ],
        },
        { text: "Contact Number: 01925154790" },
      ],
    },
    {
      name: "Tahmina Akter",
      status: "Married & Homemaker",
      details: [
        { text: "Education Level: M.A. (Bengali)" },
        { text: "Husband's Name: Jonayed Bugdadi", sub: ["Profession: Business Owner"] },
      ],
    },
    {
      name: "Md. Kamrul Hasan",
      status: "Groom",
      details: [],
    },
  ];

const photos = ["/images/for_biodata/Kamrul_H.jpg", "/images/for_biodata/Kamrul_2.jpg", "/images/for_biodata/Kamrul_F.jpg", "/images/for_biodata/Kamrul_T.jpg"];

/**
 * ---------------------------------------------------------------------------
 * SMALL PRESENTATIONAL HELPERS
 * ---------------------------------------------------------------------------
 */

function SectionHeading({ children }) {
  return (
    <h2 className="font-serif text-xl tracking-wide text-emerald-900 border-b-2 border-amber-600/60 pb-2 mb-4">
      {children}
    </h2>
  );
}

function PersonalRow({ label, value }) {
  return (
    <div className="grid grid-cols-[150px_16px_1fr] sm:grid-cols-[180px_16px_1fr] py-1.5 text-sm sm:text-[15px]">
      <dt className="font-medium text-stone-600">{label}</dt>
      <dd className="text-stone-400">:</dd>
      <dd className="text-stone-800 leading-relaxed">{value}</dd>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * MAIN COMPONENT
 * ---------------------------------------------------------------------------
 */

export default function Biodata() {
    const [lightbox, setLightbox] = useState(null); // null | { src, index }

      // Close lightbox on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
 
  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
         {/* ── Lightbox ─────────────────────────────────────────────────── */}
         {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-emerald-900 text-white text-sm">
              <span>Photo {lightbox.index + 1} of {photos.length}</span>
              <div className="flex gap-3">
                {/* Download image */}
                <a
                  href={lightbox.src}
                  download
                  className="flex items-center gap-1 hover:text-amber-300 transition-colors"
                  title="Download image"
                >
                  {/* Download icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                  </svg>
                  Download
                </a>
                {/* Close */}
                <button
                  onClick={() => setLightbox(null)}
                  className="hover:text-amber-300 transition-colors"
                  title="Close (Esc)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
 
            {/* Image */}
            <img
              src={lightbox.src}
              alt="Kamrul Hasan"
              className="w-full object-contain max-h-[80vh]"
            />
 
            {/* Prev / Next if multiple photos */}
            {photos.length > 1 && (
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 pointer-events-none">
                <button
                  className="pointer-events-auto bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => setLightbox({ src: photos[(lightbox.index - 1 + photos.length) % photos.length], index: (lightbox.index - 1 + photos.length) % photos.length })}
                >‹</button>
                <button
                  className="pointer-events-auto bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => setLightbox({ src: photos[(lightbox.index + 1) % photos.length], index: (lightbox.index + 1) % photos.length })}
                >›</button>
              </div>
            )}
          </div>
        </div>
      )}
   
    <div className="min-h-screen bg-stone-100 py-6 px-3 sm:py-10 sm:px-6 print:bg-white print:py-0">
      <div className="mx-auto max-w-5xl bg-[#fbf8f1] shadow-sm border border-stone-200 rounded-sm print:border-0 print:shadow-none">
        {/* Header band */}
        <header className="relative border-b-4 border-emerald-900 px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between gap-4 print:hidden-actions">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-amber-700 mb-1">
              Personal Bio-data
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl text-emerald-950">
              Kamrul Hasan
            </h1>
          </div>
          <a
              href="/images/for_biodata/Bio_of_Kamrul_Hasan.pdf"
              download="Bio_of_Kamrul_Hasan.pdf"
              className="shrink-0 rounded-sm bg-emerald-900 hover:bg-emerald-800 transition-colors text-white text-sm font-medium px-4 py-2 print:hidden flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download
          </a>
        </header>

        <div className="px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          {/* Photos column — click any photo to open lightbox */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible">
            {photos.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox({ src, index: i })}
                className="shrink-0 w-28 md:w-full aspect-[3/4] bg-stone-200 border border-stone-300 overflow-hidden rounded-sm cursor-zoom-in group relative focus:outline-none focus:ring-2 focus:ring-emerald-700"
                title="Click to enlarge"
              >
                <img
                  src={src}
                  alt="Kamrul Hasan"
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                {/* Zoom hint that appears on hover */}
                <span className="absolute inset-0 flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] bg-black/50 text-white px-2 py-0.5 rounded-full">
                    Click to enlarge
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Main content column */}
          <div className="space-y-10">
            {/* Personal Information */}
            <section>
              <SectionHeading>Personal Information</SectionHeading>
              <dl className="divide-y divide-stone-200">
                {personal.map((row) => (
                  <PersonalRow key={row.label} label={row.label} value={row.value} />
                ))}
              </dl>
            </section>

            {/* Education */}
            <section>
              <SectionHeading>Education</SectionHeading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-stone-200">
                  <thead>
                    <tr className="bg-emerald-900 text-white text-left">
                      <th className="px-3 py-2 font-medium">Level</th>
                      <th className="px-3 py-2 font-medium">Institute</th>
                      <th className="px-3 py-2 font-medium hidden sm:table-cell">
                        Group / Subject
                      </th>
                      <th className="px-3 py-2 font-medium hidden md:table-cell">Board</th>
                      <th className="px-3 py-2 font-medium">Year</th>
                      <th className="px-3 py-2 font-medium hidden md:table-cell">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((row, i) => (
                      <tr
                        key={row.level}
                        className={i % 2 ? "bg-stone-50" : "bg-white"}
                      >
                        <td className="px-3 py-2 font-semibold text-emerald-900 whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="px-3 py-2 text-stone-800">{row.institute}</td>
                        <td className="px-3 py-2 text-stone-800 hidden sm:table-cell">{row.subject}</td>
                        <td className="px-3 py-2 text-stone-800 hidden md:table-cell">{row.board}</td>
                        <td className="px-3 py-2 text-stone-800 whitespace-nowrap">{row.year}</td>
                        <td className="px-3 py-2 text-stone-800 hidden md:table-cell">{row.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
             
            </section>

            {/* Profession */}
            <section>
              <SectionHeading>Profession</SectionHeading>
              <ol className="space-y-2 list-decimal list-inside text-sm text-stone-800">
                {profession.map((job) => (
                  <li key={job.role}>
                    {job.role} — {job.location} ({job.period}){" "}
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-800 underline-offset-2 hover:underline"
                    >
                      {job.link.replace("https://", "")}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            {/* Siblings */}
            <section>
              <SectionHeading>Siblings Details</SectionHeading>
              <p className="text-sm text-stone-500 mb-4">(We are four brothers & three sisters)</p>
 
              <ol className="space-y-5">
                {siblings.map((sib, i) => (
                  <li
                    key={sib.name}
                    className="border border-stone-200 rounded-sm bg-white p-4"
                  >
                    {/* Name + status */}
                    <p className="font-semibold text-emerald-900">
                      {i + 1}. {sib.name}{" "}
                      <span className="font-normal text-stone-500 text-sm">
                        ({sib.status})
                      </span>
                    </p>
 
                    {/* Details: each item is a bullet, with optional sub-items and/or numbered list */}
                    {sib.details?.length > 0 && (
                      <ul className="mt-2 ml-4 list-disc text-sm text-stone-700 space-y-1">
                        {sib.details.map((item) => (
                          <li key={item.text}>
                            {item.text}
 
                            {/* Numbered sub-list (e.g. Dr. Mannan's professions) */}
                            {item.numberedList?.length > 0 && (
                              <ol className="mt-1 ml-4 list-decimal text-stone-600 space-y-0.5">
                                {item.numberedList.map((entry) => (
                                  <li key={entry}>{entry}</li>
                                ))}
                              </ol>
                            )}
 
                            {/* Starred sub-items (e.g. spouse's education/profession) */}
                            {item.sub?.length > 0 && (
                              <ul className="mt-1 ml-4 list-[circle] text-stone-500 space-y-0.5">
                                {item.sub.map((s) => (
                                  <li key={s}>{s}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
         {/* ── Footer strip ─────────────────────────────────────────────── */}
         <footer className="border-t-2 border-amber-600/40 px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div>
            <p className="font-medium text-sm text-stone-800">Interested in connecting?</p>
            
          </div>
          <a
            href="https://www.kamrulhasanp.com/contact"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-sm bg-emerald-900 hover:bg-emerald-800 transition-colors text-white text-sm font-medium px-5 py-2.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact me
          </a>
        </footer>
      </div>
    </div>
     </>
  );
}