import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import me from "../images/me.jpg"

export default function Sidebar() {
const[posts, setPosts] = useState([])
const [distinct, setDistinct] = useState([])
const URL = "https://blog-jainakshat.herokuapp.com/api";

useEffect(() =>{
  const fetchPosts = async () =>{
   const response = await axios.get(URL+"/posts")
   setPosts(response.data);
  }
  fetchPosts();
},[])
useEffect(() =>{
  var lookup = []
posts.forEach(p =>{
  let lower = (p.categories).toLowerCase()
  if (!(lower in lookup) && lower !== "") {
    
    lookup.push(lower);
  }
})
let unique = lookup.filter((item, i, ar) => ar.indexOf(item) === i);
setDistinct(unique);
},[posts])


  return <div className='sidebar'>
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className='me' src={me} alt="" />
          <p>Hi, I am Akshat Jain.</p>
      </div>


      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {distinct.map(p =>(
            <Link to={`/?cat=${p}`} className='link' key={p}>
            <li className="sidebarListItem" >{p}</li></Link>
          ))}    
        </ul>
      </div>


      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocials">
        <a href="https://www.linkedin.com/in/15-jain-akshat/"><i className="sidebarIcon fab fa-linkedin-in"/></a>
        <a href="https://github.com/jainakshat15"><i className="sidebarIcon fab fa-github"/></a>
        <a href="https://www.instagram.com/jainakshat._15/"><i className="sidebarIcon fab fa-instagram"/></a>
        </div>
      </div>
  </div>;
}
