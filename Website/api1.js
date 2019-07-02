
const request = new XMLHttpRequest();

request.onload = () => {
    const parsedData = JSON.parse(request.responseText);
    console.log('LoadedData', parsedData);
    /* Movies */
    document.getElementById('Title1').append(parsedData[0].title);
    document.getElementById('Title2').append(parsedData[1].title);
    document.getElementById('Title3').append(parsedData[2].title);
    document.getElementById('Title4').append(parsedData[3].title);
    document.getElementById('Title5').append(parsedData[4].title);
    document.getElementById('Title6').append(parsedData[5].title);
    document.getElementById('Title7').append(parsedData[6].title);
    document.getElementById('Title8').append(parsedData[7].title);
    document.getElementById('Title9').append(parsedData[8].title);
    document.getElementById('Title10').append(parsedData[9].title);
    document.getElementById('Title11').append(parsedData[10].title);
    document.getElementById('Title12').append(parsedData[11].title);
    document.getElementById('Title13').append(parsedData[12].title);
    document.getElementById('Title14').append(parsedData[13].title);
    document.getElementById('Title15').append(parsedData[14].title);
    document.getElementById('Title16').append(parsedData[15].title);
    document.getElementById('Title17').append(parsedData[16].title);
    document.getElementById('Title18').append(parsedData[17].title);
    document.getElementById('Title19').append(parsedData[18].title);
    document.getElementById('Title20').append(parsedData[19].title);
    document.getElementById('Title21').append(parsedData[20].title);

    /*Directors*/

    document.getElementById('Director1').append('Director: ', parsedData[0].director);
    document.getElementById('Director2').append('Director: ', parsedData[1].director);
    document.getElementById('Director3').append('Director: ', parsedData[2].director);
    document.getElementById('Director4').append('Director: ', parsedData[3].director);
    document.getElementById('Director5').append('Director: ', parsedData[4].director);
    document.getElementById('Director6').append('Director: ', parsedData[5].director);
    document.getElementById('Director7').append('Director: ', parsedData[6].director);
    document.getElementById('Director8').append('Director: ', parsedData[7].director);
    document.getElementById('Director9').append('Director: ', parsedData[8].director);
    document.getElementById('Director10').append('Director: ', parsedData[9].director);
    document.getElementById('Director11').append('Director: ', parsedData[10].director);
    document.getElementById('Director12').append('Director: ', parsedData[11].director);
    document.getElementById('Director13').append('Director: ', parsedData[12].director);
    document.getElementById('Director14').append('Director: ', parsedData[13].director);
    document.getElementById('Director15').append('Director: ', parsedData[14].director);
    document.getElementById('Director16').append('Director: ', parsedData[15].director);
    document.getElementById('Director17').append('Director: ', parsedData[16].director);
    document.getElementById('Director18').append('Director: ', parsedData[17].director);
    document.getElementById('Director19').append('Director: ', parsedData[18].director);
    document.getElementById('Director20').append('Director: ', parsedData[19].director);
    document.getElementById('Director21').append('Director: ', parsedData[20].director);

    /*Years*/

    document.getElementById('Year1').append('Year: ', parsedData[0].year);
    document.getElementById('Year2').append('Year: ', parsedData[1].year);
    document.getElementById('Year3').append('Year: ', parsedData[2].year);
    document.getElementById('Year4').append('Year: ', parsedData[3].year);
    document.getElementById('Year5').append('Year: ', parsedData[4].year);
    document.getElementById('Year6').append('Year: ', parsedData[5].year);
    document.getElementById('Year7').append('Year: ', parsedData[6].year);
    document.getElementById('Year8').append('Year: ', parsedData[7].year);
    document.getElementById('Year9').append('Year: ', parsedData[8].year);
    document.getElementById('Year10').append('Year: ', parsedData[9].year);
    document.getElementById('Year11').append('Year: ', parsedData[10].year);
    document.getElementById('Year12').append('Year: ', parsedData[11].year);
    document.getElementById('Year13').append('Year: ', parsedData[12].year);
    document.getElementById('Year14').append('Year: ', parsedData[13].year);
    document.getElementById('Year15').append('Year: ', parsedData[14].year);
    document.getElementById('Year16').append('Year: ', parsedData[15].year);
    document.getElementById('Year17').append('Year: ', parsedData[16].year);
    document.getElementById('Year18').append('Year: ', parsedData[17].year);
    document.getElementById('Year19').append('Year: ', parsedData[18].year);
    document.getElementById('Year20').append('Year: ', parsedData[19].year);
    document.getElementById('Year21').append('Year: ', parsedData[20].year);

    /*Runtimes*/

    document.getElementById('Runtime1').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime2').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime3').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime4').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime5').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime6').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime7').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime8').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime9').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime10').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime11').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime12').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime13').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime14').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime15').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime16').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime17').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime18').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime19').append('Year: ', parsedData[0].runtime);
    document.getElementById('Runtime20').append('Year: ', parsedData[0].runtime);

}
request.open('GET', 'http://localhost:8080/api/v1/notes');
request.send();
console.log('sent');