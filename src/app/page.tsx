import { cn } from "@/utils/cn";
import data from "@/data/talents.json";
import Image from "next/image";

export default function Home() {
  const talents = data;

  return (
    <section>
      <h1 className="hidden" aria-label="Unides Agency">
        Unides Agency
      </h1>
      <p className="text-lg py-12">
        Welcome to our talent agency website. We provide models, actors, and other talent for
        events, photoshoot. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut, Welcome to our talent agency website. We provide models, actors,
        andLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut, Welcome to our talent agency website. We provide models, actors, and
      </p>

      <hr className="pb-8" />

      <ul className="grid grid-cols-2 gap-4 pt-4 pb-16">
        {talents.map((talent) => (
          <div key={talent.id}>
            <li className={cn("w-full aspect-square relative bg-green-500")} key={talent.id}>
              <Image src={talent.img} alt="asd" fill style={{ objectFit: "cover" }} />
            </li>
            <div className="flex justify-between">
              <h2>category</h2>

              <div className="flex">
                <p>tag1</p>
                <p>tag2</p>
              </div>
            </div>
          </div>
        ))}
      </ul>

      <hr className="pb-8" />
    </section>
  );
}
