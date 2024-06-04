import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) =>({
        
        // Kitchen Accessories
        HomeDecorationProducts: builder.query({
            query: () => '/products/category/kitchen-accessories?limit=10',
        }),


    }),
});


export const { useHomeDecorationProductsQuery  } = productsApi