export default function NewCategory() {
  return (
    <>
      <div className="sectionHeight flex flex-col gap-4 px-2 py-4">
        <div className="">
          <h1>Upload Category Image</h1>
          <div className="my-2 border-2 border-orange-00 min-w-24 max-w-36 h-28 rounded-xl overflow-hidden">
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
            <input id="upload" type="file" className="hidden" />
          </div>
        </div>
        <div className="felx flex-col gap-4">
            <h1 className="my-2 text-gray-700 font-semibold ">Category Name</h1>
            <input type="text" placeholder="eg: Salad" className="px-2 border-2 rounded-lg  focus:border-orange-400 outline-none"/>
        </div>
   
      </div>
    </>
  );
}
