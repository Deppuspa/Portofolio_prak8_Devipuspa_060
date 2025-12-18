import { ProjectCard } from "../components/ProjectCard";

export default function Projects() {
  const data = [
    {
      title: "Web Apollo",
      tag: "HTML + Tailwind CSS + Web Design",
      description:
        "Website statis berbasis HTML dan Tailwind CSS dengan desain modern dan responsif.",
      link: "https://deppuspa.github.io/2400016060_praktekwebp5_webApolo/",
      img : "#",
    },
    {
      title: "Ruang Ekspresi Web",
      tag: "Slicing UI",
      description:
       "Website kreatif sebagai media ekspresi visual berbasis slicing UI dan front-end.",
      link: "https://deppuspa.github.io/prak7_SlicingRE_060_Devipuspa/",
    },
    {
      title: "Prototype InvestGo",
      tag: "Canva",
      description: "Platform InvestGo sebagai penghubung investor dan UMKM berbasis website.",
      link: "https://drive.google.com/file/d/17nYTCJ4-_ZcsxSQ-5F4FKTbve5ED6WJ-/view?usp=drivesdk",
    },
  ];

  return (
    <div className="  bg-linear-to-r from-rose-300 via-rose-300 to-rose-200 pt-30 px-10 pb-24">
      <div className="flex justify-center items-center font-extrabold text-4xl text-rose-800 mx-20 mb-2 mt-8">
          <h1>Project Saya</h1>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {data.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}