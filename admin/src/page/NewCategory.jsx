import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialState = {
  category: "",
  image: "",
};
export default function NewCategory() {
  const [dataMenu, setData] = useState(initialState);
  const [img, setImg] = useState("");
  const uploadData = async (e) => {
    e.preventDefault();
    console.log(dataMenu);
    const { data } = await axios.post("/api/menu/addItem", dataMenu);
    console.log(data);
    if (data.success === true) {
      setImg("");
      setData(initialState);
      navigate(-1);
    } else {
      setImg("");
      setData(initialState);
    }
  };
  const handleImage = (e) => {
    const files = e.target.files[0];
    handleFirebaseUpload(files);
  };

  const handleFirebaseUpload = (file) => {
    // put in function
    const storage = getStorage();

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImg(downloadURL);
          setData((prev) => {
            return { ...prev, image: downloadURL };
          });
        });
      }
    );
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="sectionHeight flex flex-col gap-4 px-2 py-4">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="w-12 h-12 flex justify-center items-center rounded-full outline-none hover:bg-orange-600 hover:text-white ease-in-out duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 block"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="px-8">
          <h1 className="font-semibold text-gray-800">Upload Category Image</h1>
          {/* upload the menu image */}
          <div className="my-2 border-2 border-orange-00 min-w-32 max-w-40 h-36 rounded-xl overflow-hidden">
            {img ? (
              <div>
                <img src={img} alt="/" className="w-[100%] h-full object-" />
              </div>
            ) : (
              <label
                htmlFor="upload"
                className="flex justify-center items-center w-[100%] h-full object-cover bg-orange-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
              </label>
            )}
            <input
              onChange={(e) => {
                handleImage(e);
              }}
              accept="image/png, iamge/jpeg"
              name="image"
              id="upload"
              type="file"
              className="hidden"
            />
          </div>
        </div>
        {/* upload the name of that category */}
        <div className="felx flex-col gap-4 px-8">
          <h1 className="my-2 text-gray-800 font-semibold ">Category Name</h1>
          <input
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
            value={dataMenu.category}
            name="category"
            type="text"
            placeholder="eg: Salad"
            className="px-2 border-2 rounded-lg w-[80%]  focus:border-orange-400 outline-none"
          />
        </div>
        <div className="px-8 my-2">
          <button
            onClick={(e) => {
              uploadData(e);
            }}
            className="w-[30%] rounded-lg border-2 px-4 py-2 font-semibold  uppercase bg-orange-500 text-white active:bg-orange-600 hover:cursor-pointer outline-none "
          >
            add
          </button>
        </div>
      </div>
    </>
  );
}
