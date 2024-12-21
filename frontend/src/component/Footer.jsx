const Footer = () => {
    return (
        <footer className="w-full h-30 bg-[#3C4DC2] flex flex-col items-center justify-evenly text-white font-medium text-lg font-montserrat mt-4">
            <div className="flex m-3 space-x-6">
                <a href="https://www.instagram.com/cig_iitr/">
                    <img
                        src="./src/assets/insta.png"
                        alt="Instagram"
                        className="transition-opacity rounded-full bg-white duration-100 hover:opacity-50"
                    />
                </a>
                <a href="https://www.linkedin.com/in/cig-iitroorkee">
                    <img
                        src="./src/assets/linkedin.png"
                        alt="Linkedin"
                        className="transition-opacity bg-white rounded-full duration-100 hover:opacity-50"
                    />
                </a>
                <a href="https://www.facebook.com/cig.iitroorkee">
                    <img
                        src="./src/assets/facebook.png"
                        alt="Facebook"
                        className="transition-opacity bg-white rounded-full duration-100 hover:opacity-50"
                    />
                </a>
                <a href="https://x.com/cig_iitr">
                    <img
                        src="./src/assets/x.png"
                        alt="X"
                        className="transition-opacity bg-white rounded-full duration-100 hover:opacity-50"
                    />
                </a>
            </div>
            <div className="mb-2">
                <p>Designed and Developed by Team CIG</p>
            </div>
            <div className="mb-3">
                <p>© CIG, IIT Roorkee. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer