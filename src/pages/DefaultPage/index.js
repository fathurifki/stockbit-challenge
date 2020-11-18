/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingData, setData, searchData } from './actions'
import history from '../../utils/history'
import { useDebounce } from 'use-debounce';
import { ModalInfo } from '../../components/modal'
import AutoSearch from '../../components/dropDown';
import image from '../../assets/images';
import InfiniteScroll from 'react-infinite-scroll-component';

const DefaultPage = () => {
    
    const fetching = useSelector(state => state.default.data)
    const fetchingRender = useSelector(state => state.default.dataRender)
    const resultLength = useSelector(state => state.default.dataLength)

    const initialState = {
        modal: false,
        pictureSelect: "",
        search: "",
        count: 1,
        items: Array.from({ length: Number(resultLength) })
    }

    const transformResult = fetching && fetching.map((v, i) => {
        return {
            key: i,
            value: v.Title
        }
    })

    const search = useSelector(state => state.default.searchInput)

    const dispatch = useDispatch()
    const [state, setState] = React.useState(initialState)
    const debouncedSearchTerm = useDebounce(search, 40);

    React.useEffect(() => {
        if (debouncedSearchTerm !== "") {
            (async () => {
                await dispatch(searchData(search))
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

    const handleInput = (val) => {
        dispatch(setData('searchInput', val))
        setState((prevState) => ({
            ...prevState,
            search: val
        }))
    }

    const searchAction = () => {
        dispatch(fetchingData(state.search, state.count))
    }

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        dispatch(fetchingData(state.search, state.count))
        setTimeout(() => {
            setState((prevState) => ({
                ...prevState,
                items: state.items.concat(Array.from({ length: resultLength })),
                count: state.count +1
            }))
        }, 1500);
    };


    const renderComponent = fetchingRender && fetchingRender.map((v, i) => {

        return (
            <React.Fragment key={i}>
                <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        onClick={() => setModal(v.Poster)}
                        className="cursor-pointer w-1/3 bg-cover object-cover "
                        src={v.Poster !== 'N/A' ? v.Poster : image.defaultImage}
                        alt={v.Title}
                    >
                    </img>
                    <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-xl">{v.Title}</h1>
                        <p className="mt-2 text-gray-600 text-sm text-justify capitalize">{v.Type}</p>
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
        <div p-4>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col w-1/2 pt-4">
                    <AutoSearch data={transformResult} handleChange={(e) => handleInput(e)} value={state.search} />
                </div>
                <div className="flex flex-col w-1/4 justify-center items-center mt-2">
                    <button onClick={() => searchAction()} className="font-bold">Search</button>
                </div>
            </div>

            <InfiniteScroll
                dataLength={state.items.length}
                next={() => fetchMoreData()}
                hasMore={true}
                style={{ display: 'flex' }}
                scrollableTarget="scrollableDiv"
            >
                <div className="space-y-4 mx-2 mt-6">
                    {renderComponent}
                </div>
            </InfiniteScroll>
        </div >
    )
}

export default DefaultPage