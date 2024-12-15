import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Header() {
  return (
    <header className={cn("w-full flex justify-center items-center")}>
      <Link href="/">Unides</Link>
    </header>
  );
}
