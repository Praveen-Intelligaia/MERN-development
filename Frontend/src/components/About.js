import React,{Component,useState, useEffect} from 'react';
import axios from 'axios';

const About=()=>{
  const [users, setUserdata] =useState([]);
  useEffect(()=>{ 
    axios.get('/user/About', {
  })
  .then((response) => {
    console.log(response)
    setUserdata(response.data.users)
  })
  .catch(err =>{
    console.log(err)
  })
},[])
const deleteUser =async(id)=>{
    // console.log(_id)
    window.alert(id);
    await axios.delete(`/user/About'/${id}`);
    
  } 
  

  return(
        <div className="table" method='GET'>
                    <table class="table table-striped table-dark">
  <thead>
    <tr class="d-flex">
    <th scope="col">Id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Operation</th>

    </tr>
  </thead>
  <tbody>{
    users.map(function(user,key){
      return(
    <tr >
      <td class="d-flex">{user._id}</td>
      {/* <td key={key}>{key+1}</td> */}
              <td scope="col">{user.firstname}</td>  
              <td scope="col">{user.lastname}</td>  
              <td  scope="col">{user.email}</td>
              <td>
              {/* <i class="material-icons" onClick={()=>deleteUser(user._id)}>delete</i> */}
              <button id="deletebtn" onClick={()=>{
                  deleteUser(user._id)
              }}>Delete</button>
              </td>
              {/* <a href={`/view/${user._id}`} className="w3-button w3-black">Link Button</a> */}
    </tr>
      )})
}
  </tbody>
</table>
    </div>
    )
}

export default About