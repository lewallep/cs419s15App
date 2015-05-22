// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/page1/page1.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var pageOneNavButton = document.getElementById("goPage2");
            pageOneNavButton.addEventListener("click", this.navButton, false);
            
        },

        navButton: function (eventInfo) {
            eventInfo.preventDefault();
            WinJS.Navigation.navigate("/pages/page2/page2.html");
        }
    });
})();
