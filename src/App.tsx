import "./App.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Challenges from "./pages/Challenges";
import heart from "./assets/heart.svg";
import arrowdown from "./assets/arrowdown.svg";
import insures from "./assets/insures.svg";
import pluscircle from "./assets/pluscircle.svg";
import searchplus from "./assets/searchplus.svg";
import Hospital from "./pages/Hospital";
import AboutUs from "./pages/AboutUs";
import SponsorCarousel from "./pages/SponsorCarousel";
import MobileNav from "./components/MobileNav";
import PrivacySecurity from './components/PrivacySecurity';
import SecurityPriority from './components/SecurityPriority';
import ProductShowcase from './components/ProductShowcase';
import TrustedNationwide from './components/TrustedNationwide';
import TestimonialCarousel from './components/TestimonialCarousel';
import Footersection from "./components/Footersection";
const challengeData = [
  {
    heading: "Low Employee Adoption of Health Benefits",
    content:
      "Most employees underuse health benefits due to fragmented providers, lack of visibility, and confusing claim flows.",
    icon: heart,
  },
  {
    heading: "Manual Camp Coordination & Poor Tracking",
    content:
      "Organizing wellness camps is often chaotic, with zero digital tracking or HR dashboards.",
    icon: searchplus,
  },
  {
    heading: "Poor Data for Wellness ROI",
    content:
      "No insights into usage trends, risks, or preventive action needed across teams.",
    icon: pluscircle,
  },
];

const InsurerData = [
  {
    heading: "High OPD Claim Leakage",
    content:
      "Difficult to validate fraud in non-network OPD environments, leading to inflated payouts.",
    icon: heart,
  },
  {
    heading: "Delayed or Rejected Claims",
    content:
      "Manual forms, poor documentation, and lack of tech integration slow down processing.",
    icon: searchplus,
  },
  {
    heading: "Fragmented Vendor Ecosystem",
    content:
      "No single tech layer to bridge between pharmacies, doctors, labs, and policy workflows.",
    icon: pluscircle,
  },
];

const HospitalData = [
  {
    heading: "Poor Footfall from Cashless Patients",
    content:
      "Cashless OPD networks are limited; patients don’t know where to go or how to use benefits.",
    icon: heart,
  },
  {
    heading: "No Real-time Validation or Payment",
    content:
      "Delays in approval or payment reduce willingness to serve insured customers. ",
    icon: searchplus,
  },
  {
    heading: "Manual Coordination with Insurers/TPAs",
    content:
      "Wasted time on billing, paperwork, and back-and-forth with claim teams.",
    icon: pluscircle,
  },
];

const IndiviadulaData = [
  {
    heading: "Healthcare Feels Expensive & Inaccessible",
    content:
      "Hidden costs, lack of preventive support, no transparency in OPD or pharmacy pricing.",
    icon: heart,
  },
  {
    heading: "Insurance Use is Confusing",
    content:
      "Most people don’t know what’s covered, how to use it, or where to go. ",
    icon: pluscircle,
  },
];

function App() {
  return (
    <div className="overflow-hidden">

      <div className="relative w-full h-full md:bg-[#F2F9FF]  bg-white">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden">
          <MobileNav />
        </div>
        <Hero />
      </div>

      <div id="challenges" className="bg-[#F2F9FF] w-full sm:min-h-[100vh] md:min-h-[70vh] lg:h-[93vh] min-h-[100vh] flex items-center justify-center mb-5 lg:mb-0">
        <Challenges
          sectionTitle="For Corporates & HR Teams"
          boximg={arrowdown}
          reverseLayout={false}
          challengeData={challengeData}
          title="We fix this with:"
          content="Digital onboarding, automated camps, real-time reports, and usage analytics."
        />
      </div>

      <div id="Insurer" className="w-full sm:min-h-[100vh] md:min-h-[55vh] lg:h-[80vh] min-h-[100vh] bg-white flex items-center justify-center mt-5 lg:mt-0">
        <Challenges
          sectionTitle="For Insurers & TPAs"
          boximg={insures}
          challengeData={InsurerData}
          reverseLayout={true}
          title="We fix this with:"
          content="QR-based Scan & Pay, digitized claims, PWA interface, and co-pay/no-pay wallet flows — integrated with your backend."
        />
      </div>

      <div id="hospital" className="flex items-center justify-center w-full sm:min-h-[100vh] md:min-h-[55vh] lg:min-h-[55vh] xl:min-h-[55vh] min-h-[100vh] lg:px-[10vh] lg:py-[7vh] md:p-[2vh] sm:p-[2vh] p-[2vh] bg-white">
        <Hospital
          sectionTitle="For Hospitals, Labs, & Pharmacies"
          bgcolor="6FD0F1"
          shadows={false}
          text="black"
          LineColor="#6FD0F1"
          boxColor="white"
          challengeData={HospitalData}
          reverseLayout={false}
          title="We fix this with:"
          content="White-labeled QR onboarding, 4-hour soft confirmation windows, and direct digital payouts."
        />
      </div>

      <div id="Individuals" className="flex items-center justify-center w-full sm:min-h-[90vh] md:min-h-[65vh] lg:min-h-[45vh] min-h-[90vh]  lg:px-[10vh] lg:py-[10vh] lg:pb-[6vh] md:p-[3vh] sm:p-[3vh] p-[3vh]   ">
        <Hospital
          sectionTitle="For Individuals & Families"
          bgcolor="white"
          boxColor="#3DBCAA"
          shadows={true} 
          text="white"
          LineColor="white"
          challengeData={IndiviadulaData}
          reverseLayout={true}
          title="We fix this with:"
          content="Affordable affinity plans, a single QR for all OPD needs, and digitized benefit tracking. "
        />
      </div>
      <div id="products" className="lg:min-h-[100vh] flex items-center justify-center">
        <ProductShowcase />
      </div>
      <div className="w-full min-h-[70vh] flex items-center justify-center mt-[5vh] mb-[5vh]">
        <TrustedNationwide />
      </div>
      <div className="w-full h-[40vh] flex items-center justify-center">
        <SponsorCarousel />
      </div>
      <section id="Aboutus">
        <div className="w-full lg:h-[100vh] md:min-h-[100vh] sm:min-h-[100vh] min-h-[100vh] ">
          <AboutUs />
        </div>

      </section>
      <section id="security">
        <SecurityPriority />
        <PrivacySecurity />
      </section>
      <section id="testimonial">
        <TestimonialCarousel />
      </section>
      <Footersection />

    </div>

  );
}

export default App;