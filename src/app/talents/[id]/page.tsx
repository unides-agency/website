import Image from "next/image";
import { cn } from "@/utils/cn";
import { getDocument } from "@/app/actions";

export default async function TalentPage({ params }: { params: { id: string } }) {
  const {id} = await params;

  const talent = await getDocument("talents", id.toString());

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
        <article className=" w-full md:flex-1 flex flex-col  relative ">
          <h2 aria-label="talent-name" className="font-secondary text-2xl ">
            {talent.firstName} <br />
            {talent.lastName}
          </h2>
          <p className="">Location: {talent.location}</p>
          <p className="">Age: {talent.age}</p>
          <p className="">Eye Color: {talent.eyeColor}</p>
          <p className="">Hair Color: {talent.hairColor}</p>
          <p className="">Shoe Size: {talent.shoeSize}</p>
          <p className="">Dress Size: {talent.dressSize}</p>
          <p className="">Height: {talent.height}</p>
          <div className="w-full flex flex-wrap">
            {talent.tags.map((tag: string) => (
              <span className="p-2 rounded-xl" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className=" absolute top-0 right-0 flex flex-col gap-4">
            <button type="button" className="bg-white px-4 py-2 rounded-lg">
            ❤️‍🔥
            </button>
            <button type="button" className="bg-white px-4 py-2 rounded-lg">
            💾 SedCard
            </button>
          </div>
        </article>
      </section>

      {/* IMAGE GALLERY */}
      {/* <section className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {talents.map((talent, index) => (
          <Image key={index} src={talent.img} width={600} height={800} alt="img" />
        ))}
      </section> */}
    </>
  );
}
