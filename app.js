(function() {
    document.addEventListener("deviceready", function () {
        var app = new kendo.mobile.Application(document.body, { skin: "flat" });
        navigator.splashscreen.hide();
    });
}());
$("#images").kendoMobileListView({
  dataSource: ["images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg", "images/05.jpg", "images/06.jpg", "images/07.jpg"],
  template: "<img src='#: data #'>"
});
