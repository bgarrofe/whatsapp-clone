import React from 'react'

export default function MessageList() {
    return (
        <div className="flex flex-col flex-auto overflow-y-auto scrollbar-w-2 scrollbar-track-white scrollbar-thumb-gray-lighter">
            <div className="flex px-14 flex-none m-1 max-w-3/4">
                <div className="flex flex-col p-2 bg-white rounded-r-lg rounded-bl-lg shadow">
                    <span className="w-1 h-1 text-white" style={{ 'left': '-16px', 'position': 'relative', 'top': '-8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                    </span>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-green-300 text-xs font-bold">Jane</div>
                        <div className="text-gray-300 ml-4">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                    <div className="flex flex-row items-end">
                        <p className="text-gray-500 text-sm">No! I'm tired of doing what you say.</p>
                        <span className="ml-4 text-xs text-gray-400 font-thin mt-2">19:32</span>
                    </div>
                </div>
            </div>
            <div className="flex px-14 flex-none m-1 max-w-3/4">
                <div className="flex flex-col p-2 bg-white rounded-lg shadow">
                    <div className="flex flex-row items-end">
                        <p className="text-gray-500 text-sm">Oh my God. You're in love with her.</p>
                        <span className="ml-4 text-xs text-gray-400 font-thin mt-2">19:32</span>
                    </div>
                </div>
            </div>
            <div className="flex px-14 flex-none m-1 max-w-3/4">
                <div className="flex flex-col p-2 bg-white rounded-lg shadow">
                    <div className="flex flex-row items-end">
                        <p className="text-gray-500 text-sm">:-/</p>
                        <span className="ml-4 text-xs text-gray-400 font-thin mt-2">19:32</span>
                    </div>
                </div>
            </div>
            <div className="flex px-14 flex-none m-1 max-w-3/4">
                <div className="flex flex-col p-2 bg-white rounded-r-lg rounded-bl-lg shadow">
                    <span className="w-1 h-1 text-white" style={{ 'left': '-16px', 'position': 'relative', 'top': '-8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                    </span>
                    <div className="text-blue-300 text-xs font-bold">June</div>
                    <span className="flex flex-row text-gray-400 text-xs">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.519 3.875a.54.54 0 0 1 .922-.382l4.03 4.034a.54.54 0 0 1 0 .764l-4.03 4.034a.54.54 0 0 1-.922-.383v-1.821c-3.398 0-5.886.97-7.736 3.074-.164.186-.468.028-.402-.211.954-3.449 3.284-6.67 8.138-7.363V3.875z" fill="currentColor"></path></svg>
                        <span className="italic ml-1">
                            Encaminhada
                            </span>
                    </span>
                    <div className="flex flex-row items-end">
                        <p className="text-gray-500 text-sm">Good morning! <br /> Midnight, on the bridge. Come alone.</p>
                        <span className="ml-4 text-xs text-gray-400 font-thin mt-2">19:34</span>
                    </div>
                </div>
            </div>
            <div className="flex px-14 flex-none m-1 max-w-3/4">
                <div className="flex flex-col p-2 bg-white rounded-r-lg rounded-bl-lg shadow">
                    <span className="w-1 h-1 text-white" style={{ 'left': '-16px', 'position': 'relative', 'top': '-8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                    </span>
                    <div className="text-green-300 text-xs font-bold">Jane</div>
                    <span className="flex flex-row text-gray-400 text-xs">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.519 3.875a.54.54 0 0 1 .922-.382l4.03 4.034a.54.54 0 0 1 0 .764l-4.03 4.034a.54.54 0 0 1-.922-.383v-1.821c-3.398 0-5.886.97-7.736 3.074-.164.186-.468.028-.402-.211.954-3.449 3.284-6.67 8.138-7.363V3.875z" fill="currentColor"></path></svg>
                        <span className="italic ml-1">
                            Encaminhada
                            </span>
                    </span>
                    <div className="flex flex-row items-end">
                        <p className="text-gray-500 text-sm">This isn't just about you. It's about what's best for all of us. </p>
                        <span className="ml-4 text-xs text-gray-400 font-thin mt-2">19:35</span>
                    </div>
                </div>
            </div>
            <div className="flex px-14 flex-none m-1 max-w-3/4">
                <div className="flex flex-col p-2 bg-white rounded-lg shadow">
                    <div className="flex flex-row items-end">
                        <p className="text-gray-500 text-sm">You were always the quiet one.</p>
                        <span className="ml-4 text-xs text-gray-400 font-thin mt-2">19:35</span>
                    </div>
                </div>
            </div>
            <div className="flex px-14 flex-none m-1 max-w-3/4">
                <div className="flex flex-col p-2 bg-white rounded-r-lg rounded-bl-lg shadow">
                    <span className="w-1 h-1 text-white" style={{ 'left': '-16px', 'position': 'relative', 'top': '-8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                    </span>
                    <div className="text-blue-300 text-xs font-bold">June</div>
                    <div className="flex flex-row items-end">
                        <p className="text-gray-500 text-sm">That's fine.</p>
                        <span className="ml-4 text-xs text-gray-400 font-thin mt-2">19:37</span>
                    </div>
                </div>
            </div>
            <div className="flex px-14 flex-none m-1 max-w-3/4">
                <div className="flex flex-col p-2 bg-white rounded-r-lg rounded-bl-lg shadow">
                    <span className="w-1 h-1 text-white" style={{ 'left': '-16px', 'position': 'relative', 'top': '-8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                    </span>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-green-300 text-xs font-bold">Jane</div>
                        <div className="text-gray-300 ml-4">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                    <div className="flex flex-row items-end">
                        <p className="text-gray-500 text-sm">You think I'm being paranoid but the truth is I'm worth a lot more to her dead than alive.</p>
                        <span className="ml-4 text-xs text-gray-400 font-thin mt-2">19:39</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
