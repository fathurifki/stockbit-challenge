import React from 'react'

const DetailPage = () => {
    return (
        <div className="mt-4 p-4">
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col">
                    <img className="h-48" src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"></img>
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-bold">Batman Begins</p>
                    <p className="font-semibold">2016</p>
                    <p className="font-semibold">Movie</p>
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <span className="font-bold text-xl">Description</span>
                <p className="text-lg text-justify"> After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.</p>
                <br />
                <span className="font-bold text-xl">Director</span>
                <p className="text-lg text-justify">Christopher Nolan</p>
                <br />
                <span className="font-bold text-xl">Actors</span>
                <p className="text-lg text-justify">Christian Bale, Michael Caine, Liam Neeson, Katie Holmes</p>
                <br />
                <span className="font-bold font-bold text-xl">Awards</span>
                <p className="text-lg text-justify">Awards</p>
                <br />
                <span className="font-bold font-bold text-xl">Production</span>
                <p className="text-lg text-justify">Production</p>
            </div>

            <div className="flex flex-row justify-center items-center space-x-10 mt-4 bg-red-200">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">Rated</p>
                    <p className="font-bold">PG-13</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">Released</p>
                    <p className="font-bold">15 Jun 2005</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">Duration</p>
                    <p className="font-bold">140 min</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="font-bold text-xl">Ratings</p>
                <div className="flex flex-row justify-center space-x-10 mt-4">
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-bold">Rated</p>
                        <p className="font-bold">8.2/10</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-bold">Released</p>
                        <p className="font-bold">84%</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-bold">Duration</p>
                        <p className="font-bold">70/100</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage