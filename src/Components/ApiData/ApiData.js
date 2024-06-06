import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder) =>({
        
        
        AllProducts: builder.query({
            query: () => '/products',
        }),

        getProductByCategory: builder.query({
            query: (category) => `/products/category/${category}`,
          }),

          
    paginateProducts: builder.query({
        query: () => `/products?limit=10&skip=6`,
      }),

      getProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),
    }),
});


export const { useAllProductsQuery, useGetProductByCategoryQuery, useGetProductByIdQuery, usePaginateProductsQuery  } = productsApi