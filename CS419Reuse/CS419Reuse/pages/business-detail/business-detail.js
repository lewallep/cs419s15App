(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/business-detail/business-detail.html", {
        
        ready: function (element, options) {
           
            $('.left-nav').on('click', function () {
                WinJS.Navigation.navigate('/pages/business-list/business-list.html');
            });

        },

    });
})();
