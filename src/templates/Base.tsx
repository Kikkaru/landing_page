import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Banner';
// import ContactForm from './ContactForm';
// import { Footer } from './Footer';
import { Hero } from './Hero';
// import { VerticalFeatures } from './VerticalFeatures';

// const OldBase = () => (
//   <div className="antialiased text-gray-600">
//     <Meta title={AppConfig.title} description={AppConfig.description} />
//     <Hero />
//     <VerticalFeatures />
//     <Banner />
//     <ContactForm />
//     <Footer />
//   </div>
// );

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
  </div>
);

export { Base };
