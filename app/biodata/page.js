"use client";

import React from "react";
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
        <br />
        Education Level: M.A. (Kamil)
        <br />
        Former Chamber: Jatrapur Bazar, Muradnagar, Cumilla.
      </>
    ),
  },
  { label: "Mother's Name", value: "Nilufa Akter (Home Maker)" },
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
  { label: "Address in Bangladesh", value: "(East) Jatrapur, Muradnagar, Cumilla." },
  { label: "Address in USA", value: "Los Angeles, California" },
  {
    label: "Contact Email",
    value: (
      <>
        kamrulhasanan@gmail.com
        <br />
        <span className="text-xs text-stone-500">
          (If you want to contact, please mention your full information.)
        </span>
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
    subject: "M.Sc. in Cybersecurity",
    board: "-",
    year: "2027 (Intended)",
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
    status: "Married & Home Maker",
    details: [
      "Education Level: B.Sc.",
      "Husband's Name: Md. Noruzzaman",
    ],
    sub: ["Profession: Civil Engineer at Narayanganj (Own business)."],
  },
  {
    name: "Md. Salauddin Amran",
    status: "Married & expatriate in Kuwait with family",
    details: [
      "Education Level: H.S.C.",
      "Wife's Name: Mukta Akter (Home Maker)",
    ],
    sub: ["Education Level: B.A. (Honours)"],
  },
  {
    name: "Md. Abdul Hannan",
    status: "Married & expatriate in Saudi Arabia",
    details: [
      "Education Level: H.S.C.",
      "Wife's Name: Sujina Akter (Home Maker)",
    ],
    sub: ["Education Level: H.S.C."],
  },
  {
    name: "Taslima Begum",
    status: "Married & Home Maker",
    details: [
      "Education Level: B.A.",
      "Husband's Name: Md. Kazi Kibria",
    ],
    sub: ["Profession: Sergeant, Bangladesh Army"],
  },
  {
    name: "Dr. Md. Abdul Mannan",
    status: "Married & Employed",
    details: [
      "Education Level: Bachelor of Homoeopathic Medicine and Surgery (BHMS) – Dhaka University",
      "Profession:",
    ],
    list: [
      "Lecturer at Tanzim Homeopathic College & Hospital, Narayanganj.",
      "Private Chamber at Jatrapur Bazar, Muradnagar, Cumilla.",
      "Private Chamber at Chittagong Road, Narayanganj.",
    ],
    sub: [
      "Wife's Name: Dr. Farzana Akter (Employed)",
      "Education Level: Bachelor of Dental Surgery (BDS)",
      "Provides dental services at a private hospital in Dhaka.",
    ],
    contact: "01925154790",
  },
  {
    name: "Tahmina Akter",
    status: "Married & Home Maker",
    details: [
      "Education Level: M.A. (Bengali)",
      "Husband's Name: Jonayed Bugdadi",
    ],
    sub: ["Profession: Business"],
  },
  {
    name: "Md. Kamrul Hasan",
    status: "Bridegroom",
    details: [],
    sub: [],
  },
];

const photos = ["/images/for_biodata/bio_1.jpg"];

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

  return (
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

          <button
            type="button"
            onClick= '/'
            className="shrink-0 rounded-sm bg-emerald-900 hover:bg-emerald-800 transition-colors text-white text-sm font-medium px-4 py-2 print:hidden"
          >
            Download 
          </button>
        </header>

        <div className="px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          {/* Photos column */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible">
            {photos.map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-28 md:w-full aspect-[3/4] bg-stone-200 border border-stone-300 overflow-hidden rounded-sm"
              >
                {/* Swap for next/image if desired:
                    <Image src={src} alt="Kamrul Hasan" fill className="object-cover" /> */}
                <img
                  src={src}
                  alt="Kamrul Hasan"
                  className="w-full h-full object-cover"
                />
              </div>
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
                    <p className="font-semibold text-emerald-900">
                      {i + 1}. {sib.name}{" "}
                      <span className="font-normal text-stone-500 text-sm">
                        ({sib.status})
                      </span>
                    </p>

                    {sib.details?.length > 0 && (
                      <ul className="mt-2 ml-4 list-disc text-sm text-stone-700 space-y-0.5">
                        {sib.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    )}

                    {sib.list?.length > 0 && (
                      <ol className="mt-1 ml-10 list-decimal text-sm text-stone-700 space-y-0.5">
                        {sib.list.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ol>
                    )}

                    {sib.sub?.length > 0 && (
                      <ul className="mt-2 ml-8 list-[circle] text-sm text-stone-600 space-y-0.5">
                        {sib.sub.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    )}

                    {sib.contact && ( <>
                        <ul className="mt-2 ml-8 list-[circle] text-sm text-stone-600 space-y-0.5">
                        {sib.sub.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                      <p className="mt-2 ml-4 text-sm text-stone-700">
                        Contact Number: {sib.contact}
                      </p>
                    </>
                       
                    )}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}