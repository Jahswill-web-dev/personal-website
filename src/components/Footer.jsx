import Link from "next/link";

function Footer() {
  return (
    <div className="mt-5">
      {/* socials */}
      <div className="mb-3 text-white text-xl flex gap-3 items-center justify-center">
        <Link href="#">
          <i className="fa-brands fa-x-twitter"></i>
        </Link>

        <Link href="#">
          <i className="fa-brands fa-facebook"></i>{" "}
        </Link>

        <Link href="#">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
      <p className="text-center text-white">© 2024 Jahswill</p>
    </div>
  );
}

export default Footer;
