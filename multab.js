  jQuery(document).ready(function($){
                $(".tabs-widget-content-widget-themater_tabs-1432447472-id").hide();
                $("ul.tabs-widget-widget-themater_tabs-1432447472-id li:first a").addClass("tabs-widget-current").show();
                $(".tabs-widget-content-widget-themater_tabs-1432447472-id:first").show();
      
                $("ul.tabs-widget-widget-themater_tabs-1432447472-id li a").click(function() {
                    $("ul.tabs-widget-widget-themater_tabs-1432447472-id li a").removeClass("tabs-widget-current a");
                    $(this).addClass("tabs-widget-current");
                    $(".tabs-widget-content-widget-themater_tabs-1432447472-id").hide();
                    var activeTab = $(this).attr("href");
                    $(activeTab).fadeIn();
                    return false;
                });
            });       

