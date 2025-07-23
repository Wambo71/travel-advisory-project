import React from 'react'
import {useState} from 'react'

const TravelNoteForm = () =>{

    const[formData, setFormData] = useState({
        name: "",
        country: "",
        note: ""
    })}

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e . target.name]: e.target.value 
        })

        const handleSubmit = (e) =>{
          e. preventDefault()
        }
    }
return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="Name"></label>
        <input type="text" value={formData.name} name='name' onChange={handleChange}
        placeholder='Enter name'/>
           </br>

        <label htmlFor="Country"></label>
        <input type="text" value={formData.country} name='country' onChange={handleChange}
        placeholder='Enter country'/>
          </br>   

        <label htmlFor="Travel note"></label>
        <input type="text" value={formData.note} name='note' onChange={handleChange}
        placeholder='Enter note'/> 

        <button type="submit">submit note</button>




        
    </form>

)

export default TravelNoteForm