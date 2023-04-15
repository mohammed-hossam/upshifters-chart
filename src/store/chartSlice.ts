import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChartData = { label: string; data: number[] }[];

export type ChartState = {
  products: backend.Products;
  categories: backend.Category[];
  currentCategory: backend.Category;
  labels: number[];
  chartData: ChartData;
  brands: string[];
  lang: string;
};

const initialState: ChartState = {
  products: [],
  categories: ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"],
  currentCategory: "smartphones",
  lang: "en",
  labels: [],
  chartData: [],
  brands: [],
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<backend.Category>) => {
      // const state.products = state.products.filter((ele) => ele.category === action.payload);
      // const neededBrands: string[] = state.products.reduce(
      //   (prev: string[], curr: backend.Product) => {
      //     const elementFound = prev.find((ele) => ele === curr.brand);
      //     if (elementFound) return prev;
      //     return [...prev, curr.brand];
      //   },
      //   []
      // );
      // // console.log(JSON.stringify(state.products, undefined, 2));
      // // console.log(JSON.stringify(neededBrands, undefined, 2));
      // const neededChartData: ChartData = [];
      // neededBrands.forEach((brandName, i) => {
      //   neededChartData[i] = { label: brandName, data: [] };
      //   const neededBrandProducts = state.products.filter(
      //     (innerEle) => brandName === innerEle.brand
      //   );
      //   const chartData = neededBrandProducts.reduce((prev: number[], curr: backend.Product) => {
      //     return [...prev, curr.price];
      //   }, []);

      //   neededChartData[i].data = chartData.concat(
      //     Array(10)
      //       .fill(undefined)
      //       .map(() => Math.round(Math.random() * 500))
      //   );
      // });
      // // console.log(JSON.stringify(neededChartData, undefined, 2));

      // // const chartData = state.products.reduce((prev: number[], curr: backend.Product) => {
      // //   return [...prev, curr.price];
      // // }, []);
      // const labelsLengths = neededChartData.map((ele) => ele.data.length);
      // console.log(labelsLengths);
      // const x = Array.from(Array(Math.max(...labelsLengths)).keys());

      // state.labels = x;
      // console.log(x);
      state.currentCategory = action.payload;
      // state.chartData = neededChartData;
      // return {
      //   ...state,
      //   currentCategory: action.payload,
      //   chartData: neededChartData,
      //   labels: x,
      // };
    },
    drawChart: (state) => {
      const neededBrands: string[] = state.products.reduce(
        (prev: string[], curr: backend.Product) => {
          const elementFound = prev.find((ele) => ele === curr.brand);
          if (elementFound) return prev;
          return [...prev, curr.brand];
        },
        []
      );
      const neededChartData: ChartData = [];

      neededBrands.forEach((brandName, i) => {
        neededChartData[i] = { label: brandName, data: [] };
        const neededBrandProducts = state.products.filter(
          (innerEle) => brandName === innerEle.brand
        );

        const chartData = neededBrandProducts.reduce((prev: number[], curr: backend.Product) => {
          return [...prev, curr.price];
        }, []);

        neededChartData[i].data = chartData.concat(
          Array(12)
            .fill(undefined)
            .map(() => Math.round(Math.random() * 500))
        );
      });

      const labelsLengths = neededChartData.map((ele) => ele.data.length);
      const x = Array.from(Array(Math.max(...labelsLengths)).keys());

      state.labels = x;
      state.chartData = neededChartData;
      state.brands = neededBrands;
    },
    setProducts: (state, action: PayloadAction<backend.Products>) => {
      state.products = action.payload;
    },
    selectLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addMatcher(productsApi.endpoints.getProducts.matchFulfilled, (state, { payload }) => {
    // state.products = payload.products;
    // console.log(state.products);
    // console.log(payload.products);
    // // const state.products = state.products.filter((ele) => ele.category === action.payload);
    // const neededBrands: string[] = state.products.reduce(
    //   (prev: string[], curr: backend.Product) => {
    //     const elementFound = prev.find((ele) => ele === curr.brand);
    //     if (elementFound) return prev;
    //     return [...prev, curr.brand];
    //   },
    //   []
    // );
    // console.log(JSON.stringify(state.products, undefined, 2));
    // console.log(JSON.stringify(neededBrands, undefined, 2));
    // const neededChartData: ChartData = [];
    // neededBrands.forEach((brandName, i) => {
    //   neededChartData[i] = { label: brandName, data: [] };
    //   const neededBrandProducts = state.products.filter(
    //     (innerEle) => brandName === innerEle.brand
    //   );
    //   const chartData = neededBrandProducts.reduce((prev: number[], curr: backend.Product) => {
    //     return [...prev, curr.price];
    //   }, []);
    //   neededChartData[i].data = chartData.concat(
    //     Array(10)
    //       .fill(undefined)
    //       .map(() => Math.round(Math.random() * 500))
    //   );
    // });
    // console.log(JSON.stringify(neededChartData, undefined, 2));
    // const chartData = state.products.reduce((prev: number[], curr: backend.Product) => {
    //   return [...prev, curr.price];
    // }, []);
    // const labelsLengths = neededChartData.map((ele) => ele.data.length);
    // console.log(labelsLengths);
    // const x = Array.from(Array(Math.max(...labelsLengths)).keys());
    // state.labels = x;
    // console.log(x);
    // // state.currentCategory = action.payload;
    // state.chartData = neededChartData;
    // state.brands = neededBrands;
    // });
  },
});

export const chartReducer = chartSlice.reducer;
export const { selectCategory, setProducts, drawChart, selectLang } = chartSlice.actions;

export default chartSlice;
