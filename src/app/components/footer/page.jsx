import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#244d3fFF] text-white  rounded p-10">
  <nav className="text-center space-y-4">
     <h1 className='text-5xl font-bold'>KeenKeeper</h1>
     <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  </nav>
  <nav>
    <div className=" grid grid-flow-col gap-4">
      <a className="bg-base-100 rounded-full p-2 text-black" href="https://instagram.com" target="_blank"><FaInstagram /></a>
      <a className="bg-base-100 rounded-full p-2 text-black" href="https://facebook.com" target="_blank"><FaFacebook /></a>
      <a className="bg-base-100 rounded-full p-2 text-black" href="https://twitter.com" target="_blank"><FaXTwitter/> </a>
    </div>
  </nav>
  <aside className="grid lg:grid-cols-2 md:grid-cols-2 ">
    <p>Copyright © {new Date().getFullYear()}  2026 KeenKeeper. All rights reserved.</p>
     <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Cookies</a>
  </nav>
  </aside>
</footer>
        </div>
    );
};

export default Footer;