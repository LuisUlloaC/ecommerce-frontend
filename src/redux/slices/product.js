import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axiosInstance";


const initialState = {
    createProduct: {
        success: false,
        loading: false,
        error: null,
    },
    fetchProducts: {
        success: false,
        loading: false,
        error: null,
        data: {
            count: 0,
            next: null,
            previous: null,
            results: []
        }
    },
    fetchProductbyId: {
        loading: false,
        success: false,
        error: null,
        data: null
    },
    updateProductById: {
        loading: false,
        success: false,
        error: null
    },
    deleteProductById: {
        loading: false,
        success: false,
        error: null
    }
}

export const createProduct = createAsyncThunk('product/create', async (product, { rejectWithValue }) => {
    const form = new FormData()

    form.append('name', product.name)
    form.append('price', product.price)
    form.append('tenant', window.location.host)
    form.append('quantity', product.quantity ?? 0)
    form.append('tags', product.tags ?? [])
    form.append('discount', product.discount ?? 0)
    form.append('min_stock', product.min_stock ?? 0)
    form.append('cost_price', product.cost_price ?? 0)
    form.append('image', product.image ?? '')

    try {
        await axiosInstance.post('/products', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    } catch (err) {
        const errorBundle = {
            detail: err.response.data.error.detail,
            status: err.response.status,
            statusText: err.response.statusText
        }
        return rejectWithValue(errorBundle)
    }
})


export const fetchProducts = createAsyncThunk('product/fetchMany', async ({ rejectWithValue }) => {
    try {
        const response = await axiosInstance.get('/products')
        return response.data
    } catch (err) {
        const errorBundle = {
            detail: err.response.data.error.detail,
            status: err.response.status,
            statusText: err.response.statusText
        }
        return rejectWithValue(errorBundle)
    }
})


export const fetchProductbyId = createAsyncThunk('product/fetchById', async (id, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/products/${id}`)
        return response
    } catch (err) {
        const errorBundle = {
            detail: err.response.data.error.detail,
            status: err.response.status,
            statusText: err.response.statusText
        }
        return rejectWithValue(errorBundle)
    }
})


export const updateProductById = createAsyncThunk('product/update', async (product, { rejectWithValue }) => {
    
    try {
        const form = new FormData()
    
        form.append('name', product.name ?? undefined)
        form.append('price', product.price ?? undefined)
        form.append('quantity', product.quantity ?? undefined)
        form.append('tags', product.tags ?? undefined)
        form.append('discount', product.discount ?? undefined)
        form.append('min_stock', product.min_stock ?? undefined)
        form.append('cost_price', product.cost_price ?? undefined)
        form.append('image', product.image ?? undefined)

        await axiosInstance.put{ `/products/${product.id}`, form}
    }
    
})