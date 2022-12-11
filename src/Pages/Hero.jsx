const Hero = () => {
    return (
        <header
            className="relative bg-gray-200 w-full h-[1024px] overflow-hidden text-left text-base text-white font-ibm-plex-sans"
            id="Header"
        >
            <div
                className="absolute top-[0px] left-[766px] w-[674px] h-[786px]"
                id="Header Right"
            >
                <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[674px] h-[545px]" />
                <img
                    className="absolute top-[170px] left-[70px] rounded-[20px] w-[462px] h-[616px] object-cover"
                    alt=""
                    src="../my-pic@2x.png"
                />
            </div>
            <div
                className="absolute top-[153px] left-[149px] w-[631px] h-[566px]"
                id="Header Left"
            >
                <div className="absolute top-[0px] left-[0px] text-[100px] font-semibold inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">Ashik</p>
                    <p className="[margin-block-start:0] [margin-block-end:0px]">
                        MERN Stack
                    </p>
                    <p className="m-[0]">Developer</p>
                </div>
                <div className="absolute top-[409px] left-[0px] tracking-[0.02em] inline-block w-[631px]">
                    Whereas recognition of the inherent dignityWhereas recognition of the
                    inherent dignityWhereas recognition of the inherent dignityWhereas
                    recognition of the inherent dignity
                </div>
                <div className="absolute top-[541px] left-[0px] flex flex-row items-center justify-center gap-[12px] text-tan font-lexend-deca">
                    <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block">
                        Download Resume
                    </a>
                    <img
                        className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                        alt=""
                        src="../typcnarrowright.svg"
                    />
                </div>
            </div>
        </header>
    );
};

export default Hero;
