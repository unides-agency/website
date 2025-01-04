import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { Talent } from "@/data/types";

export default function ArtistCard({ talent }: { talent: Talent }) {
  return (
    <Link className="size-full" href={`talents/${talent.id.toString()}`}>
      <div
        className={cn(
          "absolute z-10 inset-0 opacity-0",
          "bg-gradient-to-t from-primaryAccent/75 via-transparent to-transparent ",
          "transition",
          "hover:opacity-100 hover:duration-700"
        )}
      >
        <p
          className={cn(
            "group-hover:block",
            "hidden text-gray-800",
            "absolute z-20 bottom-0 right-2"
          )}
        >
          {talent.firstName} {talent.lastName}
        </p>
      </div>

      <div className={cn("size-full ")}>
        <Image
          className="group-hover:opacity-75"
          src={talent.img}
          width={400}
          height={100}
          alt={`artist-img-${talent.firstName}`}
        />
      </div>
    </Link>
  );
}
