$(document).ready(function () {
  $("#input_money").on("change", function () {
    $("#summ").text($("#input_money").val() + " " + "₽");
  });

  $("#input_month").on("change", function () {
    $("#month").text($("#input_month").val() + " " + "мес.");
  });

  $("#cashback").mouseenter(function () {
    $(".promo_button").hide();
  });

  $("#cashback").mouseleave(function () {
    $(".promo_button").show();
  });
});
