import { Schema, model } from "mongoose";

const uploadsImgSchems = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UploadsSave = model("UploadsImg", uploadsImgSchems);

export default UploadsSave;
