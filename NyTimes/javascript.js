$(document).ready(function() {

function displayInfo(){
    var keyInput = $(this).attr("data-name");
    var searchTerms = "rock";
    var APIkey = "4XFJoSzvWs8JuFhdPJGCvoHOWGYVFppo";
    
    //click to push into the search parameters
    searchTerms.push(keyInput);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerms + "&api-key=" + APIkey;
    
    
        $.ajax({
            url: queryURL,
            method:'GET'
        }).then(function(check){
            console.log(check);
             var docs = check.response.docs;
                for (var i=0;i<docs.length;i++){
                    console.log(docs[i]);
                }
            })
    };
    //define a class for buttons
    $(document).on("click", displayInfo);
            
            //$("#search-terms")
});
/* <div id="search-terms"></div>
    <div id="no-records"></div>
    <div id="start-year"></div>
    <div id="end-year"></div>
    <div id="button-row"></div>
    <div id="top-articles"></div> */
