let newlistbtn = document.getElementById("addbtn");
let newlistbox = document.getElementById("box");
let closeListbtn = document.getElementById("close");

//---------
let addInput = document.getElementById("addinput");
let addbtn = document.getElementById("additem");

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

function deletex(x) {
   listItem.splice(x,1)
   render()
}
//show and hide box - newlist
newlistbtn.addEventListener('click', ()=> {
   newlistbox.classList.add("show")
})

closeListbtn.addEventListener('click', ()=> {
   newlistbox.classList.remove("show")
})





//*****save new list 