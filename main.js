//task two
let add=document.querySelector(".classes-to-add");
let remove=document.querySelector(".classes-to-remove");
let current=document.querySelector("[title = 'Current']");
let cls=document.querySelector(".classes-list div");
function operation(){
    document.querySelectorAll("span").forEach(ele => ele.remove());
    for(let i=0;i<this.value.trim().split(" ").length;i++)
    {
        if(add.value)
            current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
        if(remove.value) 
            current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
    }
    this.value="";
    if(current.classList.length)
        {
           [...current.classList].sort().forEach(el => {
               let sppan=document.createElement("span");
               sppan.textContent = el;
               cls.appendChild(sppan);
           });
        }
        else cls.textContent="no classes";
}
add.onblur = operation;
remove.onblur = operation;

