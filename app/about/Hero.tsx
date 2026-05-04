import Image from "next/image";


const AboutHero = () => {
  return (
    <div className="bg-gray-100">
    <div className="max-w-6xl mx-auto">
        <Image
              src="/rna1.jpg"
              alt="RNA"
              width={900}
              height={20}
              className="object-contain  w-full"
            />
    </div>
    </div>
  )
}

export default AboutHero