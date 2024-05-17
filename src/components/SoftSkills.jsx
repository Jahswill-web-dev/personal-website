import learn from "../../public/images/Learn.png";
import innovate from "../../public/images/innovation.png";
import wrench from "../../public/images/wrench.png";
import Image from "next/image";

function SoftSkills() {
  return (
    <div>
      <h2 className="my-5 text-3xl text-primary text-center underline underline-offset-4">
        Why Me?
      </h2>
      <div className="grid gap-6">
        {/* Block 1 */}
        <div className="flex items-center flex-col sm:flex-row sm:gap-5">
          <Image
            src={learn}
            alt="continious learning graphics"
            width={700}
            height={700}
            className="w-60 mx-auto sm:w-[30%]"
          />
          <div className="sm:w-1/2">
            <h3 className="text-2xl text-secondary text-center sm:text-left">Continuous Learner</h3>
            <p className="text-xl text-white text-center sm:text-left">
              I enjoy keeping up with the newest developments in technology and
              the industry. Which guarantees that my skill set is constantly at
              the forefront{" "}
            </p>
          </div>
        </div>
        {/* Block 2 */}
        <div className="flex items-center flex-col sm:flex-row sm:gap-5">
          <Image
            src={innovate}
            alt="technological innovation"
            width={700}
            height={700}            
            className="w-60 mx-auto sm:w-[20%]"
          />
          <div className="sm:w-1/2">
            <h3 className="text-2xl text-secondary text-center sm:text-left">Innovator at Heart</h3>
            <p className="text-xl text-white text-center sm:text-left">
              I find chances to innovate and improve user experiences between
              the lines of code. digital experiences that make an impression.
            </p>
          </div>
        </div>
        {/* Block 3 */}
        <div className="flex items-center flex-col sm:flex-row sm:gap-5">
          <Image
            src={wrench}
            alt="picture of a wrench"
            width={700}
            height={700}
            className="w-60 mx-auto sm:w-[20%]"
          />
          <div className="sm:w-1/2">
            <h3 className="text-2xl text-secondary text-center sm:text-left">Problem Solver</h3>
            <p className="text-xl text-white text-center sm:text-left">
              Every project is an enigma that needs to be cracked. I can tackle
              problems creatively and come up with solutions because to my
              analytical attitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftSkills;
