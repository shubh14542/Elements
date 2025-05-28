import React from "react";
import { useState } from "react";
import uploadImage from "../utils/uploadImage.js";
const UploadCategoryMode = ({ close }) => {
  const [data, setData] = useState({
    name: "",
    image: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUploadCategoryImage = async (e) =>{
   const file = e.target.files[0]

   if(!file){
    return 
   }

  const image = await uploadImage(file)
   console.log(image)
  }
  return (
    <section>
      <div>
        <h1>Category</h1>
        <button onClick={close}>Close</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="categoryName">Name</label>
          <input
            type="text"
            id="categoryName"
            placeholder="enter category"
            value={data.name}
            name="name"
            onChange={handleOnChange}
          />  
        </div>
        <div>
          <p>Image</p>
          <div>
            <p>No Image</p>
          </div>
          <label htmlFor="uploadCategoryImage" >
            <div
              disabled={!data.name}
              className={` 
                    ${!data.name ? "bg-grey-500" : "bg-blue-500"}
                    `}
            >
              Image
            </div>
            <input disabled= {!data.name} onChange={ handleUploadCategoryImage} type="file" id="uploadCategoryImage" className="hidden"/>
          </label>
        </div>
      </form>
    </section>
  );
};

export default UploadCategoryMode;
