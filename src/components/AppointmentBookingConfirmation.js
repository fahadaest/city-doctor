import React from 'react';

const AppointmentBookingConfirmation = () => {
    return (
        <div className="flex flex-col md:flex-row w-full md:px-40 p-2 md:gap-10 bg-orange">
            <div className="w-full md:w-1/4 rounded-lg p-6 flex flex-col items-center">
                <div className="flex -space-x-4 mb-4">
                    <img src="/images/avatar1.png" alt="avatar1" className="w-12 h-12 rounded-full border-1 border-white" />
                    <img src="/images/avatar2.png" alt="avatar2" className="w-12 h-12 rounded-full border-1 border-white" />
                    <img src="/images/avatar3.png" alt="avatar3" className="w-12 h-12 rounded-full border-1 border-white" />
                    <img src="/images/avatar4.png" alt="avatar4" className="w-12 h-12 rounded-full border-1 border-white" />
                </div>

                <p className="text-center font-gilroySemiBold text-white text-lg">
                    300+ Appointment Booking Confirm for this Week
                </p>
            </div>

            <div className="md:w-3/4 mb-5 rounded-lg md:p-6 grid grid-cols-3 gap-4 text-center ">
                <div className=" text-white md:p-4 rounded-md flex flex-col items-center">
                    <span className="text-4xl md:text-6xl font-gilroyBold">20+</span>
                    <span className="text-md text-white font-gilroySemiBold mt-1">Specialists</span>
                </div>
                <div className=" text-white md:p-4 rounded-md flex flex-col items-center">
                    <span className="text-4xl md:text-6xl font-gilroyBold">100+</span>
                    <span className="text-md text-white font-gilroySemiBold mt-1">Services</span>
                </div>
                <div className=" text-white md:p-4 rounded-md flex flex-col items-center">
                    <span className="text-4xl md:text-6xl font-gilroyBold">10K+</span>
                    <span className="text-md text-white font-gilroySemiBold mt-1">Happy Patients</span>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBookingConfirmation;
