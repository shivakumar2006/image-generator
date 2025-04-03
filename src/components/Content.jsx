import React from 'react';

const Content = () => {
  return (
    <div className='w-screen h-screen text-white flex flex-col justify-center items-center'
        style={{
            background: "linear-gradient(90deg, rgba(46,5,65,1) 0%, rgba(35,2,52,1) 35%, rgba(31,3,42,1) 55%, rgba(0,0,0,1) 100%)",
        }}    
        >
        <div className='w-full flex flex-col justify-center items-center gap-10 my-10'>
            <h1 className='text-5xl font-bold '>AI Image Generator</h1>
            <h1 className='text-2xl'>This is a AI Image Generator. It creates an image from a scratch from a chat description.</h1>
            <div className='w-240 h-150 border-1 rounded-2xl border-white flex flex-row'>
                <div>

                </div>
            </div>
            <div className='h-10'>
                <button>
                    more
                </button>
            </div>
        </div>
    </div>
  )
}

export default Content