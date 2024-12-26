import data from "@/data/talents.json";
import Link from "next/link";

export default function Talents() {
  const talents = data;
  console.log("🚀  talents:", talents);

  return (
    <main className="w-full flex justify-center items-center bg-secondary">
      <ul>
        {talents.map((talent) => (
          <li key={talent.id}>
            <Link href={`talents/${talent.id.toString()}`}>
              <div className="bg-blue-400 w-16 h-16 border-2 border-black">{talent.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
