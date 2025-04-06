import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://modelslab.com/api/v6/realtime/";

// Store your API key in a constant or environment variable
const apiKey = import.meta.env.VITE_API_KEY;

export const apiSlice = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    generateImage: builder.mutation({
      query: (prompt) => {
        return {
          url: `text2img?key=${apiKey}`, // Pass API key as query param
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }), // Use 'prompt' instead of 'text'
        };
      },
        transformResponse: (response) => {
            console.log("response : ", response);
                return response?.output?.[0] || null;
        }
    }),
  }),
});

export const { useGenerateImageMutation } = apiSlice;







