export default function ServicesSection() {
    return (
        <section id="services" className="min-h-screen flex flex-col gap-8 items-center justify-end px-6 md:px-20 lg:px-40">
            <div className="mt-8 md:mt-10 w-full flex flex-col md:flex-row gap-6 items-stretch justify-between ">

                <div className="flex flex-1 items-start p-4 bg-white rounded shadow-sm">
                    <img src="/images/service-confidential.png" alt="Confidential" className="w-16 h-16 md:w-20 md:h-20 mr-4" />
                    <div>
                        <h3 className="font-gilroyBold text-base md:text-lg">100% Confidential</h3>
                        <p className="text-xs md:text-sm text-gray-600">
                            Your privacy is our priority. All consultations, testing, and results are handled with complete discretion.
                        </p>
                    </div>
                </div>

                <div className="flex flex-1 items-start p-4 bg-white rounded shadow-sm">
                    <img src="/images/service-result.png" alt="Fast Results" className="w-16 h-16 md:w-20 md:h-20 mr-4" />
                    <div>
                        <h3 className="font-gilroyBold text-base md:text-lg">Results in 24–72 Hours</h3>
                        <p className="text-xs md:text-sm text-gray-600">
                            Fast, reliable lab testing with results delivered securely to your phone or email within 1–3 days.
                        </p>
                    </div>
                </div>

                <div className="flex flex-1 items-start p-4 bg-white rounded shadow-sm">
                    <img src="/images/service-pickup.png" alt="Home Pickup" className="w-16 h-16 md:w-20 md:h-20 mr-4" />
                    <div>
                        <h3 className="font-gilroyBold text-base md:text-lg">Home Sample Pickup</h3>
                        <p className="text-xs md:text-sm text-gray-600">
                            Our team comes to your home for consultation and testing.
                        </p>
                    </div>
                </div>

            </div>

            <div className="w-full h-[70%] flex flex-col md:flex-row">
                <div className="w-2/2 md:w-1/2 p-8 flex flex-col justify-center ">
                    <h2 className="text-5xl font-gilroyBlack mb-4 text-orange">
                        Our <br />
                        Health Services
                    </h2>

                    <p className="text-md text-menuFont mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        <br /> <br />
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    </p>

                    <button className="group relative flex items-center border border-orange bg-white text-white rounded-md overflow-hidden transition-all duration-300 pl-12 pr-6 py-3 w-fit">
                        <span className="absolute left-1 top-1 bottom-1 w-10 bg-orange text-white flex items-center justify-center rounded-md transition-all duration-300 group-hover:translate-x-[320%]">
                            ➔
                        </span>
                        <span className="ml-2 font-semibold text-gray-600 transition-all duration-300 group-hover:-translate-x-10">
                            Appointment
                        </span>
                    </button>
                </div>

                <div className="w-2/2 md:w-1/2 p-4 flex items-start justify-center overflow-hidden relative ">
                    <img
                        src="/images/service-main-image.png"
                        alt="Man and Woman"
                        className="relative top-24 md:top-40"
                    />
                </div>
            </div>
        </section>
    );
}
