const form=document.querySelector('form');
const inputFile=form.querySelector('.file-input');
const fileArray=[]
form.addEventListener('click',()=>{
    inputFile.click();
})

inputFile.onchange=(e)=>{
    let file=e.target.files[0];
    if(file){
        const fileSize=(file.size/1048576).toFixed(2);
        const fileDetails=document.querySelector('.row')
        fileDetails.innerHTML=`<div class="content">
        <i class="fa-solid fa-file"></i>
        <div class="details">
          <span class="name">${file.name}</span>
        </div>
      </div>
      <span class="size">${fileSize}MB</span>`
      fileArray.push({name:file.name,size:fileSize}) 
      console.log(fileArray)
    }

}



function upload() {

  addValuesToTable();
  console.log('click')
}
function addValuesToTable(){
  let hmtl="";
    const table=document.getElementById('table')
    for (let index = 0; index < fileArray.length; index++) {
      const element = fileArray[index];
      hmtl=hmtl+`<tr>
    <td>${index+1}</td>
    <td>${element.name}</td>
    <td>${element.size}MB</td>
    <td><button><i class="fa-solid fa-download"></i>Download</button></td>
    </tr>
   `
    }
    table.innerHTML=hmtl;
}


function reload(){
  upload()
}