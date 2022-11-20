// CRUD-  Create, Read, Update & Delete
// global variables
var row=null;
function Submit(){
    var dataEntered=retrieveData();
    var readData=readingDataFromLocalStorage(dataEntered);
    if(dataEntered==false)
    {
        msg.innerHTML("Please Enter Data!!");
    }
    else{
        if(row==null){
            insert(readData);
            msg.innerHTML="DATA INSERTED";
        }else{
            update();
            msg.innerHTML="DATA UPDATED";
        }
       
    }
    document.getElementById("form").reset();
   
}

//CREATE
// Retrieving data from local storage
function retrieveData()
{
    var name1=document.getElementById("name").value;
    var job=document.getElementById("job").value;
    var exp=document.getElementById("experience").value;
    var arr=[name1,job,exp];
   if(arr.includes("")){
    return false;
   }
    else{
        return arr;
    }
}
//READ
// Data in LocalStorage
function readingDataFromLocalStorage(dataEntered)
{
    var n=localStorage.setItem("Name", dataEntered[0]);
    var j=localStorage.setItem("Job", dataEntered[1]);
    var e=localStorage.setItem("Experience", dataEntered[2]);

    var n1=localStorage.getItem("Name", n);
    var j1=localStorage.getItem("Job", j);
    var e1=localStorage.getItem("Experience", e);
    var arr=[n1,j1,e1];
    return arr;
}
//INSERT
function insert(readData)
{
     row=table.insertRow();
    row.insertCell(0).innerHTML=readData[0]; 
    row.insertCell(1).innerHTML=readData[1]; 
    row.insertCell(2).innerHTML=readData[2];
    row.insertCell(3).innerHTML=`<button onclick=edit(this )>Edit</button>
                                 <button onclick=remove(this )>Delete</button>`;     
}
//EDIT
function edit(ss){
    var row=ss.parentElement.parentElement;
    document.getElementById("name").value=row.cells[0].innerHTML;
    document.getElementById("job").value=row.cells[1].innerHTML;
    document.getElementById("experience").value=row.cells[2].innerHTML;

}
//UPDATE
function update()
{
    row.cells[0].innerHTML= document.getElementById("name").value;
    row.cells[1].innerHTML= document.getElementById("job").value;
    row.cells[2].innerHTML= document.getElementById("experience").value;
    row=null;
}
//DELETE
function remove(ss)
{
  var ans= confirm("Are you sure you want to delete this record?");
  if(ans==true){
    row=ss.parentElement.parentElement;
    document.getElementById("table").deleteRow(row,rowIndex);
  }
}