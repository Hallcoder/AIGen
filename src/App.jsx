import { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import Post from "./Post";
import { Atom, FourSquare } from "react-loading-indicators";
import SelectC from "./Select";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
    type:"",
    telephone: "",
  });

  let [image, setImage] = useState("");
  let [text, setText] = useState("");
  let [file, setFile] = useState("");
  let [loading, setLoading] = useState(false);
  const handleChange = e => {
    const formData1 = { ...formData };
    if(typeof e === "string"){
          console.log(e)
          formData1["type"] = e;
          setFormData(formData1)
          return;
    }
    let { currentTarget: input } = e;
    formData1[input.name] = input.value;
    console.log(formData1);
    setFormData(formData1);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    // if (file.length > 0) {
    //   axios
    //     .post("http://localhost:3000/editPost", {
    //       file: file,
    //       ...formData
    //     })
    //     .then(data => {
    //       setImage(data.data.data.image);
    //       setLoading(false);
    //     }).catch(err => {
    //       console.error(err);
    //       setLoading(false);
    //     });
    //     return
    // }
    axios
      .post("http://localhost:3000/createPost", {file,...formData})
      .then(data => {
        if(data.data.data.image) setImage(data.data.data.image);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };
  const handleFileChange = e => {
    console.log("files", e.target.files);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setFile(reader.result);
      console.log(reader.result);
    };
  };
  return (
    <div className="border-2">
      <form
        action=""
        className="w-full flex flex-col md:flex-row justify-center m-auto  p-2 "
      >
        <section className="w-full flex flex-col justify-center md:w-5/12 m-4">
          <h1 className={"font-bold text-2xl text-center"}>Post Information</h1>
          <span className="m-8 flex items-center flex-col">
            <Input onChange={handleChange} label={"Title"} name={"title"} />
            <Input
              onChange={handleChange}
              label={"Description"}
              name={"description"}
              className="h-40  w-7/12  border text-sm outline-blue-600 rounded-md hover:outline-blue-400 border-gray-200 indent-2"
            />
            <Input
              onChange={handleChange}
              label={"Phone Number"}
              name={"telephone"}
            />
            <SelectC label={"Type of image"} options={["Person","Animal","Vehicle","House","Player","Place","Artist"]} onChange={handleChange}/>
            <Input onChange={handleChange} label={"Email"} name={"email"} />
          
            <input type="file" onChange={handleFileChange} />
          </span>
          <button
            className="m-auto p-2 bg-blue-600 text-white"
            onClick={handleSubmit}
          >
            {loading ? (
              <FourSquare size="small" color="white" />
            ) : (
              "Generate Post"
            )}
          </button>
        </section>
        {image.length > 0 && <Post pic={image} />}
      </form>
    </div>
  );
}

export default App;
