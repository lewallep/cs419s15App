(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/business-map/business-map.html", {
        
        ready: function (element, options) {
            
            $('.left-nav').on('click', function () {
                WinJS.Navigation.navigate('/pages/home/home.html');
            });

            $('.right-nav').on('click', function () {
                WinJS.Navigation.navigate('/pages/business-list/business-list.html');
            });

        },
    });
})();