function addTitle(title, ori, pop, lan) {

  var tempData = {
    title : title,
    ori : ori,
    pop : pop,
    lan : lan
  }

  var template = $("#film-template").html();
  var compile = Handlebars.compile(template)
  var li = compile(tempData)

  var ulFilm = $(".films")
  ulFilm.append(li)
}


function ajaxTest(title) {

  var outData = {

    api_key : "13102f4888b3e87f7409cfcc6aa1cf1e",
    language : "it-IT",
    query : title
  }
  $.ajax({
    url : "https://api.themoviedb.org/3/search/movie",
    data : outData,
    method : "GET",
    success : function (data) {

    var res = data.results;
    for (var i = 0; i < res.length; i++) {
      var ress = res[i]
      var title = ress.title;
      var ori = ress.original_title
      var pop = ress.vote_average;
      var lan = ress.original_language;
       addTitle(title, ori, pop, lan)
    }
    },
    error : function (request, state, error) {

    }
  })
}

// function searchContact() {
//
//   var me = $(this)
//   var searchText = me.val()
//
//   var contactWrappers = $(".contacts")
//   contactWrappers.removeClass("hide")
//   for (var i = 0; i < contactWrappers.length; i++) {
//     var contactWrapper = contactWrappers.eq(i)
//     var name = contactWrapper.find("b").text().toLowerCase();
//     if (!name.includes(searchText)) {
//       contactWrapper.addClass("hide");
//     }
//   }
// }
//

function btnClick() {
  var btn = $("#my-btn")
  btn.click(function () {
    var text = $("#search-title").val()
    ajaxTest(text)
  })
}

// function searchTitle(title) {
//
//   var me = $(this)
//   var searchText = me.val()
//   var searchTitle = $("input#search-title")// var received = $(".message-wrapper.receivede")
//
//   if (title.includes(ress) && e.which ==  13) {
//     addTitle(title, ori, pop, lan)



    // var txt = me.val()
    // me.val("")
    //
    // var htmlMsg = addTitle(title, ori, pop, lan );
    // wrapper.append(htmlMsg);
    //
    // setTimeout( function () {
    //
    //
    //   ajaxCall()
    // }, 3000);

// }
// }



function init() {
  btnClick()
}
$(document).ready(init)
