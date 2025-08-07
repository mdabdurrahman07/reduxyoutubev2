import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes:["Videos"],
  endpoints: (build) => ({
    getVideos: build.query({
      query: () => "/videos",
      keepUnusedDataFor:600,
      providesTags:["Videos"]
    }),
    getVideo: build.query({
      query: (id) => `/videos/${id}`,
    }),
    getRelatedVideos: build.query({
      query: (title) => {
        const tags = title.split(" ");
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&_limit=4`;
        return queryString;
      },
    }),
    postVideo : build.mutation({
      query: (data) =>({
        url:'videos',
        body: data,
        method:'POST'
      }),
      invalidatesTags:["Videos"]
    }),
    editVideo : build.mutation({
      query: ({id,data}) =>({
        url:`/videos/${id}`,
        body: data,
        method:'PUT'
      })
    })
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery , usePostVideoMutation, useEditVideoMutation} = apiSlice;
