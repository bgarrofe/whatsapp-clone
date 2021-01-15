import React from 'react'

export default function ListItem({ src }) {
    return (
        <button className="flex flex-row items-center h-18 bg-white focus:bg-gray-200 focus:outline-none">
            <div className="p-4 text-gray-600">
                {!src && <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                {src && <img className="w-12 h-12 rounded-full" src={src} alt="" srcset="" />}
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="font-normal">Grupo Lukinho</h4>
                    <p className="text-2xs font-thin text-gray-400 mr-4">18:27</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <h4 className="text-3xs text-gray-500">Mãe: bla bla bla</h4>
                    <div className="text-gray-300 mr-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>
        </button>
    )
}
