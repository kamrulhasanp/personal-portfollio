'use client'

import React, { useState } from 'react'
import ButtonWithDesign from './ButtonWithDesign'

export default function PasswordModal({ isOpen, onClose, onSubmit }) {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    if (!isOpen) return null

    const handleSubmit = () => {
        if (!password.trim()) {
            setError('Password is required')
            return
        }
        onSubmit(password)
        setPassword('')
        setError('')
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="
            w-full max-w-sm rounded-xl p-6 shadow-xl
            bg-white text-gray-900
            dark:bg-gray-900 dark:text-gray-100
            ">
                <h2 className="text-lg font-semibold mb-4">Protected Download</h2>

                <input
                    type="password"
                    placeholder="Enter password"
                    autoFocus
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit()
                        }
                    }}
                    className="
                        w-full rounded-lg border px-3 py-2
                        bg-white text-gray-900 border-gray-300
                        placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-yellow-500
                        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                        dark:placeholder-gray-400"
                />

                {error && (
                    <p className="mt-2 text-sm text-red-500">
                        {error}
                    </p>
                )}
                <div className="mt-5 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                        Cancel
                    </button>

                    <ButtonWithDesign text='Confirm' onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}
