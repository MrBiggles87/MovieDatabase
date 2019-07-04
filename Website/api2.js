

function test(yearFrom,yearTo) {

   // alert("hello"+ yearFrom+"..."+ yearTo);
        const request = new XMLHttpRequest();
        request.onreadystatechange=function(){
                console.log("=>",request.responseText)
                const parsedData = JSON.parse(request.responseText);
                console.log('sent');

                console.log('LoadedData', parsedData);
                console.log('elements', parsedData.length);
               
                var titles=document.getElementById('Titles');
                titles.innerHTML=""; 
                for( var i=0;i< parsedData.length;i++){
                    var newTitle=document.createElement("h4");
                    newTitle.innerHTML=parsedData[i].title + "<i> Directed by </i> <b>  " +parsedData[i].director + "</b> created in " +parsedData[i].year + " with a runtime of " +parsedData[i].runtime + "" ;
                    titles.append(newTitle);
                }

            
        }
        request.open('GET', 'http://localhost:8080/api/v1/listmovies/'+yearFrom+'/'+yearTo);
        request.send();
  

}
