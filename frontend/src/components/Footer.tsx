const Footer = () =>{
    return (
        <div className="bg-[#75002b] text-white py-4">
            <div className="container mx-auto flex flex-col justify-between items-center">
                    <p>Copyright ©2019 RAILMADAD. All Rights Reserved.</p>
                    <p className="flex gap-4">
                        <span  className="cursor-pointer">Home</span> {'|'}
                        <span  className="cursor-pointer">FAQs</span> {'|'}
                        <span  className="cursor-pointer">Railway Admin Login</span> {'|'}
                        <span  className="cursor-pointer">MIS Report Login</span>
                    </p>
            </div>
        </div>
    )
}

export default Footer