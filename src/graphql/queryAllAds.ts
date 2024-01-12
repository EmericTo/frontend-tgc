import { gql } from "@apollo/client";

export const queryAllAds = gql`
  query AllAds($skip: Int, $take: Int, $where: AdsWhere) {
    items: allAds(skip: $skip, take: $take, where: $where) {
      id
      imgUrl
      price
      title
    }
    count: allAdsCount(where: $where)
  }`;