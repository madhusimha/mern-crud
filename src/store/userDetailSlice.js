import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const URL = 'http://localhost:8000';

//create action
export const createUser  = createAsyncThunk("createUSer", async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error while calling add user API", error);
    }
})

//read action
export const getUsers = createAsyncThunk("getUsers", async () => {
    try {
        const response = await axios.get(`${URL}/allusers`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getUsers API", error);
    }
})

//delete action
export const deleteUser = createAsyncThunk("deleteUser", async (userid) => {
    try {
        const response = await axios.delete(`${URL}/deleteuser/${userid}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling deleteUser API", error);
    }
})

//update action
export const updateUser = createAsyncThunk("updateUser", async ({id, name, username, email, phone}) => {
    try {
        const user = {
            name : name, username : username, email : email, phone : phone};
       // console.log("data =>", user);
      //  console.log("uid =>", id);
         const response = await axios.post(`${URL}/updateuser2/${id}`, user);
         return response.data;
    } catch (error) {
        console.log("Error while calling updateUser API", error);
    }
})

export const userDetail = createSlice({
    name : "userDetail",
    initialState : {
        users : [],
        loading : false,
        error : null,
        searchData : [],
    },
    reducers: {
        searchUser : (state, action) => {
            state.searchData = action.payload;
        }
    },
    // extraReducers: {
    //     [createUser.pending]: (state) => {
    //         state.loading = true;
    //     },
    //     [createUser.fulfilled]: (state, action) => {
    //         state.loading = false;
    //         state.users.push(action.payload);
    //     },
    //     [createUser.rejected]: (state, action) => {
    //         state.loading = false;
    //         state.error = action.payload.message;
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload.data);
        })
        .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
        //fetch users from the server
        .addCase(getUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
        //delete user from the server
        .addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const {id} = action.payload;
            console.log('id=>', id);
            if(id) state.users = state.users.filter((userid) => userid.id !== id)
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
        //Update user response from the server is updated in the state
        .addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            const {id} = action.payload;
            state.users = state.users.map((ele) => 
            ele.id === id ? action.payload : ele
            );
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
    },
});

export default userDetail.reducer;
export const {searchUser} = userDetail.actions;