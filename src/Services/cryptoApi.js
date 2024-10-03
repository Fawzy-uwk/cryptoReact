import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "x-rapidapi-key": "bc4a109b6cmsh8ce51effce2492dp1c5480jsn86453881d769",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoHeaders }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (cryptoId) => `/coin/${cryptoId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ cryptoId, timePeriod }) =>
        `/coin/${cryptoId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});

export const {
  useGetCryptoQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
