 list1.style.display = "none";
let btn1 = () => {
    let list = document.getElementById("list1")
    let list2 = document.getElementById("list2")
    let list3 = document.getElementById("list3")
    if (list.style.display == "none") {
        list.style.display = "block"
        list2.style.display = "none"
        list3.style.display = "none"
    } else {
        list.style.display = "none"
    }
}
// ========= 2
list2.style.display = "none";
let btn2 = () => {
    let list2 = document.getElementById("list2")
    let list = document.getElementById("list1")
    let list3 = document.getElementById("list3")
    if (list2.style.display == "none") {
        list2.style.display = "block"
        list1.style.display = "none"
        list3.style.display = "none"
    } else {
        list2.style.display = "none"
    }
}
// ======== 3
list3.style.display = "none";
let btn3 = () => {
    let list3 = document.getElementById("list3")
    let list2 = document.getElementById("list2")
    let list = document.getElementById("list1")
    if (list3.style.display == "none") {
        list3.style.display = "block"
        list2.style.display = "none"
        list1.style.display = "none"
    } else {
        list3.style.display = "none"
    }
}
// ============
dropMenu.style.display = "none";
let hamburger = () => {
    let drop = document.getElementById("dropMenu")
    if (drop.style.display == "none") {
        drop.style.display = "block"
    } else {
        drop.style.animationName = "up"
        setTimeout(() => (drop.style.display = "none"),700)
    }
}
let dropList = () => {
    let drop = document.getElementById("dropMenu")
    if (drop.style.display == "block") {
        drop.style.display = "none"
    } else {
        drop.style.display = "block"
    }
}