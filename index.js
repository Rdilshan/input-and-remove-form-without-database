
const enterbtn = document.getElementsByClassName('enter')[0];
const inputtext = document.getElementsByClassName("inputenter")[0];

enterbtn.addEventListener('click',getelement);

function getelement(){
  const text = inputtext.value;

  var newitem = document.createElement('li');
  newitem.textContent = text;
  const con = document.getElementsByClassName("ulclass")[0];

  con.appendChild(newitem);
  inputtext.value = ''

  const removebtn = document.createElement("button")
  removebtn.textContent = 'X'
  newitem.appendChild(removebtn);
  removebtn.addEventListener("click",function(){
    newitem.style.display = 'none'
  })

}

