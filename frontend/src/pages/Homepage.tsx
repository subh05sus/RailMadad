import LeftLinkButtons from "@/components/leftLinkButtons"
import Sidebar from "@/components/Sidebar"

function Homepage() {
    return (
        <div
            className="home bg-cover bg-center h-screen w-full px-4"
            style={{ backgroundImage: 'url("bgRailway.jpeg")' }}
        >
            <div className="flex portrait:flex-col-reverse landscape:p-24">
                <div className="landscape:w-1/2 ">
                    <LeftLinkButtons />
                </div>
                <div className="landscape:w-1/2">
                <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default Homepage