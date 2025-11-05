import { Helmet } from "react-helmet-async";
import MainLayout from "../../layout/MainLayout"
import ServiceHero from "./ServiceHero"
import ServiceSection from "./ServiceSection"

const ServiceMainPage = () => {
    return (
      <div>
        <Helmet>
          <title>
            IT Solutions & Software Development Services | Ziya Academy Kochi
          </title>
          <meta
            name="description"
            content="Ziya Academy provides professional IT solutions, web development, and software services in Kochi. Partner with our expert team for digital transformation, business websites, and application development."
          />
          <link rel="canonical" href="https://www.ziyaacademy.co.in/service" />
        </Helmet>

        <MainLayout>
          <ServiceHero />
          <ServiceSection />
        </MainLayout>
      </div>
    );
}

export default ServiceMainPage
