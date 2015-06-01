(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/business-map/business-map.html", {
        
        ready: function (element, options) {

            var cat_name = WinJS.Application.sessionState.catName;
            var cat_id = WinJS.Application.sessionState.catID;

            var c = new Windows.Web.Http.HttpClient();
            c.getStringAsync(new Windows.Foundation.Uri("http://web.engr.oregonstate.edu/~adamjosh/419/api.php?type=business&catid=" + cat_id))
                .done(function (result) {
                    var jsonResult = JSON.parse(result);
                    if (jsonResult.length > 0) {
                        // do stuff with data
                    }
                });

            $('.pagetitle').text(cat_name);
            
            $('.left-nav').on('click', function () {
                WinJS.Navigation.navigate('/pages/home/home.html');
            });

            $('.right-nav').on('click', function () {
                WinJS.Navigation.navigate('/pages/business-list/business-list.html');
            });

        },
    });
})();