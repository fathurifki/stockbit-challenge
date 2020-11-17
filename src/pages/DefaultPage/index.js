import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingData } from './actions'
import history from '../../utils/history'
import { useDebounce } from 'use-debounce';
import { ModalInfo } from '../../components/modal'

const DefaultPage = () => {

    const initialState = {
        modal: false,
        pictureSelect: ""
    }

    const fetching = useSelector(state => state.default.data)
    const search = useSelector(state => state.default.searchInput)

    const dispatch = useDispatch()
    const [state, setState] = React.useState(initialState)
    const debouncedSearchTerm = useDebounce(search, 40);
    React.useEffect(() => {
        if (debouncedSearchTerm !== "") {
            (async () => {
                await dispatch(fetchingData(search))
            })()
        }
    }, [search])

    const nextPage = (id) => {
        history.push({ pathname: `/detail-page/${id}` })
    }

    const setModal = (val) => {
        setState((prevState) => ({
            ...prevState,
            modal: !state.modal,
            pictureSelect: val
        }))
    }

    const renderComponent = fetching && fetching.map((v, i) => {
        return (
            <React.Fragment key={i}>
                <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        onClick={() => setModal(v.Poster)}
                        className="cursor-pointer w-1/3 bg-cover"
                        src={v.Poster}
                        alt={v.Title}
                    >
                    </img>
                    <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">{v.Title}</h1>
                        <p className="mt-2 text-gray-600 text-sm text-justify">{v.Type}</p>
                        <div className="flex item-center justify-between mt-3">
                            <div className="flex flex-col">
                                <p className="text-xs">Year</p>
                                <h1 className="text-gray-700 font-bold text-xl">{v.Year}</h1>
                            </div>
                            <button
                                className="cursor-pointer px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                                onClick={() => nextPage(v.imdbID)}
                            >
                                Detail
                            </button>
                        </div>
                    </div>
                </div>
                {
                    state.modal &&
                    <ModalInfo src={state.pictureSelect} onClick={() => setModal(v.Poster)} />
                }
            </React.Fragment>
        )
    })

    return (
        <div>
            <div className="space-y-4 mx-2 mt-4">
                {renderComponent}
            </div>
        </div>
    )
}

export default DefaultPage