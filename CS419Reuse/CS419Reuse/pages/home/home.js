﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        
        ready: function (element, options) {

            $('.category-select-submit').on('click', function (e) {
                e.preventDefault();
                WinJS.Navigation.navigate('/pages/business-list/business-list.html');
            });

        },
    });
})();