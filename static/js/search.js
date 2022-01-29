$(document).ready(function () {
    // Popup Window;
    var isfetched = false;
    // Search DB path;
    // TO-DO Seems not found best way 
    var pre_sch_path = window.location.href.indexOf('/en/') > -1 ? '/en/' : "/"
    var search_path = "searchindex.xml";
    var path = pre_sch_path + search_path;
    // monitor main search box;
    function proceedsearch() {
      $("body").append('<div class="popoverlay local-search-pop-overlay">').css('overflow', 'hide');
      $('.popup').fadeIn('slow');
    }
    // search function;
    var searchFunc = function(path, search_id, content_id) {
        'use strict';
        $.ajax({
            url: path,
            dataType: "text",
            async: true,
            success: function( xmlResponse ) {
                // get the contents from search data                
                isfetched = true;
                $('.popup').detach().appendTo('.header-inner');
                var datas = $( "entry", xmlResponse ).map(function() {
                    return {
                        title: $( "title", this ).text(),
                        content: $("content",this).text(),
                        url: $( "url" , this).text()
                    };
                }).get();
                var $input = document.getElementById(search_id);
                var $resultContent = document.getElementById(content_id);
                $input.addEventListener('input', function(){
                    var matchcounts = 0;
                    var str='<ul class=\"search-result-list\">';
                    var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                    $resultContent.innerHTML = "";
                    if (this.value.trim().length > 1) {
                    // perform local searching
                    datas.forEach(function(data) {
                        var isMatch = true;
                        var content_index = [];
                        var data_title = data.title.trim().toLowerCase();
                        var data_content = data.content.trim().replace(/<[^>]+>/g,"").toLowerCase();
                        var data_url = data.url;
                        var index_title = -1;
                        var index_content = -1;
                        var first_occur = -1;
                        // only match artiles with not empty titles and contents
                        if(data_title != '' && data_content != '') {
                            keywords.forEach(function(keyword, i) {
                                index_title = data_title.indexOf(keyword);
                                index_content = data_content.indexOf(keyword);
                                if( index_title < 0 && index_content < 0 ){
                                    isMatch = false;
                                } else {
                                    if (index_content < 0) {
                                        index_content = 0;
                                    }
                                    if (i == 0) {
                                        first_occur = index_content;
                                    }
                                }
                            });
                        }
                        // show search results
                        if (isMatch) {
                            matchcounts += 1;
                            keywords.forEach(function(keyword){
                                var regS = new RegExp(keyword, "gi");
                                data_title = data_title.replace(regS, "<span class=\"search-title-keyword\">" + keyword + "</span>");
                            });
                            str += "<li><a href='"+ data_url +"' class='search-result-title'>"+ data_title +"</a>";
                            var content = data.content.trim().replace(/<[^>]+>/g,"");
                            if (first_occur >= 0) {
                                // cut out 100 characters
                                var start = first_occur - 20;
                                var end = first_occur + 80;
                                if(start < 0){
                                    start = 0;
                                }
                                if(start == 0){
                                    end = 50;
                                }
                                if(end > content.length){
                                    end = content.length;
                                }
                                var match_content = content.substring(start, end);
                                // highlight all keywords
                                keywords.forEach(function(keyword){
                                    var regS = new RegExp(keyword, "gi");
                                    match_content = match_content.replace(regS, "<b class=\"search-keyword\">"+keyword+"</b>");
                                });

                                str += "<p class=\"search-result\">" + match_content +"...</p>"
                            }
                            str += "</li>";
                        }
                    })};
                    str += "</ul>";

                    var rs_cnt = "<div class='search-stats'><b>"+matchcounts
                    if (pre_sch_path == '/') {
                        rs_cnt += " </b>个结果被找到！"
                    } else {
                        rs_cnt += " </b>results found!"

                    }
                    rs_cnt += "</div><hr/>"
                    str = rs_cnt + str

                    if (matchcounts == 0) { str = '<div id="no-result"><i class="fa fa-frown-o fa-5x" /></div>' }                    
                    if (keywords == "") { str = '<div id="no-result"><i class="fa fa-search fa-5x" /></div>' } 

                    $resultContent.innerHTML = str;
                });
                proceedsearch();
            }
        });
    }

    // handle and trigger popup window;
    $('.popup-trigger').click(function(e) {
        e.stopPropagation();
        //TODO why here need timeout, couldn't understand it.
        setTimeout(() => $('#local-search-input').focus(), 500);
      
        if (isfetched == false) {
            searchFunc(path, 'local-search-input', 'local-search-result');
        } else {     
            proceedsearch();
        };
    });

    $('.popup-btn-close').click(function(e){
      $('.popup').fadeOut('slow');
      $(".popoverlay").remove();
      $('body').css('overflow', '');
    });

    $('.popup').click(function(e){
      e.stopPropagation();
    });
});