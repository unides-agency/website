import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/talents"> Talents</Link>
        </li>
        <li>
          <Link href="/contact"> Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
