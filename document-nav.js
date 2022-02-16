$(document).ready(function() {
  

  var href;
  var section;
  var next;
  var prev;


  function pageChanger(prev, next, section) {
    
    // disables previous and next when necessary

    if (prev > 0) {
      $(".prev-page").parent().removeClass("disabled");
      $(".prev-page").parent().remove(".sr-only");
      $(".prev-page").attr("id", "tab-index='1'");
    }

    else {
      $(".prev-page").parent().addClass("disabled");
      $(".prev-page").parent().append('<span class="sr-only">(current)</span>');
      $(".prev-page").attr("id", "tab-index='-1'");
    }

    if (next == $(".navbar-nav li").length + 1) {
      $(".next-page").parent().addClass("disabled");
      $(".next-page").parent().append('<span class="sr-only">(current)</span>');
      $(".next-page").attr("id", "tab-index='-1'");
    }

    else {
      $(".next-page").parent().removeClass("disabled");
      $(".next-page").parent().remove(".sr-only");
      $(".next-page").attr("id", "tab-index='1'");
    }
    
    // changes ids of prev and next buttons

    next = "p" + next;
    prev = "p" + prev;
    $(".next-page").parent().attr("id", next);
    $(".prev-page").parent().attr("id", prev);
    
    // hides and show relavant sections

    $(".doc-section").hide();
    $(section).show();
    
    // Removes disabled clasees from left hand nav
    $(".nav-item a").removeClass("disabled");
    $(".nav-item a span").remove(".sr-only");

  }
  
  // When left hand nav is clicked

  $(".nav-item a").click(function() {
    href = $(this).attr("href");
    section = "#section" + href.substring(1);
    next = parseInt(href.substring(1)) + 1;
    prev = next - 2;
    pageChanger(prev, next, section);
    $(this).addClass("disabled").append('<span class="sr-only">(current)</span>');
  });


 // When Next is clicked
 
  $(".next-page").click(function() {
    page = $(this).parent().attr("id");

    section = "#section" + page.substring(1);

    href = "#" + page.substring(1);


    var next = parseInt(href.substring(1)) + 1;
    var prev = next - 2;

    pageChanger(prev, next, section);

    $(".nav-item a").each(function(index) {
      if ($(this).attr("href") == href) {
        $(this).addClass("disabled").append('<span class="sr-only">(current)</span>');
      }
    });

  });
  
  // When Previous is clicked

  $(".prev-page").click(function() {
    page = $(this).parent().attr("id");
    section = "#section" + page.substring(1);
    href = "#" + page.substring(1);

    prev = parseInt(href.substring(1)) - 1;
    next = prev + 2;

    pageChanger(prev, next, section);

    $(".nav-item a").each(function(index) {
      if ($(this).attr("href") == href) {
        $(this).addClass("disabled").append('<span class="sr-only">(current)</span>');
      }
    });

  });

});