import { useEffect, useState } from "react";
import { AdCard, AdType } from "./AdCard";
import { gql, useQuery } from "@apollo/client";
import { queryAllAds } from "../graphql/queryAllAds"

type RecentAdsProps = {
  categoryId?: number;
  searchWord?: string;
};


export function RecentAds(props: RecentAdsProps): React.ReactNode {
  const [totalPrice, setTotalPrice] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);

  function addToTotal(price: number) {
    const newTotalPrice = price + totalPrice;
    setTotalPrice(newTotalPrice);
  }

  const { data } = useQuery<{ items: AdType[]; count: number }>(queryAllAds, {
    variables: {
      where: {
        ...(props.categoryId ? { categoryIn: [props.categoryId] } : {}),
        ...(props.searchWord ? { searchTitle: props.searchWord } : {}),
      },
      skip: page * pageSize,
      take: pageSize,
    },
  });
  const ads = data ? data.items : [];
  const count = data ? data.count : 0;
  const pagesCount = Math.ceil(count / pageSize);

  return (
    <main className="main-content">
      <h2>Annonces récentes</h2>
      <p>Prix total : {totalPrice}€</p>
      <p>Nombre de résultats par page ?</p>
      <button onClick={() => setPageSize(5)}>5</button>
      <button onClick={() => setPageSize(10)}>10</button>
      <button onClick={() => setPageSize(20)}>20</button>
      <br />
      <br />
      <p>
        Page actuelle : {page} ; nombre total d&apos;éléments : {count}
      </p>
      <button
        disabled={page === 0}
        onClick={() => setPage(Math.max(page - 1, 0))}
      >
        Précédent
      </button>
      <button
        disabled={page === pagesCount - 1}
        onClick={() => setPage(Math.min(page + 1, pagesCount))}
      >
        Suivant
      </button>
      <br />
      <br />
      <section className="recent-ads">
        {ads.map((item) => (
          <div key={item.id}>
            <AdCard
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              link={`/ads/${item.id}`}
              description={item.description}
              category={item.category}
            />
            <button
              onClick={() => {
                addToTotal(item.price);
              }}
            >
              Ajouter {item.price}€ au total
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}