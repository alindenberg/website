import Link from "next/link";
import Image from "next/image";

const images = [
  { src: "/images/image_1.JPG", alt: "Ironman Arizona", key: 0 },
  { src: "/images/image_2.JPG", alt: "Ironman 70.3 Indian Wells", key: 1 },
  { src: "/images/image_3.JPG", alt: "2023 SD Rock n' Roll", key: 2 },
  // { src: "/images/image_1.JPG", alt: "Ironman Arizona", key: 0 },
  // { src: "/images/image_2.JPG", alt: "Ironman 70.3 Indian Wells", key: 1 },
  // { src: "/images/image_3.JPG", alt: "2023 SD Rock n' Roll", key: 2 },
  // Add more image URLs as needed
];

function About() {
  return (
    <div className="text-center pt-10 md:w-3/4 sm:w-full">
      <p className="my-2">Hi, I&apos;m Austin Lindenberg.</p>
      <p className="my-2">
        I&apos;m 27 years old, originating from Melbourne Beach, FL and
        currently living in San Diego, CA.
      </p>
      <p className="my-2">
        I spend my weekdays as a software engineer at AppSumo, helping
        entreprenuers get digital tools to grow their business while working
        alongside some of the most brilliant and inspiring people I&apos;ve ever
        met.
      </p>
      <p className="my-2">
        Outside of my day job, I love to get physically active, whether
        it&apos;s running, biking, swimming, lifting weights, or playing sports
        - I simply love to move. When I&apos;ve used up all my physical energy,
        I enjoy reading and watching mixed martial arts.
      </p>
      <p className="my-2">
        I made this site to showcase some of the happenings in my life and to
        open an avenue for communication with anyone who wants to reach out. I
        hope you enjoyed learning a bit about me, I&apos;d love to learn about
        you. Maybe we&apos;d be good friends or lifelong enemies, who knows.
        Contact me at{" "}
        <Link href="mailto:alindenberg8@gmail.com">alindenberg8@gmail.com</Link>{" "}
        if you feel so inclined, I promise I won&apos;t get a restraining order.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          // <div key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            key={index}
            width={300}
            height={450}
            className="py-5 mx-auto hover:w-full rounded-custom"
          />
          // </div>
        ))}
      </div>
    </div>
  );
}

export default About;
