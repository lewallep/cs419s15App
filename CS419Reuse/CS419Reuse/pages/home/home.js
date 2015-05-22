(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var pageHomeNavButton = document.getElementById("goPage1");
            pageHomeNavButton.addEventListener("click", this.navButton, false);
        },

        navButton: function (eventInfo) {
            eventInfo.preventDefault();
            WinJS.Navigation.navigate("/pages/page1/page1.html");
        }
    });
})();
