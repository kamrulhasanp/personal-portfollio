'use client'

import PasswordModal from "@/components/common/PasswordModal"
import { createRoot } from "react-dom/client"


// very simple, synchronous "popup" using window.prompt
export async function verifyPassword(options = {}) {
    const {
        message = 'Enter password to download:',
        correctPassword = process.env.NEXT_PUBLIC_CSUDH_PASSWORD
    } = options

    return new Promise((resolve) => {
        const div = document.createElement('div')
        document.body.appendChild(div)

        const root = createRoot(div)

        const cleanup = () => {
            root.unmount()
            div.remove()
        }

        const handleClose = () => {
            cleanup()
            resolve(false)
        }

        const handleSubmit = (inputPassword) => {
            const isValid = inputPassword === correctPassword
            cleanup()
            resolve(isValid)
        }

        root.render(
            <PasswordModal
                isOpen
                onClose={handleClose}
                onSubmit={handleSubmit}
            />
        )
    })
}
