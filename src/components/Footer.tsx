import { Link } from "react-router-dom";
import { FooterData } from "@/types/Footer";
import { PortableText } from "@portabletext/react";

type Props = {
  data: FooterData | null;
};

function Footer({data}:Props) {
  return (
    <footer className=" py-20 px-4 mx-auto bg-secondary flex flex-col justify-center items-center text-white">
      <div className="flex gap-x-12 font-inter text-xs flex-col md:flex-row text-center gap-6">
        <Link to="/about">ABOUT</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/events">EVENT</Link>
        <Link to="/careers">CAREERS</Link>
        <Link to="/reservations">RESERVATIONS</Link>
        <Link to="/blog">BLOG</Link>
      </div>
      <div className="flex md:flex-row justify-between items-center  flex-col gap-10 md:gap-x-24 xl:gap-x-64 py-16">
        <div className="w-60 text-[10px] flex flex-col items-center text-center">
        {data?.left.map((line, index:number) => (
          <p key={line._key} className={index === data.left.length - 1 ? 'underline underline-offset-2' : ''}>{line.line}</p>
            ))}

         
        </div>
        <Link to="/">
        <div className="max-w-[203px] max-h-[104px] overflow-hidden">
            <img src={data?.mid.image} alt="footer-logo" className="h-full w-full object-cover"/>
        </div>
         </Link>
        <div className="flex items-center justify-center">
          <h4 className="font-biro text-4xl text-center">{data?.right}</h4>
        </div>
      </div>

      <div className="text-center font-inter text-[10px]">
        {/* <p>
          Made with love and a drop of unicorn blood |&nbsp;
          <span className="underline underline-offset-2">Privacy</span> |&nbsp;
          <span className="underline underline-offset-2">Terms</span>
        </p> */}
        <PortableText value={data?.footerNote || [] } onMissingComponent={false}/>
      </div>
    </footer>
  );
}

export default Footer;
