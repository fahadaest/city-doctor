import HomeSection from "../components/HomeSection"
import ServicesSection from "../components/ServicesSection"
import AppointmentBookingConfirmation from "../components/AppointmentBookingConfirmation"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="">
      <HomeSection />
      <ServicesSection />
      <AppointmentBookingConfirmation />
      <Footer />
    </div>
  )
}
