$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();


    const home = $("input:radio[name=home]:checked").val();
    const feature = $("input:radio[name=feature]:checked").val();
    const hobby = $("input:radio[name=hobby]:checked").val();
    const bff = $("input:radio[name=bff]:checked").val();
    const fur = $("input:radio[name=fur]:checked").val();

    if (home === "space" && feature === "tail" && hobby === "hunt" && bff === "data" && fur === "orange") {
      $("#mcgonagall, #cheshire, #grumpy").hide();
      $("#spot").show();
    } else if (home === "castle" && feature === "magic" && hobby === "quidditch" && bff === "dumbledore" && fur === "stripes") {
      $("#spot, #cheshire, #grumpy").hide();
      $("#mcgonagall").show();
    } else if (home === "wonderland" && feature === "smile" && hobby === "riddle" && bff === "alice" && fur === "pink") {
      $("#spot, #mcgonagall, #grumpy").hide();
      $("#cheshire").show();
    } else {
      $("#spot, #mcgonagall, #cheshire").hide();
      $("#grumpy").show();
    }
  });
});