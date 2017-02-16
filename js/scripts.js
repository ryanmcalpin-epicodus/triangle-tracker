$(document).ready(function(){
  $("#triangles").submit(function(){
    event.preventDefault();
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    if (!sideA || !sideB || !sideC) {
      alert("Please enter all side lengths!");
    } else if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA || sideA === 0 || sideB === 0 || sideC === 0) {
      $(".result").text("Not a triangle!");
    } else if (sideA === sideB && sideA === sideC) {
      $(".result").text("Equilateral!");
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      $(".result").text("Isosceles!");
    } else {
      $(".result").text("Scalene!");
    }


  });

});
