// import Image from "next/image";
// import work from "../../../public/images/work.png";
import Link from "next/link";

function Contact() {
  return (
    <div id="contact"
      className="bg-center w-full  bg-cover p-3 relative"
      style={{ backgroundImage: "url(/images/work.png)" }}
    >
      {/* overlay */}
      <div className="bg-black opacity-70 p-2 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="relative z-20 flex flex-col gap-4 items-center">
        <h3 className="text-2xl text-primary">
          Lets create a something together
        </h3>
        <p className="text-secondary text-xl sm:text-center">
          The idea of offering my expertise to your team excites me. Let's get
          in touch if you're looking for a committed frontend developer who
          combines technical mastery with a passion for innovation!
        </p>
        <Link href="mailto:onuegbujahswill@gmail.com" className="text-xl text-secondary border-4 border-primary px-4 py-2">
          Send mail
        </Link>
      </div>
    </div>
  );
}

export default Contact;
