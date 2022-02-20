let
accordion = document.querySelectorAll(".accordion"),
accordionItem = []
accordionButton = [],
accordionContent = [],
accordionClick = [],
accordionAutoClose = [];

for (let i = 0; i < accordion.length; i++) {
    accordionItem[i] = accordion[i].querySelectorAll(".accordion__item");
    accordionButton[i] = [];
    accordionContent[i] = [];
    accordionClick[i] = [];
    accordionAutoClose[i] = true;
    for(let j = 0; j < accordionItem[i].length; j++) {
        accordionButton[i][j] = accordionItem[i][j].querySelector(".accordion__button")
        accordionContent[i][j] = accordionItem[i][j].querySelector(".accordion__content")


        accordionClick[i][j] = function () {
            if(accordionContent[i][j].style.maxHeight == 0){
                if (accordionAutoClose[i] == true) {
                    for (let z = 0; z < accordionItem[i].length; z++){
                        accordionItem[i][z].classList.remove("accordion__item--enabled");
                        accordionContent[i][z].style.maxHeight = null;
                    }
                }
                accordionItem[i][j].classList.add("accordion__item--enabled");
                accordionContent[i][j].style.maxHeight = accordionContent[i][j].scrollHeight + "px"
            }else { 
                accordionContent[i][j].style.maxHeight = null;
                accordionItem[i][j].classList.remove("accordion__item--enabled");
            }
        }

        accordionButton[i][j].onclick = accordionClick[i][j]
    }    
}

// accordionAutoClose[0] = false;