import Head from 'next/head'
import ListItem from '../components/ListItem'
import HeaderBar from '../components/HeaderBar'
import NotificationBar from '../components/NotificationBar'
import SearchBar from '../components/SearchBar'
import MainContentBlank from '../components/MainContentBlank'
import HeaderBarChat from '../components/HeaderBarChat'
import MessageList from '../components/MessageList'
import MessageBar from '../components/MessageBar'

export default function Home() {
    return (
        <div>
            <Head>
                <title>(1) WhatsApp</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-row h-screen">

                {/* SideBar Content */}

                <div className="flex flex-col w-2/6">
                    <div className="flex-none bg-gray-200 z-10">
                        <HeaderBar />
                        <NotificationBar />
                        <SearchBar />
                    </div>
                    <div className="flex-auto overflow-y-auto z-10 scrollbar-w-2 scrollbar-track-white scrollbar-thumb-gray-lighter">
                        <div className="flex flex-col divide-y ">
                            <ListItem src="avatar1.jpg" />
                            <ListItem src="avatar2.jpg" />
                            <ListItem src="avatar3.jpg" />
                            <ListItem src="avatar4.jpg" />
                            <ListItem src="avatar5.jpg" />
                            <ListItem src="avatar6.jpg" />
                            <ListItem src="avatar1.jpg" />
                            <ListItem src="avatar2.jpg" />
                            <ListItem src="avatar3.jpg" />
                            <ListItem src="avatar4.jpg" />
                            <ListItem src="avatar5.jpg" />
                            <ListItem src="avatar6.jpg" />
                        </div>
                    </div>
                </div>

                {/* Main Content */}

                {/* <MainContentBlank /> */}
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
            </div>
        </div >
    )
}
