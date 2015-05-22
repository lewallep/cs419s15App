// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/page4/page4.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var pageFourNavButton = document.getElementById("goPage5");
            pageFourNavButton.addEventListener("click", this.navButton, false);

        },

        navButton: function (eventInfo) {
            eventInfo.preventDefault();
            WinJS.Navigation.navigate("/pages/page5/page5.html");
        }
    });
})();
