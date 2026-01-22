import toast from 'react-hot-toast';
import { HiX } from 'react-icons/hi'; // Standard HeroIcon for closing

/**
 * Standardized Notification Helper
 * @param {string} type - 'success' | 'error' | 'loading'
 * @param {string} message - The text to display
 */

export const toastNotification = (type, message) => {
    if (type === 'success') {
        return toast.success(message, {
            duration: 4000, // Fades out automatically
            className: 'dark:bg-slate-800 dark:text-white',
        });
    }

    if (type === 'error') {
        return toast.error((t) => (
            <div className="flex items-center justify-between w-full min-w-[200px]">
                <span>{message}</span>
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="ml-4 p-1 rounded-full hover:bg-red-500/20 transition-colors"
                >
                    <HiX className="text-lg text-red-500" />
                </button>
            </div>
        ), {
            duration: Infinity, // Stays until clicked
            className: 'dark:bg-slate-800 dark:text-white border-l-4 border-red-500',
        });
    }
}