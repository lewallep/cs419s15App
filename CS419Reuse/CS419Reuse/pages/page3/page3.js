// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/page3/page3.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var pageThreeNavButton = document.getElementById("goPage4");
            pageThreeNavButton.addEventListener("click", this.navButton, false);

        },

        navButton: function (eventInfo) {
            eventInfo.preventDefault();
            WinJS.Navigation.navigate("/pages/page4/page4.html");
        }
    });
})();
