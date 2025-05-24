import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative flex flex-col items-center text-center text-gray-700 py-16 px-6 md:px-12 lg:px-20">
      {/* Background Image with Next.js <Image> */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/rgintco.jpg"
          alt="Office Background"
          layout="fill"
          objectFit="cover"
          priority // Loads image faster
        />
      </div>

      {/* Content */}
      <div className="relative max-w-3xl">
        {/* Company Name */}
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wide mb-8 text-gray-700">
          RG International Co. Ltd.
        </h1>

        {/* Description */}
        <div className="text-lg md:text-xl leading-relaxed space-y-6 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <p>
            Established in 2015, RG International Co. Ltd. has been a trusted
            partner for aspiring individuals from Nepal seeking rewarding career
            opportunities in Japan. We understand the unique challenges and
            exciting prospects that come with international employment, and we
            are dedicated to making your journey smooth and successful.
          </p>

          <p>
            At RG International Co. Ltd., we go beyond just job placement. Our
            comprehensive services include expert assistance with passport and
            visa applications, ensuring all your documentation is in order. We
            also provide crucial guidance regarding consulate and embassy
            procedures, making the entire process transparent and stress-free.
          </p>

          <p>
            With our deep understanding of both Nepali and Japanese
            requirements, we bridge the gap, connecting talented Nepalese
            professionals with reputable employers across various industries in
            Japan.
          </p>
        </div>
      </div>
    </div>
  );
}
