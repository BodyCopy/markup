let widgets = document.querySelectorAll('.widget-wrapper');
const grid = document.querySelector('.widget-grid');
const dashboardWrapper = document.querySelector('.dashboard-wrapper');

const doSomething = function(w){
    this.classList.toggle('full-width-cell');
    
}

widgets.forEach((w)=>{
    w.addEventListener('click', doSomething)
})



window.addEventListener("load", maintainSize);
window.addEventListener("resize", maintainSize);


function maintainSize (){
    const gridData = getGridData(grid);
    console.log(gridData.gridColumnCount);
    dashboardWrapper.style.setProperty('--column-gaps',gridData.gridColumnCount);
    dashboardWrapper.style.setProperty('--side-cards',gridData.gridColumnSizes[0] + 'px');
}

//Column measurer

function getGridData () {
    // calc computed style
  const gridComputedStyle = window.getComputedStyle(grid);
  
  return {
    // get number of grid rows
    gridRowCount: gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length,
    // get number of grid columns
    gridColumnCount: gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length,
    // get grid row sizes
    gridRowSizes: gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").map(parseFloat),
    // get grid column sizes
    gridColumnSizes: gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").map(parseFloat)
  }
}