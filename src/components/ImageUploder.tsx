import { Button } from "@mui/material";
import React from "react";
import ImageLogo from "./styles/upload_image.png";
import "./styles/ImageUploader.css";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

const ImageUploader = () => {
  const OnFileUpload = (e: any) => {
    console.log(e.target.files[0].name);

    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);
    console.log(storageRef);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };
  return (
    <div className="outerBox">
      <div className="title">
        <h2>画像アップローダー</h2>
        <p>JpegかPngの画像ファイル</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          <img src={ImageLogo} alt="imagelogo" />
          <p>ここにドラッグ＆ドロップ</p>
        </div>
        <input
          className="imageUploadInput"
          multiple
          name="imageURL"
          type="file"
          accept=".png, .jpeg, .jpg"
          onChange={OnFileUpload}
        />
      </div>
      {/* <p>または</p>
      <Button variant="contained">
        ファイルを選択
        <input
          className="imageUploadInput"
          accept=".png, .jpeg, .jpg"
          onClick={OnFileUpload}
        />
      </Button> */}
    </div>
  );
};

export default ImageUploader;
