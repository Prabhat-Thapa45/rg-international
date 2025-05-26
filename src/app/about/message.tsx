import Image from "next/image";

export default function MessageFromDirector() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 text-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10">
        Message from Managing Director
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-6 lg:gap-10">
        {/* Left Side - Managing Director Image */}
        <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[3/4]">
          {/* Image */}
          <Image
            className="relative w-full h-full object-cover "
            src="/md.png"
            alt="Managing Director"
            width={500}
            height={350}
          />
        </div>

        {/* Right Side - Message Section */}
        <section className="w-full max-w-[90%] lg:max-w-[60%] bg-white shadow-xl rounded-lg p-6 sm:p-8 lg:p-10 text-gray-800">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">A Commitment to Excellence</h3>
          <p className="text-lg sm:text-xl leading-relaxed">
            Welcome to RG International Co., Ltd., a company founded in July 2023 with a strong vision to connect the world with top-tier employment opportunities and business solutions.
            Based in Japan, our mission is to provide outstanding workforce solutions, business consultancy, and immigration support to individuals and industries across the globe.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mt-4">
            We take pride in facilitating employment placements, foreign trainee support, education services, real estate management, and trade operations, all with a focus on integrity, professionalism, and innovation.
            Our goal is to make lives brighter by fostering global connections and sustainable growth.
          </p>
          <p className="text-lg sm:text-xl font-bold text-center mt-8">
            "At RG International, we believe in building a future where businesses and people thrive together."
          </p>

          {/* Director Signature */}
          <div className="mt-10 text-center">
            <h4 className="text-xl font-semibold">Managing Director</h4>
            <p className="text-lg">RG International Co., Ltd.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
