function serviceAccordian() {
    matchwidth = window.matchMedia("(max-width: 991px)");
    let cardListData = '';
    for (let i = 0; i < cardList.length; i++) {

        let mode = document.documentElement.dataset.mode
        if (mode === "dark") {
            text = "light-text"
        }
        else {
            text = "dark-text"
        }
        if (matchwidth.matches)
            cardListData += '<div class="col col-md-4 col-sm-6 col-6 d-flex  align-items-baseline"  onclick="Collapse(' + i + ')" >';
        else
            cardListData += '<div class="col col-md-4 col-sm-6 col-6 d-flex  align-items-baseline" >';
        if (i % 2 === 0)
            cardListData += '<div class="card ms-3">';
        else
            cardListData += '<div class="card me-3">';
        cardListData += '<div class="card-body d-flex flex-column align-items-center">';
        cardListData += '<img src=' + cardList[i].logo + ' alt="" class="img-fluid mb-20" />';
        cardListData += '<h5 class="card-title ' + text + ' mobile-content d-none" style="min-height: 80px; max-height:80px;" >' + cardList[i].title + '</h5>';
        cardListData += '<h5 class="card-title  ' + text + ' services-content">' + cardList[i].title + '</h5>';
        cardListData += ' <p class="card-text services-content  ' + text + '"> ' + cardList[i].description + '</p>';
        cardListData += '<div id="collapse_' + i + '" class="collapse">';
        cardListData += ' <p class="card-text light-text">' + cardList[i].collapseList + '</p> </div>';
        cardListData += '<button type="button" class="btn btn-info1 collapse-btn d-none mb-2">';
        cardListData += '<img src="./assets/img/down-arrow.svg" alt="" class="img-fluid mb-20" />';
        cardListData += '</button></div></div></div>'
    }
    document.getElementById("service-card-list").innerHTML = cardListData;
}
function Collapse(arg, e) {
    let text = "dark";
    let style = "";
    let mode = document.documentElement.dataset.mode
    if (mode === "dark") {
        style = "background-color:#212529;"
        text = "light-text"
    }
    else {
        text = "dark-text"
        style = "background-color:#FFF0DE;"

    }
    let List = cardList;
    for (let i = 0; i < List.length; i++) {
        var elements = document.getElementById("collapse_" + i);
        if (parseInt(arg) === i) {
        }
        else {
            elements.classList.remove("show");
        }
    }
    var element = document.getElementById("collapse_" + arg);
    let classTrue = element.classList.contains("show");
    let cardListData = "";
    for (let i = 0; i < cardList.length; i++) {

        if (matchwidth.matches)
            cardListData += '<div class="col col-md-4 col-sm-6 col-6 d-flex  align-items-baseline"  onclick="Collapse(' + i + ')" >';
        else
            cardListData += '<div class="col col-md-4 col-sm-6 col-6 d-flex  align-items-baseline" >';
        if (i % 2 === 0)
            cardListData += '<div class="card ms-3">';
        else
            cardListData += '<div class="card me-3">';
        if (classTrue === true) {
            cardListData += '<div class="card-body d-flex flex-column align-items-center"  id="service_' + i + '">';
        }
        else {
            if (i === arg) {
                cardListData += '<div class="card-body d-flex flex-column align-items-center" id="service_' + i + '" style=' + style + '>';
            }
            else {
                cardListData += '<div class="card-body d-flex flex-column align-items-center"  id="service_' + i + '">';
            }
        }
        cardListData += '<img src=' + cardList[i].logo + ' alt="" class="img-fluid mb-20" />';
        if (classTrue === true) {
            cardListData += '<h5 class="card-title ' + text + '"title="' + cardList[i].collapseList + '"style="min-height: 80px; max-height:80px;" >' + cardList[i].title + '</span>' + '</h5>';
        }
        else {
            if (i === arg) {
                cardListData += '<h5 class="card-title ' + text + '"  style="color:#EF7717;">' + cardList[i].title + '</h5>';
            }
            else {
                cardListData += '<h5 class="card-title ' + text + '"title="' + cardList[i].collapseList + '"style="min-height: 80px; max-height:80px;" >' + cardList[i].title + '</h5>';
            }
        }
        cardListData += ' <p class="card-text services-content ' + text + '"> ' + cardList[i].description + '</p>';
        if (classTrue === true) {
            cardListData += '<div id="collapse_' + i + '" class="collapse">';
        }
        else {
            if (i === arg) {
                cardListData += '<div id="collapse_' + i + '" class="collapse show">';
            }
            else {
                cardListData += '<div id="collapse_' + i + '" class="collapse">';
            }
        }

        cardListData += ' <p class="card-text ' + text + '" style="font-size:14px;font-weight:500;">' + cardList[i].collapseList + '</p> </div>';

        if (classTrue === true) {
            cardListData += '<button type="button" class="btn btn-info1 collapse-btn d-none mb-2">';
            cardListData += '<img src="./assets/img/down-arrow.svg" alt="" class="img-fluid mb-20" />';
        }
        else {
            if (i === arg) {
                cardListData += '<button type="button" class="btn btn-info1 collapse-btn d-none  mt-4">';
                cardListData += '<img src="./assets/img/up-arrow.svg" alt="" class="img-fluid mb-20" />';
            }
            else {
                cardListData += '<button type="button" class="btn btn-info1 collapse-btn d-none mb-2">';
                cardListData += '<img src="./assets/img/down-arrow.svg" alt="" class="img-fluid mb-20" />';
            }
        }

        cardListData += '</button></div></div></div>'

        document.getElementById("service-card-list").innerHTML = cardListData;
        element.classList.add("show");
    }
}

