import MainLayout from "../../layout/MainLayout"
import ServiceHero from "./ServiceHero"
import ServiceSection from "./ServiceSection"

const ServiceMainPage = () => {
    return (
        <div >
            <MainLayout>
                <ServiceHero />
                <ServiceSection/>
            </MainLayout>
        </div>
    )
}

export default ServiceMainPage
