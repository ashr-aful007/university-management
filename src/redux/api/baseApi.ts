import { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
     baseUrl: 'http://localhost:5000/api/v1',
     credentials: 'include', 
     prepareHeaders: (headers, {getState}) =>{
          const token = (getState() as RootState).auth.token; //send token for authorization
          if(token){
               headers.set('authorization', `${token}`)
          }
          return headers;
     }
})

//create new token with refreshTOken
const baseQueryWithRefreshToken : BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async(args, api, extraOptions): Promise<any> =>{
      let result = await baseQuery(args, api, extraOptions);
      if(result?.error?.status === 401){
          //send Refresh token
          const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
               method:"POST",
               credentials: "include",
          })
          const data = await res.json()
           
          //logOut user when refresh token is dead 
          if(data?.data?.accessToken){
                const user = (api.getState() as RootState).auth.user;

                api.dispatch(setUser({
                    user,
                    token: data.data.accessToken
                })
                );
                result = await baseQuery(args, api, extraOptions);
          }else{
               api.dispatch(logout())
          }
      }
      return result
}

export const baseApi = createApi({
     reducerPath: "baseApi",
     baseQuery: baseQueryWithRefreshToken, //it's important for get cookie //and also set in backend cors({credentials: true})
     endpoints: () => ({}),
});
