let itemClick = document.querySelectorAll(".admin__item")
let adminInfo = document.querySelectorAll(".admin__info")

for (let i = 0; i < itemClick.length; i++) {
    itemClick[i].addEventListener("click",(e) => {
        let itemClickChildren = e.target.parentElement.children;
        for (let j = 0; j < itemClickChildren.length; j++) {
            itemClickChildren[j].classList.remove("admin__item-active");
        }
        itemClick[i].classList.add("admin__item-active");
        let adminInfoChildren = adminInfo;
        for (let t = 0; t < adminInfoChildren.length; t++) {
            adminInfoChildren[t].classList.remove("admin__info-active")
        }
        adminInfo[i].classList.add("admin__info-active");
    })
}