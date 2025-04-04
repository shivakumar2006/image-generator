import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://modelslab.com/api/v6/realtime/";

// Store your API key in a constant or environment variable
const apiKey = "aGUzNYitrtyHFUwVSFqGfbyFkEb5gmOUYG8nqqirqipcLGnW6QaiT3iCtlE3";

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
    }),
  }),
});

export const { useGenerateImageMutation } = apiSlice;












// aGUzNYitrtyHFUwVSFqGfbyFkEb5gmOUYG8nqqirqipcLGnW6QaiT3iCtlE3