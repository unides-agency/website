"use client"

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { Talent } from "@/data/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ArtistCardProps {
  talent: Talent;
  onToggleFavorite: (talentId: string, isFavorite: boolean) => void;
}

export default function ArtistCard({ talent, onToggleFavorite }: ArtistCardProps) {
 const handleFavoriteClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    await onToggleFavorite(talent.id, talent.isFavorite);
  };
  return (
    <Link className="size-full" href={`/talents/${talent.id}`}>
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
            "absolute z-20 bottom-0 left-3"
          )}
        >
          {talent.firstName}
          <br />
          {talent.lastName}
        </p>
      <button
     onClick={handleFavoriteClick}
      aria-label="favorite button"
      className={cn(
        "mt-2 cursor-pointer bg-none absolute bottom-3 right-3 border-none",
        "transition duration-150 ease-in-out",
        "hover:scale-60 focus:outline-none"
      )}
    >
      {talent.isFavorite ? (
        <AiFillHeart className={cn("text-red-500 text-4xl", "hover:text-red-600")} />
      ) : (
        <AiOutlineHeart
          className={cn("text-red-500 text-4xl", "hover:text-red-600")}
          style={{ strokeWidth: 50 }}
        />
      )}
    </button>
        
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
