const container = document.getElementById("container");
const init_cells =20;
const scoreSpan = document.getElementById("score");
const cellNumbers = document.getElementById("cellNumbers")
const button = document.getElementById("restart")
let num_colors=2;
let arrayDelete=[];
let idinterval ;
function setInterval1() {
  clearInterval(idinterval)
  idinterval = setInterval(createCell,2000)
}

function createCell() {
  const cell = document.createElement("div")
  cell.classList.add('cell')
  let randomcolor = Math.floor(Math.random()*num_colors)+1
  cell.classList.add("color"+randomcolor)
  cell.setAttribute("onclick","removeCell(this)")
  container.append(cell);
  refreshCells()
}

function removeCell(cell){
  checkBefore(cell)
  checkAfter(cell)
  
  if (arrayDelete.length>=1) {
    cell.remove()
    arrayDelete.forEach(cell => cell.remove())
    scoreSpan.textContent = parseInt(arrayDelete.length)+ parseInt(scoreSpan.textContent)+1
    arrayDelete=[]
    refreshCells()
    if (container.children.length==0) {
      clearInterval(idinterval)
      container.innerHTML = "<h1>GANASTE</h1>"
      document.getElementById("restart").disabled = false;
    }
  }
  else[
    arrayDelete=[]
  ]

}
function start() {
  container.textContent="";
  for (let i = 0; i < init_cells; i++) {
    createCell();
}  

document.getElementById("restart").disabled = true;
setInterval1()
}
function checkBefore(cell) {
  if (cell.nextElementSibling&&cell.outerHTML == cell.nextElementSibling.outerHTML) {
    arrayDelete.push(cell.nextElementSibling)
    checkBefore(cell.nextElementSibling)
  }

}
function checkAfter(cell) {
 
  if (cell.previousElementSibling&&cell.outerHTML == cell.previousElementSibling.outerHTML) {
    arrayDelete.push(cell.previousElementSibling)
    checkAfter(cell.previousElementSibling)
  }
}
function refreshCells() {
  cellNumbers.textContent = container.children.length
}
start()
refreshCells()



