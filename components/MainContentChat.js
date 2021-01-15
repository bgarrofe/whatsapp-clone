import autoprefixer from 'autoprefixer'
import React from 'react'
import HeaderBarChat from '../components/HeaderBarChat'
import MessageList from '../components/MessageList'
import MessageBar from '../components/MessageBar'

export default function MainContentChat() {
    return (
        <div className="hero flex flex-col flex-grow bg-chat z-0">
            <style jsx>{`
                .hero::before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    background-image: url('/chat-background.png');
                    opacity: 0.06;
                    z-index: -1;
                }
            `}</style>
            <HeaderBarChat />
            <MessageList />
            <MessageBar />
        </div>
    )
}
