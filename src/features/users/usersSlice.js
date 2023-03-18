import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

// const initialState = [
//     { id: '0', name: 'Dude Lebowski' },
//     { id: '1', name: 'Neil Young' },
//     { id: '2', name: 'Dave Gray' }
// ]

const initialState = []

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL)
        return response.data
    } catch (err) {
        return err.message
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload
            })
    }
})

export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, userId)  => state.users.find(user => user.id === userId)

export default usersSlice.reducer