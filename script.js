let newlistbtn = document.getElementById("addbtn");
let newlistbox = document.getElementById("box");
let closeListbtn = document.getElementById("close");
//--------- create new list dome
let addInput = document.getElementById("addinput");
let addbtn = document.getElementById("additem");
let saveBtn = document.getElementById('save')
// user name and mob no.
let costName = document.getElementById("user-name")
let mobNo = document.getElementById("mobile")
let finallistdom = document.getElementById("final-list")
// database
let finalarr = [];
let listItem = [];

function additem() {
   let value = addInput.value;
   if (!value) return;
   
   let finditem = items.find(x => x.id == value );
   
   if (finditem){
      listItem.push(finditem);
      console.log(listItem);
      render();
      addInput.value = "";
   } else {
      return console.log('item not found')
   }
}

function render() {
   let item = document.getElementById("list-box");
   let rows = `
      <table>
         <tr>
            <th>sn.</th>
            <th>Name</th>
            <th>GQ.</th>
            <th>Pr.</th>
            <th>Q.</th>
            <th>P.</th>
            <th>x</th>
         </tr>
   `;

   listItem.forEach((x, index) => {
      rows += `
         <tr>
            <td>${index + 1}</td>
            <td>${x.name}</td>
            <td>${x.generalQuality}</td>
            <td>${x.price}</td>
            <td contenteditable="true">1</td>
            <td>${x.price}</td>
            <td><i class="fa-solid fa-xmark remove-item" onclick='deletex(${index})'></i></td>
         </tr>
      `;
   });

   rows += `</table>`;
   item.innerHTML = rows;
}

// keypress Enter key eventlistner
addInput.addEventListener('keypress', (e)=>{
   if(e.key === 'Enter'){
      additem()
   }
})
//-------
addbtn.addEventListener('click', ()=> {
   additem();
})



/*document.getElementById("list-box").addEventListener("click", function(e) {
   if (e.target.classList.contains("remove-item")) {
      const rowIndex = e.target.closest("tr").rowIndex - 1; // Minus header
      listItem.splice(rowIndex, 1);
      render();
   }
});*/

//delete fun. for delete item from lists
function deletex(x) {
   listItem.splice(x,1)
   render()
}



//show and hide box - newlist
function openlist() {
   newlistbox.classList.add("show")
}
function closelist() {
   newlistbox.classList.remove("show")
}
newlistbtn.addEventListener('click', openlist )
closeListbtn.addEventListener('click', closelist )


//*****save btn fun. to save new list
saveBtn.addEventListener('click', ()=>{
   let xName = costName.value;
   let mobile = mobNo.value;
   if (xName.length > 0 && mobile.length > 9 && listItem.length > 0) {
      finalarr.push({ name: xName, mob: mobile, item: [...listItem] })

      console.log('finalarr')
      console.log(finalarr)
      
      listItem = [];
      render()
      costName.value = '';
      mobNo.value = '';
      addInput.value = '';
      closelist();
      renderfinal()
   } else if (xName.length < 1) {
      alert('fill name');
   } else if (mobile.length < 10) {
      alert('fill mobile number');
   } else if (listItem.length < 1) {
      alert('add some item');
   }
})

//render finallist
function renderfinal() {
   let row = `
      <table>
      <tr class="table-head">
         <th>S N.</th>
         <th class="name">Name</th>
         <th>ID.</th>
         <th>Quality</th>
         <th class="tp">Total-Price</th>
         <th>option</th>
      </tr>
   `
   finalarr.forEach((x, index)=>{
      row += `
         <tr>
         <td>${index+1}</td>
         <td>${x.name}</td>
         <td>01</td>
         <td>${x.item.length}</td>
         <td>800</td>
         <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
      </tr>
      `
   })
   row += `</table>`
   finallistdom.innerHTML = row ;   
}