import { useState } from "react";
import { storage } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
// form intial values;
const initialValue = {
  image: "",
  name: "",
  description: "",
  price: "",
  category: "",
};
export default function Add() {
  const [infoData, setData] = useState(initialValue);
  const [img, setImg] = useState("");
  const [progressBar, setProgressBar] = useState(0);
	let err = false;
  const handleImage = (e) => {
    // add a function to add files to the firebase
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
        setProgressBar(progress);
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
  // function ends here
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(infoData);
    const { data } = await axios.post("/api/food/add", infoData);
    if (data.message) {
      setData(initialValue);
      setImg("");
    } else {
      err =true;
    }
  };
  return (
    <div className=" h-full p-4 flex flex-col gap-4">
      {/* div for images */}
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-gray-400">Upload Image </h1>
        <div className="min-w-16 max-w-52 h-36 border-2 rounded-xl overflow-hidden border-orange-500 flex justify-center items-center">
          {img ? (
            <div>
              <img src={img} alt="/" className="w-[100%] h-full object-cover" />
            </div>
          ) : (
            <label
              htmlFor="files"
              className="w-[100%] min-h-full bg-orange-200 object-cover text-center flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-orange-800"
              >
                <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
              </svg>
            </label>
          )}
          <input
            onChange={(e) => {
              handleImage(e);
            }}
            name="image"
            id="files"
            className="hidden"
            type="file"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      {/* Product name */}
      <div>
        <h1 className="font-semibold text-gray-400">Product name</h1>
        <input
          name="name"
          value={infoData.name}
          onChange={(e) => {
            setData((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
          placeholder="Type here"
          className="w-[100%] border-2 mt-2 px-2 rounded-lg focus:border-orange-700 outline-none"
        />
      </div>
      {/* Product description */}
      <div>
        <h1 className="font-semibold text-gray-400">Product Description</h1>
        <textarea
          onChange={(e) => {
            setData((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
          name="description"
          value={infoData.description}
          placeholder="Add description here"
          className="w-[100%] h-28 border-2 mt-2 p-2 rounded-lg focus:border-orange-700 outline-none"
        />
      </div>
      {/* Product category */}
      <div>
        <h1 className="font-semibold text-gray-400 mb-2">Product category</h1>
        <select
          onChange={(e) => {
            setData((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
          name="category"
          id="pet-select"
        >
          <option value="">--Food Category--</option>
          <option value="Salad">Salad</option>
          <option value="Rolls">Rolls</option>
          <option value="Deserts">Deserts</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cake">Cake</option>
          <option value="Pure Veg">Pure veg</option>
          <option value="Pasta">Pasta</option>
          <option value="Noodles">Noodles</option>
        </select>
      </div>
      {/* Product price */}
      <div>
        <h1 className="font-semibold text-gray-400">Product Price</h1>
        <input
          onChange={(e) => {
            setData((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
          type="number"
          name="price"
          value={infoData.price}
          placeholder="Price"
          className="w-[50%] border-2 mt-2 px-2 rounded-lg focus:border-orange-700 outline-none"
        />
      </div>
      {/* Adding the submit button */}
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
        className="px-4 py-2 border-2 rounded-lg w-28 hover:bg-orange-600 hover:text-white font-bold text-ellipsis"
      >
        Add Item
      </button>
			{ err && (<div>An error occured</div>)}
    </div>
  );
}
