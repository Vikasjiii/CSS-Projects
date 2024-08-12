const dropDowns=document.querySelectorAll('.dropdown-menu')



dropDowns.forEach((dropDown)=>{
    console.log(dropDown);
    dropDown.addEventListener('click',()=>{
        dropDown.classList.toggle('clicked')
    })
    

})