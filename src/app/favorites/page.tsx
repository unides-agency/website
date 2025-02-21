import { getCollection } from "../actions";
import { Talent } from "@/data/types";
import ArtistCard from "@/components/ArtistCard";

export default async function FavoritesPage() {
    const talents = await getCollection<Talent>("talents");
    const favoriteTalents = talents.filter((talent) => talent.isFavorite);
return(
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Favorites</h1>
    {favoriteTalents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteTalents.map((talent) => (
            <ArtistCard 
            key={talent.id} 
            talent={talent} 
            onToggleFavorite={async (talentId, isFavorite) =>
            {await toggleFavorite("talents", talentId, isFavorite);

            }}
            />
        ))}</div>
    ) : (
        <p className="text-lg">No favorites yet</p>
    )}
    </div>
);
}