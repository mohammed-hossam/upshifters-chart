import { selectCategory, chartReducer, ChartState, selectLang } from "store/chartSlice";

describe("chartSlice", () => {
  const initialState: ChartState = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
    ],
    categories: [],
    lang: "en",
    currentCategory: "smartphones",
    labels: [],
    chartData: [],
    brands: [],
  };

  it(`should select category`, () => {
    const action = selectCategory("laptops");
    const newState = chartReducer(initialState, action);

    expect(newState.currentCategory).eql("laptops");
  });
  it(`should select lang`, () => {
    const action = selectLang("العربية");
    const newState = chartReducer(initialState, action);

    expect(newState.lang).eql("العربية");
  });
});
