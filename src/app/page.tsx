import Hero from "../../Components/Hero";
import Features from "../../Components/Features";
import Jobcategories from "../../Components/Jobcategories";
import Testimonial from "../../Components/Testimonial";
import Cta from "../../Components/Cta.jsx"; 


export default function Home() {
  return (
    <div>
    <Hero/>
    <Features/>
     <Jobcategories/>
    <Testimonial/>
    <Cta/>  
   
    </div>
  );
}
