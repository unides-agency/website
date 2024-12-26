import ArtistCard from "@/components/ArtistCard";
import data from "@/data/talents.json";
import { cn } from "@/utils/cn";

export default function Talents() {
  const talents = data;

  return (
    <main className="w-full flex justify-center items-center ">
      <ul className={cn("grid grid-cols-5 gap-6 place-items-center", "py-6", "xs:w-full md:w-4/5")}>
        {talents.map((talent) => (
          <li className={cn("group relative", " overflow-hidden")} key={talent.id}>
            <ArtistCard talent={talent} />
          </li>
        ))}
      </ul>
    </main>
  );
}
