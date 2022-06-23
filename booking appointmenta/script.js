function storage(event){
    event.preventDefault();

    let name=event.target.username.value;
    let email=event.target.emailid.value;
    let phno=event.target.phonenumber.value;

    let obj={
        name,
        email,
        phno
    }

    axios.post("https://crudcrud.com/api/a426c76aea314de5b8971e5c1ed37dc1/appoinmentdata",obj)
    .then((response) =>{
        displayDetails(response.data)
        console.log(response)
    })

    .catch((err) => {
        document.body.innerHTML=document.body.innerHTML + "<h1 style=color:red;>something went wrong</h1>"
        console.log(err)
    })
     

}


window.addEventListener('DOMContentLoaded', (event) => {

    axios.get("https://crudcrud.com/api/a426c76aea314de5b8971e5c1ed37dc1/appoinmentdata")
    .then((response)=>{
        console.log(response)

        for(var i=0;i<response.data.length;i++){
            displayDetails(response.data[i])
        }
    })

    .catch((err)=>{
        console.log(err)
    })


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

function deleteuser(userId){

    axios.delete(`https://crudcrud.com/api/a426c76aea314de5b8971e5c1ed37dc1/appoinmentdata/${userId}`)
    .then((response)=>{
        deleteuserinscreen(userId)
    })
    .catch((err)=>{
        console.log(err)
        
    })

}
function deleteuserinscreen(userId){
 let parentNode=document.getElementById('li');
 let childNode=document.getElementById(userId);

 
if(childNode){

 parentNode.removeChild(childNode);
}
}