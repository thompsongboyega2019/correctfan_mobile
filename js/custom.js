// show & hide trending leagues
 function showOlympics() {
    document.getElementById("olympics_title").classList.add("active");
    document.getElementById("fifty-fifty_title").classList.remove("active");
    document.getElementById("championship_title").classList.remove("active");
    document.getElementById("olympics").style.display = "block";
    document.getElementById("fifty-fifty").style.display = "none"
    document.getElementById("championship").style.display = "none"

 }
 function showChampionship() {
    document.getElementById("olympics_title").classList.remove("active");
    document.getElementById("fifty-fifty_title").classList.remove("active");
    document.getElementById("championship_title").classList.add("active");
    document.getElementById("fifty-fifty").style.display = "none";
    document.getElementById("championship").style.display = "block";
    document.getElementById("olympics").style.display = "none"

 }
 function showFiftyFifty() {
    document.getElementById("olympics_title").classList.remove("active");
    document.getElementById("fifty-fifty_title").classList.add("active");
    document.getElementById("championship_title").classList.remove("active");
    document.getElementById("olympics").style.display = "none";
    document.getElementById("fifty-fifty").style.display = "block";
    document.getElementById("championship").style.display = "none";

 }
 function showAll() {
    document.getElementById("olympics_title").classList.remove("active");
    document.getElementById("fifty-fifty_title").classList.remove("active");
    document.getElementById("championship_title").classList.remove("active");
    document.getElementById("view_all_title").classList.add("active");
    document.getElementById("view_all_title").innerHTML = "All";
    document.getElementById("olympics").style.display = "block";
    document.getElementById("fifty-fifty").style.display = "block";
    document.getElementById("championship").style.display = "block";
    document.getElementsByClassName("trending_loadmore").style.display = "none";

 }
