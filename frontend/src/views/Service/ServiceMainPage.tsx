import { HeadProvider, Title, Meta } from 'react-head';
import MainLayout from "../../layout/MainLayout"
import ServiceHero from "./ServiceHero"
import ServiceSection from "./ServiceSection"

const ServiceMainPage = () => {
    return (
      <div>
        <HeadProvider>
          <Title>
            IT Solutions & Software Development Services | Ziya Academy Kochi
          </Title>
          <Meta
            name="description"
            content="Ziya Academy provides professional IT solutions, web development, and software services in Kochi. Partner with our expert team for digital transformation, business websites, and application development."
          />
          <link rel="canonical" href="https://www.ziyaacademy.co.in/service" />
        </HeadProvider>

        <MainLayout>
          <ServiceHero />
          <ServiceSection />
        </MainLayout>
      </div>
    );
}

export default ServiceMainPage
