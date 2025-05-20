export default function HomeSection() {
    return (
        <section id="home" className="w-full bg-home-bg bg-cover bg-center h-[93vh] md:h-screen relative">
            <div className="absolute inset-0 px-0 md:px-10 py-0 flex flex-col md:flex-row gap-8">

                <div className="flex-1 flex flex-col justify-center gap-5 text-white order-1 mt-28 md:order-none ">
                    <div className="max-w-2xl mx-auto md:ml-28 flex flex-col gap-3">
                        <h1 className="text-[36px] md:text-[55px] leading-[42px] md:leading-[60px] font-normal font-gilroyBlack text-left">
                            Worried<br />
                            About an STD?
                        </h1>

                        <p className="text-[20px] md:text-[26px] leading-[28px] md:leading-[34px] font-gilroyBold text-left">
                            Get Peace of Mind from Home.
                        </p>

                        <p className="text-sm md:text-[15px] leading-[19px] mb-6 md:mb-12 font-normal text-left">
                            Our expert doctors provide judgment-free consultations <br />
                            and arrange discreet STD/STI testing at your doorstep <br />
                            –including treatment and follow-up guidance if needed.
                        </p>

                        <div className="flex flex-row justify-between gap-4 mb-8 max-w-xl">
                            <ul className="space-y-2 w-full sm:w-1/2">
                                <li className="relative pl-6 text-white text-xs md:text-sm">
                                    <span className="absolute left-0 top-1.5 w-3 h-3 bg-white rounded-full"></span>
                                    Lab Test at Your Home
                                </li>
                                <li className="relative pl-6 text-white text-xs md:text-sm">
                                    <span className="absolute left-0 top-1.5 w-3 h-3 bg-white rounded-full"></span>
                                    Results in 24–72 Hours
                                </li>
                            </ul>
                            <ul className="space-y-2 w-full sm:w-1/2">
                                <li className="relative pl-6 text-white text-xs md:text-sm">
                                    <span className="absolute left-0 top-1.5 w-3 h-3 bg-white rounded-full"></span>
                                    Trusted by 10,000+
                                </li>
                                <li className="relative pl-6 text-white text-xs md:text-sm">
                                    <span className="absolute left-0 top-1.5 w-3 h-3 bg-white rounded-full"></span>
                                    Home Visit in 30–45 Mins
                                </li>
                            </ul>
                        </div>

                        <div className="hidden md:flex py-2 w-full sm:w-[70%] bg-white rounded-[40px] items-center gap-3 px-2">
                            <div className="flex -space-x-3">
                                <img src="/images/avatar1.png" alt="avatar" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white" />
                                <img src="/images/avatar2.png" alt="avatar" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white" />
                                <img src="/images/avatar3.png" alt="avatar" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white" />
                                <img src="/images/avatar4.png" alt="avatar" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white" />
                            </div>
                            <p className="text-black text-sm md:text-md font-medium whitespace-nowrap">
                                TALK OVER 215
                            </p>
                        </div>

                        <div className="hidden md:flex items-center space-x-2 mt-4">
                            <div className="flex text-yellow-400 text-lg md:text-xl">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <span className="text-white text-sm md:text-base font-medium">
                                (4.9) 1000+ ratings on Google
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative order-2 md:order-none h-[400px] md:h-auto">
                    <img
                        src="/images/home-double-circle.png"
                        alt="Double Circle"
                        className="absolute bottom-0 left-0 md:left-1/2 w-full md:w-[550px] transform md:-translate-x-[70%]"
                    />
                    <img
                        src="/images/home-man-women.png"
                        alt="Man and Woman"
                        className="absolute bottom-0 left-0 md:left-1/2 w-full md:w-auto transform md:-translate-x-[60%]"
                    />
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center md:hidden h-[7vh] bg-white px-4">
                <a className="bg-orange text-white px-4 py-2 text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200 w-1/2 text-center mx-1 flex items-center justify-center gap-2">
                    <img src="/images/phone.png" alt="Call" className="w-5 h-5" />
                    Call Now
                </a>
                <a href="" className="bg-whatsappGreen text-white px-4 py-2 text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200 w-1/2 text-center mx-1 flex items-center justify-center gap-2">
                    <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                    Whatsapp
                </a>
            </div>
        </section>
    );
}