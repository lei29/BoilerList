/**
 * Created by mattchiou1 on 10/1/16.
 */
function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}



$("#Dissolve").on("click",function(){
	alert("lololol")
})
