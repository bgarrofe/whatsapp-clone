import React from 'react'

export default function ListItem({ received, title, message, src }) {
    return (
        <button className="flex flex-row items-center h-18 bg-white focus:bg-gray-200 focus:outline-none">
            <div className="p-4 text-gray-600">
                {!src && <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                {src && <img className="w-12 h-12 rounded-full" src={src} alt="" srcset="" />}
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="font-normal">{title}</h4>
                    <p className="text-2xs font-thin text-gray-400 mr-4">18:27</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-start">
                        {received && <svg className="text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>}
                        <h4 className="text-3xs text-gray-500">{message}</h4>
                    </div>
                    <div className="text-gray-300 mr-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>
        </button>
    )
}
