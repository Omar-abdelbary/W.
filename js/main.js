


//  toggle menu to nav bar 

let toggle_menu = document.querySelector("header nav .toggle-menu") ;  
let icon = document.querySelector("header nav .toggle-menu i ") ;
let list = document.querySelector("header nav ul ")  ; 

toggle_menu.addEventListener("click"  , function () {
    list.classList.toggle("show") ; 
    icon.classList.toggle("fa-close")
}) ;  

//  end toggle to nav bar =





//  scroll to change background to nav bar 


let header = document.querySelector("header") ; 

let main = document.querySelector(".main") ; 





window.addEventListener("scroll" , function () {
    
    let window_scroll = window.scrollY ; 

    if ( window_scroll >= 20 ) {

        header.style.backgroundColor = "#fff" 
        header.style.boxShadow = "2px 2px darkred"

    } else {
        
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none"
    }
})
