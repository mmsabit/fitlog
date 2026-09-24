"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <>
      <li className={`${pathname === "/" ? "active" : ""}`}>
        <Link href={`/`}>Workouts</Link>
      </li>
      <li className={`${pathname === "/myplans" ? "active" : ""}`}>
        <Link href={`/myplans`}>My Plan</Link>
      </li>
    </>
  );
};

export default Navlinks;
