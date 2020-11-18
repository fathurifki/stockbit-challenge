import React from 'react'
import image from '../../assets/images'

export const Card = ({ onClick, srcImage, altTitle, onClickPage, year, type, title }) => {
    return (
        <React.Fragment>
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    onClick={onClick}
                    className="cursor-pointer w-1/3 bg-cover object-cover "
                    src={srcImage !== 'N/A' ? srcImage : image.defaultImage}
                    alt={altTitle}
                >
                </img>
                <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
                    <p className="mt-2 text-gray-600 text-sm text-justify capitalize">{type}</p>
                    <div className="flex item-center justify-between mt-3">
                        <div className="flex flex-col">
                            <p className="text-xs">Year</p>
                            <h1 className="text-gray-700 font-bold text-xl">{year}</h1>
                        </div>
                        <button
                            className="cursor-pointer px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                            onClick={onClickPage}
                        >
                            Detail
                            </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card