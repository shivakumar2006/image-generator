import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.deepai.org/api/";

export const apiSlice = createApi({
    reducerPath: "imageApi",
    baseUrl: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        generateImage: builder.mutation({ // we give a input so we use mutation otherwise we use only query...
            //send a post request with a text or file 
            query: (textOrFile) => {
                //Check if its a string or a file... 
                if(typeof textOrFile === "string") {
                    return {
                        url: "text2img",
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            "api-key": "939d3a7e-9f77-4275-8241-5118f6c42318",
                        },
                        body: JSON.stringify({ text: textOrFile }), // pass the text directly
                        }
                } else {
                    return {
                        url: "text2img",
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            "api-key": "939d3a7e-9f77-4275-8241-5118f6c42318",
                        },
                        body: textOrFile, // if it's a file pass it as a form data...
                    }
                }
            }
        })
    })
})

export const { useGenerateImageMutation } = apiSlice; 