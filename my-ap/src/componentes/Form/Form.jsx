import { useState } from "react"
import validateEmail from "../validation"
const Form = ({login})=>{
    const [userData, setData] = useState({
        email: "",
        password:""
    })
    const [errors, setErrors] =  useState({})
    
    const handleChange = (event)=>{
        setData({...userData,
            [event.target.name]: event.target.value })

            setErrors(validateEmail({
                ...userData,
                [event.target.name]: event.target.value
            }))
    }
const handleSubmit =(event) =>{
    event.preventDefault();
    login(userData);
}
    return (
        <form onSubmit= {handleSubmit}>
        <label htmlFor="Email:">Email: </label>
        <input onChange={handleChange} name='email' value={userData.email} type="text"/>
        {errors.email && <span>{errors.email}</span>}
        <br />
        <label  htmlFor="Password:"> Password:</label>
        <input onChange={handleChange} name= 'password'value={userData.password} type="text"/>
        {errors.password && <span> {errors.password}</span> }
        <br />
        <button>Submit </button>
        </form>
    )
}
export default Form 