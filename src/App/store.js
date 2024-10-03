import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApi";
import { newsApi } from "../Services/cryptoNewsApi.js";
import { exchangesApi } from "../Services/CryptoExchanges";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [exchangesApi.reducerPath]: exchangesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(newsApi.middleware)
      .concat(exchangesApi.middleware);
  },
});
