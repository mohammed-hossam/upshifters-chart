import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setProducts } from "store/chartSlice";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<backend.ProductsRes, backend.Category>({
      query: (categoryName) => `products/category/${categoryName}`,
      async onQueryStarted(categoryName, { dispatch, queryFulfilled, getState }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data.products));
        } catch (err) {
          console.log(err);
        }
      },
      //  async onCacheEntryAdded(
      //    categoryName,
      //    {
      //      dispatch,
      //      getState,
      //      extra,
      //      requestId,
      //      cacheEntryRemoved,
      //      cacheDataLoaded,
      //      getCacheEntry,
      //      updateCachedData,
      //    }
      //  ) {
      //    try {
      //      // const { data } = await queryFulfilled;
      //      // `onSuccess` side-effect
      //      // dispatch(setProducts(data.products));
      //      // console.log(getState().chart.currentCategory);
      //      // dispatch(drawChart());
      //    } catch (err) {
      //      // `onError` side-effect
      //      console.log(err);
      //      // dispatch(setProducts([]));
      //    }
      //  },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
