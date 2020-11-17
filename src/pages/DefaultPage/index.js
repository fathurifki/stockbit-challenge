import React from 'react'

const DefaultPage = () => {
    return (
        <div>

            <div className="space-y-4 mx-2 mt-4">
                <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="w-1/3 bg-cover" src="https://m.media-amazon.com/images/M/MV5BMTM0NTY1ODI4NF5BMl5BanBnXkFtZTYwNzQ2OTc3._V1_SX300.jpg"></img>
                    <div class="w-2/3 p-4">
                        <h1 class="text-gray-900 font-bold text-2xl">Me And You And Everyone We Know</h1>
                        <p class="mt-2 text-gray-600 text-sm text-justify">Movie</p>
                        <div class="flex item-center justify-between mt-3">
                            <div className="flex flex-col">
                                <p className="text-xs">Year</p>
                                <h1 class="text-gray-700 font-bold text-xl">2016</h1>
                            </div>
                            <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Detail</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default DefaultPage