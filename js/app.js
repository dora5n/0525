$("#test").on("click", function () {
  // jqueryを使ってhtmlを操作します

  $(".box__content-title").html("押されました");
  $(".box__content-title").css("color", "red");
  $(".box__content-title").fadeOut(2000);
  // $(".icon").attr("src", "https://ishiichan.com/sns/img/header/icon.jpg");

  // この下消さない
});