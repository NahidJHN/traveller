const accordian = document.getElementsByClassName("travel_cross-2");
const dataItem = document.getElementsByClassName("accordian-data")
let isShown=false
for (let i = 0; i < dataItem.length; i++) {
    accordian[i].addEventListener("click", function () {
        for (let j = 0; j < accordian.length; j++) {
            let elemt = dataItem[j]
            if (elemt.classList.contains("showData")) {
                elemt.classList.remove("showData")
                elemt.classList.add("hideData")

            }

        }

        if (!isShown) {
            dataItem[i].classList.add("showData")
            dataItem[i].classList.remove("hideData")
            isShown=true
        } else {
            dataItem[i].classList.remove("showData")
            dataItem[i].classList.add("hideData")
            isShown=false
        }
        

    })
}


let elem = document.querySelector('.main-carousel');
let flkty = new Flickity( elem, {
    autoPlay: true,
    freeScroll: true
});

