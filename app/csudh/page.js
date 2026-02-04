'use client'

import React, { useMemo, useState } from 'react'
import { downloadFile } from '@/lib/downloadFile'
import { toastNotification } from '@/lib/toastNotification'
import ButtonWithDesign from '@/components/common/ButtonWithDesign'
import { verifyPassword } from '@/lib/passwordCheck'

export default function Csudh() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const filesByCourse = useMemo(() => ({
    CYB_528: [
      { name: 'ARP-Communication', url: '/csudh/cby_528/ARP-Communication.pdf' },
      { name: 'ARP-Communication-2.pdf', url: '/csudh/cby_528/ARP-Communication-2.pdf' },
    ],
    CYB_551: [
      { name: 'Project.docx', url: '/csudh/cby_551/ARP Communication.pdf' },
      { name: 'Lab-01.pdf', url: '/csudh/cby_551/ARP Communication 2.pdf' },
    ],
    CYB_555: [
      { name: 'Lecture-01.pdf', url: '/csudh/cby_555/ARP Communication.pdf' },
      { name: 'Assignment-01.pdf', url: '/csudh/cby_555/ARP Communication 2.pdf' },
      { name: 'Assignment-01.pdf', url: '/csudh/cby_555/ARP Communication 3.pdf' },
    ],
  }), [])

  const courses = useMemo(() => ([
    {
      id: 'CYB_528',
      label: 'CYB 528',
      files: [
        { name: 'ARP-Communication.pdf', url: '/csudh/cby_528/ARP-Communication.pdf' },
        { name: 'ARP-Communication-2.pdf', url: '/csudh/cby_528/ARP-Communication-2.pdf' },
      ],
    },
    {
      id: 'CYB_551',
      label: 'CYB 551',
      files: [
        // { name: 'ARP Communication.pdf', url: '/csudh/cby_551/ARP%20Communication.pdf' },
        // { name: 'ARP Communication 2.pdf', url: '/csudh/cby_551/ARP%20Communication%202.pdf' },
      ],
    },
    {
      id: 'CYB_555',
      label: 'CYB 555',
      files: [
        // { name: 'ARP Communication.pdf', url: '/csudh/cby_555/ARP%20Communication.pdf' },
        // { name: 'ARP Communication 2.pdf', url: '/csudh/cby_555/ARP%20Communication%202.pdf' },
        // { name: 'ARP Communication 3.pdf', url: '/csudh/cby_555/ARP%20Communication%203.pdf' },
      ],
    },
  ]), [])

  // const selectedFiles = selectedCourse ? filesByCourse[selectedCourse] ?? [] : []

  const selected = courses.find(c => c.id === selectedCourse)
  const selectedFiles = selected?.files ?? []


  return (
    <div className='flex-col'>
      <div className='flex gap-6 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8'>
        {courses.map(course => (
          <ButtonWithDesign
            key={course.id}
            text={course.label}
            onClick={() => setSelectedCourse(course.id)}
            className={selectedCourse === course.id ? 'ring-2 ring-yellow-500' : ''}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8">
        {!selectedCourse ? (
          <div className="text-gray-500">Click a course to view files.</div>
        ) : (
          <div className="rounded-xl border p-5">
            <h2 className="text-lg font-semibold mb-3">Files for {selected?.label}</h2>

            {selectedFiles.length === 0 ? (
              <div className="text-gray-500">No files found.</div>
            ) : (
              <ul className="list-disc pl-5 space-y-2">
                {selectedFiles.map((f) => (
                  <li key={f.url}>
                    <button
                      className="text-blue-600 hover:cursor-pointer"
                      onClick={async () => {
                        try {
                          const ok = await verifyPassword()
        
                          if (!ok) {
                            toastNotification('error', 'Wrong password')
                            return
                          }
        
                          await downloadFile(f.url, f.name)
                          toastNotification('success', 'Downloaded')
                        } catch (err) {
                          console.error(err)
                          toastNotification('error', 'Download failed')
                        }
                      }}
                    >
                      {f.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>

  )
}
