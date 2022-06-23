async function storage(event){
    event.preventDefault();

    try{
    let name=event.target.username.value;
    let email=event.target.emailid.value;
    let phno=event.target.phonenumber.value;

    let obj={
        name,
        email,
        phno
    }

    
         const response =await axios.post("https://crudcrud.com/api/9b0ac1dc17a54bd7b88aec6158ce3027/appoinmentdata",obj)
    
        displayDetails(response.data)
        console.log(response)
    }

    catch(err) {
        document.body.innerHTML=document.body.innerHTML + "<h1 style=color:red;>something went wrong</h1>"
        console.log(err)
    }
     
}



window.addEventListener('DOMContentLoaded',async (event) => {

    try{
    const res= await axios.get("https://crudcrud.com/api/9b0ac1dc17a54bd7b88aec6158ce3027/appoinmentdata")

    for(var i=0;i<res.data.length;i++){
        displayDetails(res.data[i])
    }
    }
    catch(err){
        console.log(err)
    }
})



function displayDetails(show){

   
    let parentNode=document.getElementById('li');
    let childNode=`<li id=${show._id}>${show.name} - ${show.email} - ${show.phno}
                   <button onclick=deleteuser('${show._id}')>delete</button>
                   <button onclick=edituser('${show.email}','${show.name}','${show.phno}','${show._id}')>edit</button>
                   </li>`;

    parentNode.innerHTML=parentNode.innerHTML + childNode;
}

function edituser(email,name,phno,userId){

    document.getElementById('name').value=name;

    document.getElementById('email').value=email;
  
    document.getElementById('number').value=phno;

    deleteuser(userId);
}

async function deleteuser(userId){

    try{
   const del= axios.delete(`https://crudcrud.com/api/9b0ac1dc17a54bd7b88aec6158ce3027/appoinmentdata/${userId}`)
    
        deleteuserinscreen(userId)
    }
    catch(err){
        console.log(err)
        
    }

}
function deleteuserinscreen(userId){
 let parentNode=document.getElementById('li');
 let childNode=document.getElementById(userId);

 
if(childNode){

 parentNode.removeChild(childNode);
}
}



