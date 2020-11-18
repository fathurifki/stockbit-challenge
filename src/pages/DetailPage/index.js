/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingDetailData } from '../DefaultPage/actions'

const DetailPage = () => {
    const params = useParams()
    const detail = useSelector(state => state.default.dataDetail)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchingDetailData(params.params))
    }, [])

    const {
        Title,
        Year,
        Rated,
        Runtime,
        Genre,
        Director,
        Writer,
        Released,
        Actors,
        Plot,
        Awards,
        Poster,
        Ratings,
        Type,
        Production
    } = detail

    const ratingLabel = (label) => {
        if (label === 'Internet Movie Database') {
            return 'IMDB'
        }
        if (label === 'Rotten Tomatoes') {
            return 'Rotten'
        }
        if (label === 'Metacritic') {
            return 'Metacritic'
        }
    }

    const renderRating = Ratings && Ratings.map(v => {


        return (
            <React.Fragment>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">{ratingLabel(v.Source)}</p>
                    <p className="font-bold">{v.Value}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="mt-4 p-4">
            <div className="flex ">
                <div className="w-1/2">
                    <img className="h-48 rounded-md" src={Poster} alt="iconImage"></img>
                </div>
                <div className="w-1/2 w-full m-2">
                    <p className="text-2xl font-bold">{Title}</p>
                    <p className="font-semibold text-l">{Genre}</p>
                    <p className="font-semibold capitalize">{Year} ({(Type)})</p>
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <span className="font-bold text-xl">Description</span>
                <p className="text-lg text-justify">{Plot}</p>
                <br />
                <span className="font-bold text-xl">Director</span>
                <p className="text-lg text-justify">{Director}</p>
                <br />
                <span className="font-bold text-xl">Writer</span>
                <p className="text-lg text-justify">{Writer}</p>
                <br />
                <span className="font-bold text-xl">Actors</span>
                <p className="text-lg text-justify">{Actors}</p>
                <br />
                <span className="font-bold font-bold text-xl">Awards</span>
                <p className="text-lg text-justify">{Awards}</p>
                <br />
                <span className="font-bold font-bold text-xl">Production</span>
                <p className="text-lg text-justify">{Production}</p>
            </div>

            <div className="flex flex-row justify-center items-center space-x-10 mt-4 bg-red-200">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">Rated</p>
                    <p className="font-bold">{Rated}</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">Released</p>
                    <p className="font-bold">{Released}</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold">Duration</p>
                    <p className="font-bold">{Runtime}</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="font-bold text-xl">Ratings</p>
                <div className="flex flex-row justify-center space-x-10 mt-4">
                    {renderRating}
                </div>
            </div>
        </div>
    )
}

export default DetailPage