// show & hide trending leagues
 function showOlympics() {
    document.getElementById("olympics_title").classList.add("active");
    document.getElementById("fifty-fifty_title").classList.remove("active");
    document.getElementById("championship_title").classList.remove("active");
    document.getElementById("olympics").style.display = "block";
    document.getElementById("fifty-fifty").style.display = "none"
    document.getElementById("championship").style.display = "none"
    document.getElementById("view_all_title").innerHTML = "VIEW ALL";
    document.getElementById("fifty_fifty_loadmore_btn_div").style.display = "block";
    document.getElementById("olympics_loadmore_btn_div").style.display = "block";
    document.getElementById("championship_loadmore_btn_div").style.display = "block";

 }
 function showChampionship() {
    document.getElementById("olympics_title").classList.remove("active");
    document.getElementById("fifty-fifty_title").classList.remove("active");
    document.getElementById("championship_title").classList.add("active");
    document.getElementById("fifty-fifty").style.display = "none";
    document.getElementById("championship").style.display = "block";
    document.getElementById("olympics").style.display = "none";
    document.getElementById("view_all_title").innerHTML = "VIEW ALL";
    document.getElementById("fifty_fifty_loadmore_btn_div").style.display = "block";
    document.getElementById("olympics_loadmore_btn_div").style.display = "block";
    document.getElementById("championship_loadmore_btn_div").style.display = "block";

 }
 function showFiftyFifty() {
    document.getElementById("olympics_title").classList.remove("active");
    document.getElementById("fifty-fifty_title").classList.add("active");
    document.getElementById("championship_title").classList.remove("active");
    document.getElementById("olympics").style.display = "none";
    document.getElementById("fifty-fifty").style.display = "block";
    document.getElementById("championship").style.display = "none";
    document.getElementById("view_all_title").innerHTML = "VIEW ALL";
    document.getElementById("fifty_fifty_loadmore_btn_div").style.display = "block";
    document.getElementById("olympics_loadmore_btn_div").style.display = "block";
    document.getElementById("championship_loadmore_btn_div").style.display = "block";

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
    document.getElementById("fifty_fifty_loadmore_btn_div").style.display = "none";
    document.getElementById("olympics_loadmore_btn_div").style.display = "none";
    document.getElementById("championship_loadmore_btn_div").style.display = "none";

 }

 // switch contests & my leagues
 function showContests() {
   document.getElementById("contests_div").style.display = "block";
   document.getElementById("myLeagues_div").style.display = "none";
   document.getElementById("contests_btn").classList.add("active");
   document.getElementById("myLeagues_btn").classList.remove("active");
 }
 function showmyLeagues() {
   document.getElementById("contests_div").style.display = "none";
   document.getElementById("myLeagues_div").style.display = "block";
   document.getElementById("contests_btn").classList.remove("active");
   document.getElementById("myLeagues_btn").classList.add("active");
 }
