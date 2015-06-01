(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/business-list/business-list.html", {
        
        ready: function (element, options) {

            var cat_name = WinJS.Application.sessionState.catName;
            var cat_id = WinJS.Application.sessionState.catID;

            var c = new Windows.Web.Http.HttpClient();
            c.getStringAsync(new Windows.Foundation.Uri("http://web.engr.oregonstate.edu/~adamjosh/419/api.php?type=business&catid=" + cat_id))
                .done(function (result) {
                    var jsonResult = JSON.parse(result);
                    if (jsonResult.length > 0) {
                        var template_element = document.querySelector('#business-row-template');
                        var render_element = document.querySelector('#business-rows');
                        render_element.innerHTML = '';
                        var template_control = template_element.winControl;
                        $.each(jsonResult, function () {
                            template_control.render(this).done(function (result) {
                                render_element.appendChild(result);
                            });
                        });
                    }
                });

            $('.pagetitle').text(cat_name);

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