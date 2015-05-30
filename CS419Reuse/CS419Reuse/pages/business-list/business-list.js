(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/business-list/business-list.html", {
        
        ready: function (element, options) {

            $('.left-nav').on('click', function () {
                WinJS.Navigation.navigate('/pages/home/home.html');
            });
            
            $('.right-nav').on('click', function () {
                WinJS.Navigation.navigate('/pages/business-map/business-map.html');
            });

            $('.business-row').on('click', function () {
                WinJS.Navigation.navigate('/pages/business-detail/business-detail.html');
            });

        },
    });
})();