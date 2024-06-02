import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//Kullanici durumunu kontrol eder
interface UserState{
    user:any;
    loading:boolean;
    error:string | null;
}

const initialState: UserState ={
    user:null,
    loading:false,
    error:null,
};


//http istek atma 
export const loginUser = createAsyncThunk(
    'user/LoginUser',
    async(credintials:{email: string; password:string},thunkAPI)=>{
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login',credintials);
            return response.data;
        } catch(error:any){
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

//Kullanici durumlariyla ilgilenen reducers
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload;
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading=true;
            state.error=action.payload as string;
        });
    },
});

//Disari aktarma yabildi.
export default userSlice.reducer;
    
