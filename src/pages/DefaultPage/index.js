/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingData, setData, searchData } from '../../modules/DefaultPage/actions'
import history from '../../utils/history'
import { useDebounce } from 'use-debounce';
import { ModalInfo } from '../../components/modal'
import AutoSearch from '../../components/dropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../../components/card';

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
        // a async api call like which sends
        dispatch(fetchingData(state.search, state.count))
        setTimeout(() => {
            setState((prevState) => ({
                ...prevState,
                items: state.items.concat(Array.from({ length: resultLength })),
                count: state.count + 1
            }))
        }, 1500);
    };


    const renderComponent = fetchingRender && fetchingRender.map((v, i) => {
        console.log('V', v.Year)
        return (
            <React.Fragment key={i}>
                <Card
                    onClick={() => setModal(v.Poster)}
                    srcImage={v.Poster}
                    altTitle={v.Title}
                    title={v.Title}
                    type={v.Type}
                    year={v.Year}
                    onClickPage={() => nextPage(v.imdbID)}
                />
                {
                    state.modal &&
                    <ModalInfo src={state.pictureSelect} onClick={() => setModal(v.Poster)} />
                }
            </React.Fragment>
        )
    })

    return (
        <div p-4>
            <div className="flex flex-row justify-center h-3/4">
                <div className="flex flex-col w-1/2 pt-4">
                    <AutoSearch placeholder="Search Movie" data={transformResult} handleChange={(e) => handleInput(e)} value={state.search} />
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