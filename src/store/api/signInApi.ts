import { baseApi } from "./baseApi";

const signInApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (login) => ({
        url: "v1/yeshtery/token",
        method: "POST",
        body: login,
      }),
    }),
  }),
});

export const { useSignInMutation } = signInApi;