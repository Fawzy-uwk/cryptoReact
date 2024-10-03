import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const marketHeaders = {
  "x-rapidapi-key": "bc4a109b6cmsh8ce51effce2492dp1c5480jsn86453881d769",
  "x-rapidapi-host": "l4chsalter-alternative-me-crypto-v1.p.rapidapi.com",
};

const baseUrl = "https://l4chsalter-alternative-me-crypto-v1.p.rapidapi.com/v2";

export const exchangesApi = createApi({
  reducerPath: "exchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers: marketHeaders }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => `/ticker`,
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;
