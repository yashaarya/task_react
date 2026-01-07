import { useState } from 'react'
import './App.css'

function App() {
const[formData, setFormData] = useState({
  name: "",
  phone: "",
  email: ""
})
const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};
const validate = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }
  if(formData.name.trim() === "") {
    alert("Name cannot be empty.");
    return false;
  }
  return true;
}
const handleSubmit = (e) => {
e.preventDefault();
if (validate()) {
alert(`Hello,
   ${formData.name}! Your phone number is 
   ${formData.phone} and your email is ${formData.email}.`);
}
}
 return (
    <div className= ' flex items-center justify-center min-h-screen'>
     <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className=' text-purple-900 text-5xl '>Good Morning !!</h2><br />
      <p className='text-black'>Please enter your details below:
      </p>
      <form onSubmit={handleSubmit}>
        <input 
          className = "name-input"
          type = "text"
          name = "name"
          placeholder = "Enter your name"
          value = {formData.name}
          onChange = {handleChange}/>
          <br />
        <input
         className = "phone-input"
         type = "tel"
         name = "phone"
         placeholder = "Enter your phone number"
         value = {formData.phone}
         onChange = {handleChange}/>
         <br />
        <input
         className = "email-input"
         type = "email"
         name = "email"
         placeholder = "Enter your email"
         value = {formData.email}
         onChange = {handleChange}/>
         <br />
        <button 
        type="submit" onClick={handleSubmit}>Submit</button>
         </form>
     </div>
    </div>
  )
}

export default App
