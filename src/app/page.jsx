import Navigation from "@/components/Navigation";
import SectionHeroImage from "@/components/sectionHeroImage";
import SectionDestinasiUnggulan from "@/components/SectionDestinasiUnggulan";

export default function Home() {
  return (
    <>
      <Navigation></Navigation>
      <SectionHeroImage />
      <div className="px-10 mt-20">
        <SectionDestinasiUnggulan />
      </div>
    </>
  );
}
