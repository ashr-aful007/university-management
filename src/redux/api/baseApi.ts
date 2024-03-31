import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
     reducerPath: "baseApi",
     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1',
     credentials: 'include',   //it's important for get cookie
                              //and also set in backend cors({credentials: true})
   }),
     endpoints: () => ({}),
});
