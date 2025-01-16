import { cn } from "@/utils/cn";
import data from "@/data/talents.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const talents = data;

  return (
    <section>
      <h1 className="hidden" aria-label="Unides Agency">
        Unides Agency
      </h1>
      <p className=" text-2xl py-4">
        Welcome to our talent agency website. We provide models, actors, and other talent for
        events, photoshoot. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut, Welcome to our talent agency website. We provide models, actors,
        andLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut, Welcome to our talent agency website. We provide models, actors, and
      </p>

      <hr className="my-4 border-t-2 border-primaryText bg-red-500" />

      <ul className="grid grid-cols-2 gap-12 pt-4 pb-16">
        {talents.map((talent) => (
          <div key={talent.id}>
            <li
              className={cn("w-full aspect-square relative bg-green-500 overflow-hidden")}
              key={talent.id}
            >
              {/* THIS IS THE DYNAMIC ROUTE FOR PROJECTS!!!! */}
              <Link href="/projects/id">
                <Image
                  className={cn("hover:scale-110 transition duration-500")}
                  src={talent.img}
                  alt="asd"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </li>
            <div className="flex justify-between text-xl">
              <h2>category</h2>

              <div className="flex">{talent.tags[0]}</div>
            </div>
          </div>
        ))}
      </ul>

      <hr className="pb-8 border-t-2 border-primaryText " />
    </section>
  );
}
