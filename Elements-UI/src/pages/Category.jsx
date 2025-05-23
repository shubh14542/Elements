import React, { useState } from 'react'
import UploadCategoryMode from '../components/UploadCategoryMode'

const Category = () => {

  const [openUploadCategory,setOpenUploadCategory] = useState(false)

  return (
    <section>
        <div>
           <h2>Category</h2>
           <button onClick={()=>setOpenUploadCategory(true)} >Add Category</button>
        </div>
        {
          openUploadCategory && (
            <UploadCategoryMode close={()=>setOpenUploadCategory(false)} />

          )
        }
    </section>
   
  )
}

export default Category