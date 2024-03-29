import { AdType } from "@/components/AdCard";
import { Layout } from "@/components/Layout";
import { queryAd } from "@/graphql/queryAd";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Ad(): React.ReactNode {
  const router = useRouter();
  const adId = router.query.id;
  const { data } = useQuery<{ item: AdType }>(queryAd, {variables: {id: adId,}, skip: adId === undefined,});
  const ad = data ? data.item : null;

  return (
    <Layout title="Ad">
      <main className="main-content">
        <p>Offre ID: {router.query.id}</p>
        {ad ? (
          <>
            <Link href={`/ads/${ad.id}/edit`}>Modifier l&apos;offre</Link>
            <h2>{ad.title}</h2>
            <p>{ad.price} €</p>
          </>
        ):
         adId ? (
          "erreur"
        ):
        (
          "Il manque l'id"
        )}
      </main>
    </Layout>
  );
}