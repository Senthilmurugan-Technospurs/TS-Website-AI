
function coreValuesAccordian() {
    let cardListCoreData = '';
    for (let i = 0; i < coreValuesList.length; i++) {
        let mode = document.documentElement.dataset.mode
        if (mode === "dark") {
            text = "light-text"
            theme = "bg-darkgreynew-theme"
        }
        else {
            text = "dark-text"
            theme = "bg-lightnew-theme"
        }
        cardListCoreData += '<div class="col-md-6 d-flex align-items-stretch p-0">';
        cardListCoreData += ' <div class="card ' + theme + '">';
        cardListCoreData += '<div class="card-body  ' + text + ' d-flex flex-column py-2">';
        cardListCoreData += '<div class="d-flex">';
        cardListCoreData += '<div class="d-flex flex-column">';
        cardListCoreData += ' <img src=' + coreValuesList[i].logo + ' alt="" class="mb-20" /></div>';
        cardListCoreData += '<a role="button" class="collapse-btn d-none ms-3" onclick="CollapseCore(' + i + ')" style="width: 100%;" > <div class="d-flex justify-content-between mt-3 ms-2">';
        cardListCoreData += '<h5 class="card-title  ' + text + '">' + coreValuesList[i].title + '</h5>';
        cardListCoreData += '<img src="./assets/img/down-arrow.svg" alt="" class="mb-20 mx-3" />';
        cardListCoreData += '</div></a>';
        cardListCoreData += '<div class="services-content ms-4">';
        cardListCoreData += '<h5 class="card-title  ' + text + ' ">' + coreValuesList[i].title + '</h5>';
        cardListCoreData += '<p class="card-text  ' + text + '">' + coreValuesList[i].description + '</p>';
        cardListCoreData += '<div  id="collapsecore_' + i + '" class="collapse">';

        cardListCoreData += '<p class="card-text-mobile  ' + text + '">' + coreValuesList[i].collapseList + '</p>';
        cardListCoreData += '</div></div></div></div>';
        cardListCoreData += '</div></div></div>';
    }
    document.getElementById("core-values-list").innerHTML = cardListCoreData;
}

function CollapseCore(arg, e) {

    let text = "light";
    let style = "";
    let theme = " bg-lightnew-theme"
    let mode = document.documentElement.dataset.mode
    if (mode === "dark") {
        text = "light-text"
        theme = " bg-darkgreynew-theme"
    }
    else {
        text = "dark-text"
        style = "background-color:#FFF0DE!important;"
        theme = " bg-lightnew-theme"
    }
    let List = coreValuesList;
    for (let i = 0; i < List.length; i++) {
        var elements = document.getElementById("collapsecore_" + i);
        if (parseInt(arg) === i) {
        }
        else {

            elements.classList.remove("show");
        }
    }
    var element = document.getElementById("collapsecore_" + arg);
    let classTrue = element.classList.contains("show");
    let cardListCoreData = "";
    for (let i = 0; i < coreValuesList.length; i++) {
        let themeData = ""
        cardListCoreData += '<div class="col-md-6 d-flex align-items-stretch p-0">';
        if (classTrue === true) {
            cardListCoreData += ' <div class="card ' + theme + '">';
            cardListCoreData += ' <div class="card-body  ' + text + '   d-flex flex-column py-2">';
        }
        else {
            if (i === arg) {
                if (mode === "dark") {
                    themeData = "bg-dark-theme"
                }
                else {
                    themeData = "bg-rose-theme"
                }
                cardListCoreData += ' <div class="card ' + themeData + '">';
                cardListCoreData += ' <div class="card-body  ' + text + '   d-flex flex-column py-2" style=' + style + '>';
            }
            else {
                cardListCoreData += ' <div class="card ' + theme + '">';
                cardListCoreData += ' <div class="card-body  ' + text + '   d-flex flex-column py-2">';
            }
        }
        cardListCoreData += '<div class="d-flex">';
        cardListCoreData += '<div class="d-flex flex-column">';
        cardListCoreData += ' <img src=' + coreValuesList[i].logo + ' alt="" class="mb-20" /></div>';
        cardListCoreData += '<a role="button" class="collapse-btn d-none ms-3" onclick="CollapseCore(' + i + ')" style="width: 100%;" > <div class="d-flex justify-content-between mt-3 ms-2">';

        if (classTrue === true) {
            cardListCoreData += '<h5 class="card-title  ' + text + '">' + coreValuesList[i].title + '</h5>';
            cardListCoreData += '<img src="./assets/img/down-arrow.svg" alt="" class="mb-20 mx-3" /> ';
        }
        else {
            if (i === arg) {
                cardListCoreData += '<h5 class="card-title  ' + text + '"  style="color:#EF7717">' + coreValuesList[i].title + '</h5>';
                cardListCoreData += '<img src="./assets/img/up-arrow.svg" alt="" class="mb-20 mt-3 mx-1" /> ';
            }
            else {
                cardListCoreData += '<h5 class="card-title  ' + text + '" >' + coreValuesList[i].title + '</h5>';
                cardListCoreData += '<img src="./assets/img/down-arrow.svg" alt="" class="mb-20 mx-3" /> ';
            }
        }
        cardListCoreData += '</div></a>';
        cardListCoreData += '<div class="services-content ms-4">';
        cardListCoreData += '<h5 class="card-title  ' + text + ' ">' + coreValuesList[i].title + '</h5>';
        cardListCoreData += '<p class="card-text  ' + text + 't">' + coreValuesList[i].description + '</p>';
        cardListCoreData += '</div>';
        cardListCoreData += '</div>';
        if (classTrue === true) {
            cardListCoreData += '<div id="collapsecore_' + i + '" class="collapse">';
        }
        else {
            if (i === arg) {
                cardListCoreData += '<div id="collapsecore_' + i + '" class="collapse show d-flex">';
            }
            else {
                cardListCoreData += '<div id="collapsecore_' + i + '" class="collapse">';
            }
        }
        cardListCoreData += ' <img src=' + coreValuesList[i].logo + ' alt="" class="mb-20 invisible" />';
        cardListCoreData += '<p class="card-text-mobile  ' + text + '  ms-4 me-4">' + coreValuesList[i].collapseList + '</p>';
        cardListCoreData += '</div></div>';
        cardListCoreData += '</div></div></div>';

        document.getElementById("core-values-list").innerHTML = cardListCoreData;
        element.classList.add("show");
    }
}