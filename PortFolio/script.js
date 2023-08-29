let title = document.querySelector(".mainh");
let newname = "WebDeveloper";
let index = 1;
const typewriter=()=>{
      let new_title = newname.slice(0,index);
      title.innerText = new_title;
      index > newname.length?index=1:index++;
      setTimeout(()=>{
        typewriter()
      },300)
}
typewriter();

let titlen = document.querySelector(".abouth");
let newnamen = "Developer";

let indexn = 1;
const typewritern=()=>{
      let new_titlen = newnamen.slice(0,indexn);
      titlen.innerText = new_titlen;
      indexn > newnamen.length?indexn=1:indexn++;
      setTimeout(()=>{
        typewritern();
      },300)
}
typewritern();



// function setNewImage(){
// //    alert("hello")
// document.querySelector("#responsive").id="#sanika"
// }
// function setoldimage(){
//     document.querySelector("#responsive").src="../Portfolio/image/p1.jpg"
// }