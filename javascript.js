/* Note: Change load type in the jsfiddle 
 * JavaScript setting into body
 */

function doClick() {
  var searchTerm = document.getElementById('search').value;
  var xhttp = new XMLHttpRequest();
  // When the request is successful, finished, and response is ready, execute these function
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resObj = JSON.parse(xhttp.responseText);

      for (item of resObj.data) {
        console.log(item.link);
        console.log(item.title);
        document.getElementById("search-result").innerHTML +=
          '<div><img src="' + item.link + '" alt="' + item.title + '"/></div>' +
          '<p>' + item.title + '</p>'
        '<p>Favorite: ' + item.favorite_count;
      }

    }
  }
  console.log("https://api.imgur.com/3/gallery/search/top/all/1?q=" + searchTerm)
  // Send an asynchronous HTTP GET request to the given end point (url)
  xhttp.open("GET", "https://api.imgur.com/3/gallery/search/top/all/1?q=" + searchTerm, true);
  xhttp.setRequestHeader("Authorization",
    "Client-ID bc657b47fbb19d3")
  xhttp.send();
}
