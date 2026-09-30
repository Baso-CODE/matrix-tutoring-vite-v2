import SuccessStoryLesPrivate from "../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import "./Testimoni.css";
import TestimoniSuccessStoryHero from "./TestimoniSuccessStoryHero/TestimoniSuccessStoryHero";
const Testimoni = () => {
  return (
    <div>
      <TestimoniSuccessStoryHero />
      <SuccessStoryLesPrivate />
      <TestimonialSiswa />
      <TestimoniOrtuSiswa />
    </div>
  );
};

export default Testimoni;
