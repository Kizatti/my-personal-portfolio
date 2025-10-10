import { FaWhatsapp } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer id="footer">
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 ">
        <div className="flex gap-10 p-4 justify-center text-white ">
           <a
            href="https://github.com/Kizatti"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gray-800 text-white "
            target="_blank"
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adebiyi-adebayo-0ab332293"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white "
            target="_blank"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="https://wa.me/+2349038228299"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white "
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p>&copy; Adebiyi Kabir. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;

