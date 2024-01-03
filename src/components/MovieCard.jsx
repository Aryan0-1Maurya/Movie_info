import React from 'react'

function MovieCard({ allMovieData, loading }) {
    return (
        <div>
            {loading ? 
            <div className='flex justify-center '>
          <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
        </div>: <div className="main flex flex-wrap px-4 lg:px-10">
                {allMovieData.map((item, index) => {
                    const {Poster, Title,Year} = item
                    return (
                        <div key={index} className="p-2 child lg:w-1/4 w-full ">
                            <div className=" sub_child bg-[#40407a] p-3 rounded-2xl">
                                <img className='w-full rounded-lg mb-2' src={Poster} alt="img" />
                                <h2 className=' text-white text-xl font-bold'>{Title}</h2>
                                <h2 className='text-white text-lg mb-2'>Year: {Year}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>}
            
        </div>
    )
}

export default MovieCard