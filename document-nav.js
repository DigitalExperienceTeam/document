$(document).ready(function() {

  var href;
  var section;
  var next;
  var prev;

  function linkClick(href) {
    
     section = href.split('-')[0];

    if (section.substring(0, 1) == "#") {

      next = parseInt(section.substring(8)) + 1;
      prev = next - 2;
      pageChanger(prev, next, section);

      $(".nav-item a").each(function(index) {
        if ($(this).attr("href") == section) {
          $(this).addClass("disabled").append('<span class="sr-only">(current)</span>');
        }

      });

    }

  }

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

    next = "#section" + next;
    prev = "#section" + prev;
    $(".next-page").attr("href", next);
    $(".prev-page").attr("href", prev);

    // hides and show relevant sections

    $(".doc-section").addClass("visuallyhidden");
    $(section).removeClass("visuallyhidden");

    // Removes disabled clasees from left hand nav
    $(".nav-item a").removeClass("disabled");
    $(".nav-item a span").remove(".sr-only");

  }

  // When left hand nav is clicked

  $(".nav-item a").click(function() {
    href = $(this).attr("href");

    linkClick(href);

  });
  
  // When link on page is clicked

  $(".doc-section a").click(function() {
    href = $(this).attr("href");

linkClick(href);
   
 const element = document.getElementById(href);
      element.scrollIntoView();

  });


  // When Next or Previous is clicked

  $(".page-link").click(function() {
    
      href = $(this).attr("href");

    linkClick(href);

  });

});