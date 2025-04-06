import React, { useState, useEffect } from 'react';
import { BsImage } from "react-icons/bs";
import { useGenerateImageMutation } from '../features/apiSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // optional for blur effect

const Content = () => {

    const [ prompt, setPrompt ] = useState(""); // set user prompt... 
    const [ imageUrl, setImageUrl ] = useState(null); // store generated image...

    const [ generateImage, { isLoading }] = useGenerateImageMutation(); // RTK query hook...

    const handleClickGenerate = async () => {
        if (!prompt.trim()) return alert("Please enter a prompt !");

        try {
            const response = await generateImage(prompt).unwrap(); // API call..
            console.log("API Response: ", response); // Debugging step

            // Check if the response has the `output` field and has at least one image URL
            if(response) {
                const imageUrl = response;
                setImageUrl(imageUrl);
                sessionStorage.setItem("generatedImage", imageUrl);
            } else {
                alert("Failed to generate image, please try again!");
            }
        } catch (error) {
            console.error("Error in generating image!", error);
            alert("Failed to generate image, please try again!");
        }
    }

    useEffect(() => {
        const storedImage = sessionStorage.getItem("generatedImage");
        if(storedImage) {
            setImageUrl(storedImage);
        }
    }, [])

    const handleSuggestionClick = (suggestion) => {
        setPrompt(suggestion);
    }

    return (
        <div className="w-screen text-white flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16"
            style={{
                background: "linear-gradient(90deg, rgba(46,5,65,1) 0%, rgba(35,2,52,1) 35%, rgba(31,3,42,1) 55%, rgba(0,0,0,1) 100%)",
            }}    
        >
            <div className="w-full flex flex-col justify-center items-center gap-10 mt-20">
                <h1 className="text-4xl sm:text-5xl font-bold">AI Image Generator</h1>
                <h1 className="text-xl sm:text-2xl text-center max-w-screen-sm">This is an AI Image Generator. It creates an image from a scratch from a chat description.</h1>
                
                <div className="w-full sm:w-240 lg:w-240 h-auto sm:h-150 lg:h-150 border-1 rounded-3xl border-gray-500 flex flex-row justify-center items-center shadow-md hover:shadow-2xl shadow-white">
                    <div className="w-full sm:w-234 lg:w-234 h-auto sm:h-142 lg:h-142 bg-black/30 rounded-2xl flex flex-row">
                        <div className="w-full sm:w-180 lg:w-180 h-auto sm:h-140 lg:h-140 rounded-2xl my-2 mx-2 bg-black/20 flex justify-center items-center">
                            {imageUrl ? (
                                <LazyLoadImage 
                                    src={imageUrl}
                                    alt="Generated"
                                    effect="blur"
                                    className="w-full h-full rounded-2xl"
                                />
                            ) : <BsImage className="text-8xl" />}
                        </div>
                        
                        <div className="w-full sm:w-120 lg:w-120 h-auto sm:h-120 lg:h-120 my-2 mx-2 flex flex-col justify-center items-center">
                            <h1 className="text-xl sm:text-2xl lg:text-2xl my-2 text-center">Create an image from text prompt</h1>
                            <div className="w-full sm:w-90 lg:w-90 h-auto sm:h-60 lg:h-60 my-5">
                                <h1 className="flex justify-center items-center text-lg sm:text-xl lg:text-xl">Suggestion</h1>
                                <div className="w-full sm:w-90 lg:w-90 h-auto sm:h-60 lg:h-60 my-2 rounded-2xl bg-black/20 flex flex-col justify-center items-center gap-4 hover:bg-black/10">
                                    <div className="w-full sm:w-90 lg:w-90 h-10 py-2 px-3 hover:border-b-1 border-white cursor-pointer"
                                        onClick={() => handleSuggestionClick("A Football with anime effect")}
                                    >
                                        <p className="text-sm sm:text-base lg:text-base">A Football with anime effect</p>
                                    </div>
                                    <div className="w-full sm:w-90 lg:w-90 h-10 py-2 px-3 hover:border-b-1 border-white cursor-pointer"
                                        onClick={() => handleSuggestionClick("A BMW with futuristic effect")}
                                    >
                                        <p className="text-sm sm:text-base lg:text-base">A BMW with futuristic effect</p>
                                    </div>
                                    <div className="w-full sm:w-90 lg:w-90 h-10 py-2 px-3 hover:border-b-1 border-white cursor-pointer"
                                        onClick={() => handleSuggestionClick("A Dragon fly in the sky")}
                                    >
                                        <p className="text-sm sm:text-base lg:text-base">A Dragon fly in the sky</p>
                                    </div>
                                    <div className="w-full sm:w-90 lg:w-90 h-10 py-2 px-3 hover:border-b-1 border-white cursor-pointer"
                                        onClick={() => handleSuggestionClick("A Boy running in the street")}
                                    >
                                        <p className="text-sm sm:text-base lg:text-base">A Boy running in the street</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-auto sm:h-100 lg:h-100 mb-[-100px] flex flex-col justify-center items-center">
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Enter your prompt or click generate to get inspired"
                                    className="w-full sm:w-90 lg:w-90 h-20 sm:h-20 lg:h-20 rounded-2xl border border-gray-400 px-4 py-2 resize-none overflow-y-auto focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    style={{
                                        background: "linear-gradient(90deg, rgba(53,52,54,1) 0%, rgba(57,54,59,1) 35%, rgba(54,52,55,1) 55%, rgba(51,50,52,1) 100%)"
                                    }}
                                />

                                <button 
                                    className="w-full sm:w-90 lg:w-90 h-14 sm:h-14 lg:h-14 text-2xl flex justify-center items-center bg-purple-600 mt-10 rounded-3xl hover:bg-purple-700 cursor-pointer"
                                    disabled={isLoading}
                                    onClick={handleClickGenerate}
                                >
                                    {isLoading ? "Generating..." : "Generate"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-10 sm:h-12 lg:h-14">
                    <button className="text-lg sm:text-xl lg:text-xl text-white hover:underline">
                        More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Content;
