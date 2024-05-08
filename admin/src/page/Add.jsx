export default function Add() {
  console.log("add monted");
  const handleImage = (e) => {
    // add a function to add files to the firebase 
    console.log("file",e.target.files[0]);
    
  };

  return (
    <div className=" sectionHeight px-4 py-4 flex flex-col gap-4">
      {/* div for images */}
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-gray-400">Upload Image </h1>
        <div className="min-w-20 max-w-32 h-16 border-2 rounded-xl overflow-hidden border-orange-500 flex justify-center items-center">
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
          <input
            onChange={(e) => {
              handleImage(e);
            }}
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
      </div>
      {/* Product description */}
      {/* Product category */}
      {/* Product price */}
      {/* Adding the submit button */}
    </div>
  );
}
