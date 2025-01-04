"use client";
import { useParams, useRouter } from "next/navigation";
import data from "@/data/talents.json";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default function TalentPage() {
  const talents = data;
  const { id } = useParams();
  const router = useRouter();

  const talent = talents.find((talent) => talent.id === id);

  if (!talent) {
    router.push("/");
    return;
  }

  return (
    <>
      {/* ARTIST INFO */}
      <section className={cn("flex flex-wrap gap-8 mb-8")}>
        <aside className=" w-full md:w-1/3 ">
          <Image
            src={talent.img}
            width={600}
            height={800}
            alt={`artist-avatar-${talent.firstName}`}
          />
        </aside>
        <article className=" w-full md:flex-1 flex flex-col justify-between relative ">
          <h2 aria-label="talent-name" className="font-secondary">
            {talent.firstName} {talent.lastName}
          </h2>
          <p>Location: {talent.location}</p>
          <p>Age: {talent.age}</p>
          <p>Eye Color: {talent.eyeColor}</p>
          <p>Hair Color: {talent.hairColor}</p>
          <p>Shoe Size: {talent.shoeSize}</p>
          <p>Dress Size: {talent.dressSize}</p>
          <p>Height: {talent.height}</p>
          <div className="text-3xl w-full flex flex-wrap">
            {talent.tags.map((tag) => (
              <span className="p-2 rounded-xl" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className=" absolute top-4 right-4 flex flex-col gap-4">
            <button
              type="button"
              className="bg-white px-4 py-2 rounded-lg"
              onClick={() => console.log("press")}
            >
              Add to Favorites
            </button>
            <button
              type="button"
              className="bg-white px-4 py-2 rounded-lg"
              onClick={() => console.log("press")}
            >
              Download SedCard
            </button>
          </div>
        </article>
      </section>

      {/* IMAGE GALLERY */}
      <section className="bg-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="w-32 h-24 bg-red-400">IMAGE</div>
        <div className="w-32 h-24 bg-red-400">IMAGE</div>
        <div className="w-32 h-24 bg-red-400">IMAGE</div>
        <div className="w-32 h-24 bg-red-400">IMAGE</div>
        <div className="w-32 h-24 bg-red-400">IMAGE</div>
        <div className="w-32 h-24 bg-red-400">IMAGE</div>
        <div className="w-32 h-24 bg-red-400">IMAGE</div>
        <div className="w-32 h-24 bg-red-400">IMAGE</div>
      </section>
    </>
  );
}
