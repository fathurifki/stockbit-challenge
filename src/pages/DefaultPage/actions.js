import { SET_DATA, SET_ERROR, SET_LOADING } from './constants'
import axiosApi from '../../utils/axios';

const apiKey = "faf7e5bb"

export const setData = (field, value) => {
    return {
        type: SET_DATA,
        field,
        value
    }
}

export const setErrors = (errors) => {
    return {
        type: SET_ERROR,
        errors,
    };
}

export const setLoading = (status) => {
    return {
        type: SET_LOADING,
        status,
    };
}

export const fetchingData = (search) => (dispatch, getState) => {
    console.log('SEARCH', search)
    dispatch(setLoading(true))
    axiosApi.get(`?apikey=${apiKey}&s=${search}`)
        .then(response => {
            const { data: { Search } } = response
            dispatch(setLoading(false))
            dispatch(setData('dataRender', Search))
        })
        .catch(error => {
            dispatch(setErrors(error))
        })
}

export const searchData = (search) => (dispatch, getState) => {
    console.log('SEARCH', search)
    dispatch(setLoading(true))
    axiosApi.get(`?apikey=${apiKey}&s=${search}`)
        .then(response => {
            const { data: { Search } } = response
            dispatch(setLoading(false))
            dispatch(setData('data', Search))
        })
        .catch(error => {
            dispatch(setErrors(error))
        })
}

export const fetchingDetailData = (id) => (dispatch, getState) => {
    dispatch(setLoading(true))
    axiosApi.get(`?apikey=${apiKey}&i=${id}`)
        .then(response => {
            console.log('RESPONSE', response)
            const { data } = response
            dispatch(setLoading(false))
            dispatch(setData('dataDetail', data))
            
        })
        .catch(error => {
            dispatch(setErrors(error))
        })
}