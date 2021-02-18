let items = document.querySelectorAll('.item')

// for (const el of document.querySelectorAll('.filters ul')) {
//     el.onclick = function(){
//         filter(el.dataset.filter)
//     }
//     console.log("🚀 ~ file: filter.js ~ line 13 ~ el.dataset.filter", el.dataset.filter)

// }
for (let index = 0; index < document.querySelectorAll('.filters ul li').length; index++) {
    const element = document.querySelectorAll('.filters ul li')[index];
    element.onclick = function(){
        filter(element.dataset.filter)
    }
    console.log(element.dataset.filter)

}



// console.log(document.querySelectorAll('.filters ul li'))

function filter(filterName){
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if(filterName == "all"){
            element.style.display="block"
        }
        else if (element.dataset.filter.includes(filterName) == false){
            element.style.display = "none"
        }
        else if(element.dataset.filter.includes(filterName)){
            element.style.display = "block"
        }
        console.log(element, element.dataset.filter.includes(filterName) ,filterName)
    }
}