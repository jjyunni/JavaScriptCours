let listMenu = document.querySelectorAll('li') //selects all <li>s

listMenu.forEach(item => {
    item.addEventListener('click', function() {
        listMenu.forEach(menu => menu.classList.remove("active"));
        this.classList.add('active'); //for every button when the button is clicked it will remove all bold letterings and bold the only one we clicked on 

        document.querySelectorAll(".sect").forEach(content => {
            content.classList.remove("show-content");
            content.classList.add("hide");
        }); //this removes showed content previously incase there is 

        if (this.classList.contains('tabmenu1')){
            document.getElementById("content1").classList.remove("hide");
            document.getElementById("content1").classList.add("show-content");
        } else if (this.classList.contains('tabmenu2')){
            document.getElementById("content2").classList.remove("hide");
            document.getElementById("content2").classList.add("show-content");
        } else if (this.classList.contains('tabmenu3')){
            document.getElementById("content3").classList.remove("hide");
            document.getElementById("content3").classList.add("show-content");
        } //if the tab we clicked is (1,2,3) then it will show the content below
    })
})