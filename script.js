/* ========================= Typing Animation ========================= */
let typed = new Typed(".typing", {
    strings:["Information Systems student.", "interested in neuroscience."],
    typeSpeed: 200,
    BackSpeed: 90,
    loop: true
})

/* ######## Aside section ######## */
const nav = document.querySelector(".nav"),
   navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
  
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {
        for (let i = 0; i < totalSection; i++) 
        {allSection[i].classList.remove("back-section")} 
            removeBackSection();
        
            for (let j = 0; j < totalNavList; j++) {
                if (navList[j].querySelector("a").classList.contains("active")) {
                //console.log("back-section" + navList[j].querySelector("a"))//
                //allSection[j].classList.add("back-section");
                addBackSection(j);
            }

            navList[j].querySelector("a").classList.remove("active")
        }

        this.classList.add("active")
        showSection(this);
        //do this after setup before after toggle nav //
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
///last part >>
function removeBackSection() {
    for (let i = 0; i < totalNavList; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection() {
    for (let i = 0; i < totalNavList; i++) {
        allSection[i].classList.add("back-section")
    }
}
/// << last part

function showSection(element) {
    //to hide section page //
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    //to show section page //
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
////


function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];

        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
////
document.querySelector().addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
    })
////
// Nav toggler Btn //
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");

        for (let i = 0; i < totalNavList; i++) {
            allSection[i].classList.toggle("open");
        }
    }