import ArtistCard from "@/components/ArtistCard";
import { cn } from "@/utils/cn";
import { getCollection } from "@/app/actions";
import { Talent } from "@/data/types";

export default async function Talents() {
  const talents = await getCollection<Talent>("talents");

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
