import React from 'react'
import { useState } from 'react'
const UploadCategoryMode = ({close}) => {
    const [data,setData] = useState({
        name : "",
        image : ""
    })
    const handleOnChange =(e) =>{
        const {name,value} = e.target

        setData((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }
  return (
   <section>
        <div>
            <h1>Category</h1>
            <button onClick={close} >Close</button>
        </div>
        <form>
            <div>
                <label id='categoryName' >Name</label>
                 <input
                type='text'
                id='categoryName'
                placeholder='enter category'
                value={data.name}
                name='name'
                onChange={handleOnChange}
            />
            </div>
        </form>
   </section>
  )
}

export default UploadCategoryMode