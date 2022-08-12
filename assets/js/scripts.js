function passValid(campo) {
    var login = $('#login').val();
    var senha = $('#senha').val();
    
    if (login == "" || senha == "" || login != "rafael" || senha != "expert") {
        $('#errorPass').css("display", "flex")
        $('#errorPass').css("justify-content", "center")         
        $('.inputForm').attr('placeholder', '')
    } 
    else {
        document.location.href = "../assets/pages/portal.html"
    }   
}

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ?
                (link.style.animation = "") :
                (link.style.animation = `navLinkFade 0.5s ease forwards ${
    index / 7 + 0.3
  }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

$(".inputs").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#btLogar").click();
    }
});
$("#login").focus(function(){
    $(this).css("opacity", "100%");
    $(this).attr("placeholder", "");
});
$("#senha").focus(function(){
    $(this).css("opacity", "100%");
    $(this).attr("placeholder", "");
});
$('#login').blur(function(){
    $(this).css("opacity", "50%");
    $(this).attr("placeholder", "Usuário");
});
$("#senha").blur(function(){
    $(this).css("opacity", "50%");
    $(this).attr("placeholder", "Senha");
});

$(".mobile-menu").click(function () {
    $('.container').toggleClass('active');
});


function relatorio1(){
    var rel = document.querySelector("#relatorio");
    rel.setAttribute('src', 'https://app.powerbi.com/view?r=eyJrIjoiYTkzOGU2OTQtZmRiYS00ZTQ5LTllMWMtNmNhNzdjMTlhNGIzIiwidCI6ImM1MzYyNjkzLTQ1NGYtNDE0NS1hZjFiLWM5OTFjNzlmNjY2ZSJ9');
}

function relatorio2(){
    var rel = document.querySelector("#relatorio");
    rel.setAttribute('src', 'https://app.powerbi.com/view?r=eyJrIjoiNzdiNDNlOWUtZDFiNC00OTljLTg0NjMtNjEzMzM3N2UzZTlhIiwidCI6ImY3NzVhODAwLTQ4NmItNDkzNS05ZTE3LTBkYWNmYWE5OWRlMSJ9');
}

function relatorio3(){
    var rel = document.querySelector("#relatorio");
    rel.setAttribute('src', 'https://app.powerbi.com/view?r=eyJrIjoiNTJmY2RiZjYtZTQyNi00YzVmLWIxYzAtMjEyODk4YjZhMzAzIiwidCI6ImY3NzVhODAwLTQ4NmItNDkzNS05ZTE3LTBkYWNmYWE5OWRlMSJ9');
}

function relatorio4(){
    var rel = document.querySelector("#relatorio");
    rel.setAttribute('src', 'https://app.powerbi.com/view?r=eyJrIjoiNTk1MWFhZDQtZjNhMy00OTJiLWJhMjQtMGNjNmQ2MTQ4OTY3IiwidCI6ImY3NzVhODAwLTQ4NmItNDkzNS05ZTE3LTBkYWNmYWE5OWRlMSJ9');
}
function relatorio5(){
    var rel = document.querySelector("#relatorio");
    rel.setAttribute('src', 'https://app.powerbi.com/view?r=eyJrIjoiYWIwNTg4OGUtYmRlOS00MzE2LTliMTQtYjg1MWQyOGQzZmU0IiwidCI6ImY3NzVhODAwLTQ4NmItNDkzNS05ZTE3LTBkYWNmYWE5OWRlMSJ9');
}
