import { useContext, useState } from 'react';
import './write.css'
import axios from "axios";
import {Context} from "../../context/Context"

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [photo, setPhoto] = useState("https://cdn.wallpapersafari.com/38/54/m41owu.jpg");
    const [cat,setCat] = useState("")
    const {user} = useContext(Context)
    const URL = "https://blog-jainakshat.herokuapp.com/api";

    const handleSubmit =async (e) =>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            photo,
            title,
            desc,
            categories:cat.toLowerCase(),
        }
        try{
        const res = await axios.post(URL+"/posts", newPost);
        window.location.replace("/post/"+res.data._id);
        }catch(err){

        }
    }

  return <div className='write'>
      <img className='writeImg' src={photo} alt="" />
      <form className='writeForm' onSubmit={handleSubmit}>
        <input type="text" className='imageUrl' value={photo} placeholder='Image Address' onChange={e => setPhoto(e.target.value)} />
        <input type="text" className='imageUrl' value={cat}  placeholder='category' onChange={e => setCat((e.target.value).toLowerCase())} />
          <div className="writeFormGroup">
              <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e =>setTitle(e.target.value)}/>
          </div>
          
          <div className="writeFormGroup2">
          <button className="writeSubmit" type='submit'>Publish</button>
              <textarea placeholder='Tell Your Story...' type="text" className='writeText' onChange={e =>setDesc(e.target.value)}></textarea>
          </div>
          
      </form>
  </div>;
}
