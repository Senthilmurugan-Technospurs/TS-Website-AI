function technologyAccordian() {
    let cardListStackData = '';
    for (let i = 0; i < technologyStack.length; i++) {
        let mode = document.documentElement.dataset.mode
        if (mode === "dark") {
            text = "light-text"
            theme = "bg-darkgreynew-theme"
        }
        else {
            text = "dark-text"
            theme = "bg-lightnew-theme"
        }
        cardListStackData += '<div class="col-md-6 d-flex p-2 align-items-stretch"><div class="card ' + theme + '"> <div class="card-body light-text d-flex flex-column justify-content-around align-items-center py-2">';
        cardListStackData += '<a role="button" class="collapse-btn d-none" onclick="CollapseStack(' + i + ')" style="width: 100%;" > <div class="d-flex justify-content-between">';
        cardListStackData += '<h5 class="card-title ' + text + '">' + technologyStack[i].title + '</h5><img src = "./assets/img/down-arrow.svg" alt = "" class="mb-20 mx-3" /> ';
        cardListStackData += '</div></a>';
        cardListStackData += ' <div class="services-content"><h5 class="card-title  ' + text + '" > ' + technologyStack[i].title + '</h5 ><p class="card-text mx-5 dark-text">' + technologyStack[i].description + '</p>';
        let innerList = "";
        for (let j = 0; j < technologyStack[i].logoList.length; j++) {
            innerList += ' <img src=' + technologyStack[i].logoList[j] + ' alt="" class="img-fluid m-2" />'
        }
        cardListStackData += '    <div class="d-flex flex-row bg-white w-100 mb-5 mt-3 py-2 justify-content-center overflow-hdden flex-wrap" >' + innerList + '</div>  </div>';
        cardListStackData += '<div id="collapsestack_' + i + '" class="collapse">';
        cardListStackData += '<p class="card-text mx-4">' + technologyStack[i].collapseList + '</p>';
        cardListStackData += '<div class="d-flex flex-row bg-white w-100 mb-5 mt-3 p-2 justify-content-start overflow-hdden flex-wrap">' + innerList + '</div> </div>';
        cardListStackData += '</div> </div> </div>';
    }
    document.getElementById("technology-stack-list").innerHTML = cardListStackData;
}
function CollapseStack(arg, e) {
    let text = "light";
    let style = "";
    let secontaryStyle = "color:#212529";
    let theme = " bg-lightnew-theme"
    let mode = document.documentElement.dataset.mode

    if (mode === "dark") {
        text = "light-text"
        theme = " bg-darkgreynew-theme"
        secontaryStyle = "color:#FFFFFF";
    }
    else {
        secontaryStyle = "color:#212529";
        text = "dark-text"
        style = "background-color:#FFF0DE!important;"
        theme = " bg-lightnew-theme"
    }
    let List = technologyStack;
    for (let i = 0; i < List.length; i++) {
        var elements = document.getElementById("collapsestack_" + i);
        if (parseInt(arg) === i) {
        }
        else {

            elements.classList.remove("show");
        }
    }
    var element = document.getElementById("collapsestack_" + arg);
    let classTrue = element.classList.contains("show");
    let cardListStackData = "";
    for (let i = 0; i < technologyStack.length; i++) {
        let themeData = ""
        if (classTrue === true) {
            cardListStackData += '<div class="col-md-6 d-flex align-items-stretch"><div class="card ' + theme + '">';
            cardListStackData += ' <div class="card-body  ' + text + '  d-flex flex-column justify-content-around align-items-center py-2">';
        }
        else {
            if (i === arg) {
                if (mode === "dark") {
                    themeData = "bg-dark-theme"
                }
                else {
                    themeData = "bg-rose-theme"
                }
                cardListStackData += '<div class="col-md-6 d-flex align-items-stretch"><div class="card ' + themeData + '">';
                cardListStackData += ' <div class="card-body  ' + text + '  d-flex flex-column justify-content-around align-items-center py-2" style=' + style + '>';
            }
            else {
                cardListStackData += '<div class="col-md-6 d-flex align-items-stretch"><div class="card ' + theme + '">';
                cardListStackData += ' <div class="card-body  ' + text + '  d-flex flex-column justify-content-around align-items-center py-2">';
            }
        }
        cardListStackData += '<a role="button" class="collapse-btn d-none" onclick="CollapseStack(' + i + ')" style="width: 100%;" > <div class="d-flex justify-content-between">';

        if (classTrue === true) {
            cardListStackData += '<h5 class="card-title  ' + text + ' " >' + technologyStack[i].title + '</h5>';
            cardListStackData += '<img src="./assets/img/down-arrow.svg" alt="" class="mb-20 mx-3" /> ';
        }
        else {
            if (i === arg) {
                cardListStackData += '<h5 class="card-title  ' + text + ' " style="color:#EF7717">' + technologyStack[i].title + '</h5>';
                cardListStackData += '<img src="./assets/img/up-arrow.svg" alt="" class="mb-20 mx-2 mt-3" /> ';
            }
            else {
                cardListStackData += '<h5 class="card-title  ' + text + ' " >' + technologyStack[i].title + '</h5>';
                cardListStackData += '<img src="./assets/img/down-arrow.svg" alt="" class="mb-20 mx-3" /> ';
            }
        }
        cardListStackData += '</div></a>';
        cardListStackData += ' <div class="services-content"><h5 class="card-title  ' + text + ' " > ' + technologyStack[i].title + '</h5 ><p class="card-text mx-5" style=' + secontaryStyle + '>' + technologyStack[i].description + '</p>';
        let innerList = "";
        for (let j = 0; j < technologyStack[i].logoList.length; j++) {
            innerList += ' <img src=' + technologyStack[i].logoList[j] + ' alt="" class="img-fluid m-2" />'
        }
        cardListStackData += '    <div class="d-flex flex-row bg-white w-100 mb-5 mt-3 py-2 justify-content-center overflow-hdden flex-wrap" >' + innerList + '</div>  </div>';
        if (classTrue === true) {
            cardListStackData += '<div id="collapsestack_' + i + '" class="collapse">';
        }
        else {
            if (i === arg) {
                cardListStackData += '<div id="collapsestack_' + i + '" class="collapse show">';
            }
            else {
                cardListStackData += '<div id="collapsestack_' + i + '" class="collapse">';
            }
        }
        cardListStackData += '<p class="card-text mx-4 mb-4">' + technologyStack[i].collapseList + '</p>';
        cardListStackData += '<div class="d-flex flex-row bg-white w-100 mb-3 mt-3 p-2 justify-content-start overflow-hdden flex-wrap">' + innerList + '</div> </div>';
        cardListStackData += '</div> </div> </div>';

        document.getElementById("technology-stack-list").innerHTML = cardListStackData;
        element.classList.add("show");
    }
}