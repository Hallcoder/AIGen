import { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import Post from "./Post";

function App() {
  const [formData,setFormData] = useState({title:"",description:"",image:"",email:"",telephone:""});
  
  let [image,setImage] = useState("")
  const handleChange = (e) => {
    let {currentTarget:input} = e;
    const formData1 = { ...formData};
    formData1[input.name] = input.value;
    console.log(formData1);
    setFormData(formData1);
  };
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3000/createPost",formData).then(data => {
console.log(data.data);
setImage(data.data.data.image)
    }).catch(err => console.error(err));
  }
 const handleFileChange = () =>{}
  return (
    <div className="border-2">
      <form action="" className="w-full flex flex-col md:flex-row justify-center m-auto  p-2 ">
        <section className="w-full flex flex-col justify-center md:w-5/12 m-4">        
          <h1 className={"font-bold text-2xl text-center"}>Post Information</h1>
          <span className="m-8 flex items-center flex-col">
            <Input onChange={handleChange} label={"Title"}  name={"title"}/>
            <Input onChange={handleChange} label={"Description"} name={"description"} className="h-40  w-7/12  border text-sm outline-blue-600 rounded-md hover:outline-blue-400 border-gray-200 indent-2"/>
            <Input onChange={handleChange} label={"Phone Number"}name={"telephone"}/>
            <Input onChange={handleChange} label={"Email"}  name={"email"}/>
            <Input onChange={handleChange} label={"Image"} placeholder={"Enter the description of the image you want"}  name={"image"}/>
          </span>
          <button className="m-auto p-2 bg-blue-600 text-white" onClick={handleSubmit}>Generate Post</button>
        </section>
       {image.length > 0 && <Post pic={image} /> }
      </form>
    </div>
  );
}

export default App;
