import React from 'react'

export default function HeaderBarChat() {
    return (
        <div className="flex flex-row flex-none justify-between h-14 p-2 items-center bg-gray-200 border-l border-gray-300 z-10">
            <div className="space-y-4 text-gray-500">
                <div className="flex flex-row items-center">
                    <button className="p-2 space-y-4 ml-2 text-gray-500 focus:outline-none focus:bg-gray-300 focus:rounded-full">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </button>
                    <div className="flex flex-col flex-grow ml-4">
                        <div className="flex flex-row justify-between items-center">
                            <h4 className="font-normal text-gray-700">Group Lukinho</h4>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <h4 className="text-2xs text-gray-500">Jane, June, Me</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between space-x-2 mr-2">
                <button className="p-2 text-gray-500 focus:outline-none focus:bg-gray-300 focus:rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
                </button>
                <button className="p-2 text-gray-500 focus:outline-none focus:bg-gray-300 focus:rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </button>
            </div>
        </div>
    )
}
