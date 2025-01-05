import ArtistCard from "@/components/ArtistCard";
import data from "@/data/talents.json";
import { cn } from "@/utils/cn";

export default function Talents() {
  const talents = data;

  return (
    <section>
      <ul className={cn("grid grid-cols-4 gap-6 place-items-center")}>
        {talents.map((talent) => (
          <li className={cn("group relative")} key={talent.id}>
            <ArtistCard talent={talent} />
          </li>
        ))}
      </ul>
    </section>
  );
}
