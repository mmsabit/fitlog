import Logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-[#090a0d]">
      <div className="py-10 flex md:flex-row flex-col gap-5 justify-between items-center container mx-auto max-w-9/10">
        <div className="w-18">
          <Link href={`/`}>
            <Image
              src={Logo}
              alt="logo"
              width={72}
              height={22}
              className="h-full w-full object-contain"
            />
          </Link>
        </div>
        <p className="text-[12px] text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </div>
  );
};

export default Footer;
