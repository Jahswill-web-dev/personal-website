import Image from "next/image";
import coderz from "../../public/images/coderz.png";
import aiWebsite from "../../public/images/ai.png";
import huddle from "../../public/images/huddle.jpg";
import jjwillmin from "../../public/images/jjwillminmalls.png";
import sunnySide from "../../public/images/sunnyside.jpg";
import clipboard from "../../public/images/clipboard.jpg";
import Link from "next/link";

function Portfolio() {
  return (
    <div className="mt-10" id="portfolio">
      <h2 className="mb-5 text-3xl text-center text-primary">
        My Recent Works
      </h2>

      <div className="flex flex-col gap-10">
        {/* block 1 */}
        {/* <div className="mx-auto max-w-sm">
          <Image
            src={coderz}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              Coderzwave landing page
            </p>
            <div className="text-white flex gap-4 text-3xl">
              <Link href="#">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div> */}
        {/* block 2 */}
        <div className="mx-auto max-w-sm">
          <Image
            src={aiWebsite}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              AI consulting landing page
            </p>
            <div className="text-white flex gap-4 text-3xl">
              <Link href="https://www.golddustai.com/" target="_blank">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="https://github.com/Jahswill-web-dev/golddustai">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* block 3 */}
        <div className="mx-auto max-w-sm">
          <Image
            src={jjwillmin}
            alt="jjwillmin malls website"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              JJ WILLMIN
            </p>
            <div className="text-white flex gap-4 text-3xl">
              <Link href="https://www.jjwillminmalls.com/">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="https://github.com/Jahswill-web-dev/jjwillminmall">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* block 4 */}
        <div className="mx-auto max-w-sm">
          <Image
            src={clipboard}
            alt="Clip board landing page"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              clipboard landing page
            </p>
            <div className="text-white flex gap-4 text-3xl">
              <Link href="https://jahswill-web-dev.github.io/clipboard-landing-page/">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="https://github.com/Jahswill-web-dev/clipboard-landing-page">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* block 5 */}
        <div className="mx-auto max-w-sm">
          <Image
            src={sunnySide}
            alt="sunny side landing page"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              sunnyside landing page
            </p>{" "}
            <div className="text-white flex gap-4 text-3xl">
              <Link href="https://jahswill-web-dev.github.io/sunnyside-landing-page/">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="https://github.com/Jahswill-web-dev/sunnyside-landing-page">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* block 6 */}
        {/* <div>
          <Image
            src={coderz}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div>
            <p>Coderzwave landing page</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Portfolio;
