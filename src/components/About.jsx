import Image from "next/image";
import aboutImage from "../../public/images/about.png";

function About() {
  return (
    <div id="about">
      <h2 className="text-left sm:text-center text-primary text-[32px] mb-5">
        About Me
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10">
        <div className="md:w-1/2">
          <Image
            src={aboutImage}
            alt="image of cartoon character coding"
            width={500}
            height={500}
            className="md:w-full max-w-sm md:ml-auto"
          />
        </div>
        <div className="border-4 rounded h-[400px] border-primary hidden md:block"></div>
        <div className="md:w-[50%] flex flex-col gap-4 text-left text-secondary text-2xl">
          <p>
            During the 2020 lockdown, I developed a passion for web development,
            which stoked my curiosity.{" "}
          </p>
          <p>
            I am an enthusiastic web developer that is always seeking new things
            to learn. I love to create and innovate. For me, creating beautiful,
            user-focused interfaces is a calling, not simply a job. I enjoy
            being ahead of the curve and utilizing the newest technology in the
            always changing field of web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
