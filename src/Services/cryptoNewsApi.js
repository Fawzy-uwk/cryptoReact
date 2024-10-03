  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  const newsHeaders = {
    "x-rapidapi-key": "bc4a109b6cmsh8ce51effce2492dp1c5480jsn86453881d769",
    "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
    SameSite: "None",
    Secure: "true",
  };
  const baseUrl = "https://real-time-news-data.p.rapidapi.com/";

  export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl, headers: newsHeaders }),
    endpoints: (builder) => ({
      getNews: builder.query({
        query: ({ q, count }) => ({
          url: "/search",
          params: {
            query: q,
            limit: count,
          },
        }),
      }),
    }),
  });

  export const { useGetNewsQuery } = newsApi;
