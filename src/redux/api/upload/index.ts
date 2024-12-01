import { api as index } from "..";
import { TODO } from "../todo/types";
import { UPLOAD } from "./types";

export const api = index.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation<
      UPLOAD.UploadFileTodosResponse,
      UPLOAD.UploadFileTodosRequest
    >({
      query: (data) => ({
        url: "/upload/file",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useUploadFileMutation } = api;
