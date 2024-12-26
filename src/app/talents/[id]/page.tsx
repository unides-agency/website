"use client";
import { useParams, useRouter } from "next/navigation";
import data from "@/data/talents.json";

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
    <main className="bg-orange-500">
      <h2>Artist Name: {talent.name}</h2>
      <p>Age: {talent.age}</p>
    </main>
  );
}
