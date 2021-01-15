import React from 'react'

export default function MainContentBlank() {
    return (
        <div className="flex-auto bg-gray-50">
            <div className="flex flex-col flex-grow place-items-center" >
                <div className="p-4 mt-10">
                    <img src="/intro-connection-light.jpg" width="250" height="250" alt="" srcset="" />
                </div>
                <div className="flex flex-col m-4 items-center w-3/5 text-center border-b border-gray-200 pb-8">
                    <h2 className="text-3xl font-thin text-gray-500">Mantenha seu celular conectado</h2>
                    <p className="mt-4 text-sm text-gray-400">O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. <br /> Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</p>
                </div>
                <div className="flex flex-row items-center mt-6 text-sm text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 18" width="21" height="18"><path fill="currentColor" d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z"></path></svg>
                    <p className="ml-2">O WhatsApp está disponível para Windows.</p>
                    <a className="text-green-500 ml-2" href="https://www.whatsapp.com/download" target="_blank">Obtenha-o aqui</a>
                </div>
            </div>
        </div>
    )
}
