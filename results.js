// for specific websites
var s = document.getElementById("s");
var sa = document.getElementById("sa");
if (location.search.split("=")[1] == "google") {
document.getElementById("com").innerHTML = "Google - search the world's information <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
s.innerHTML = "Google";
sa.href = "https://www.google.com/";
} else if (location.search.split("=")[1] == "Google") {
document.getElementById("com").innerHTML = "Google - search the world's information <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
s.innerHTML = "Google";
sa.href = "https://www.google.com/";
} else if (location.search.split("=")[1] == "yandex") {
document.getElementById("com").innerHTML = "Yandex.com - official site <span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
document.getElementById("ru").innerHTML = "Яндекс - официальный сайт <span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
s.innerHTML = "Yandex";
sa.href = "https://yandex.com/";
} else if (location.search.split("=")[1] == "Yandex") {
document.getElementById("com").innerHTML = "Yandex.com - official site <span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
document.getElementById("ru").innerHTML = "Яндекс - официальный сайт <span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
s.innerHTML = "Yandex";
sa.href = "https://yandex.com/";
} else if (location.search.split("=")[1] == "gmail") {
document.getElementById("com").innerHTML = "Gmail - email from Google <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices'>person_search</span>";
s.innerHTML = "Gmail";
sa.href = "https://gmail.com/";
} else if (location.search.split("=")[1] == "Gmail") {
document.getElementById("com").innerHTML = "Gmail - email from Google <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices'>person_search</span>";
s.innerHTML = "Gmail";
sa.href = "https://gmail.com/";
} else if (location.search.split("=")[1] == "YouTube") {
document.getElementById("com").innerHTML = "YouTube - enjoy your favorite videos <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices'>person_search</span>";
s.innerHTML = "YouTube";
sa.href = "https://youtube.com/";
} else if (location.search.split("=")[1] == "Youtube") {
document.getElementById("com").innerHTML = "YouTube - enjoy your favorite videos <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices'>person_search</span>";
s.innerHTML = "YouTube";
sa.href = "https://youtube.com/";
} else if (location.search.split("=")[1] == "youtube") {
document.getElementById("com").innerHTML = "YouTube - enjoy your favorite videos <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices'>person_search</span>";
s.innerHTML = "YouTube";
sa.href = "https://youtube.com/";
} else if (location.search.split("=")[1] == "YouTube") {
document.getElementById("com").innerHTML = "YouTube - enjoy your favorite videos <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices'>person_search</span>";
s.innerHTML = "YouTube";
sa.href = "https://youtube.com/";
} else if (location.search.split("=")[1] == "apple") {
document.getElementById("com").innerHTML = "Apple - official site <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Verified Apple, Inc'>lock</span>";
} else if (location.search.split("=")[1] == "Apple") {
document.getElementById("com").innerHTML = "Apple - official site <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Verified Apple, Inc'>lock</span>";
} else if (location.search.split("=")[1] == "ecosia") {
document.getElementById("com").innerHTML = "Ecosia - the search engine that plants trees <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Carbon negative company'>grass</span>";
s.innerHTML = "Ecosia";
sa.href = "https://ecosia.org/";
} else if (location.search.split("=")[1] == "Ecosia") {
document.getElementById("com").innerHTML = "Ecosia - the search engine that plants trees <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Carbon negative company'>grass</span>";
s.innerHTML = "Ecosia";
sa.href = "https://ecosia.org/";
} else if (location.search.split("=")[1] == "wikipedia") {
document.getElementById("com").innerHTML = "Wikipedia - the free encyclopedia <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
s.innerHTML = "Wikipedia";
sa.href = "https://wikipedia.org/";
} else if (location.search.split("=")[1] == "Wikipedia") {
document.getElementById("com").innerHTML = "Wikipedia - the free encyclopedia <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
s.innerHTML = "Wikipedia";
sa.href = "https://wikipedia.org/";
} else if (location.search.split("=")[1] == "github") {
document.getElementById("com").innerHTML = "GitHub - where the world builds software <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
} else if (location.search.split("=")[1] == "Github") {
document.getElementById("com").innerHTML = "GitHub - where the world builds software <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
} else if (location.search.split("=")[1] == "GitHub") {
document.getElementById("com").innerHTML = "GitHub - where the world builds software <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
} else if (location.search.split("=")[1] == "mail") {
document.getElementById("ru").innerHTML = "Mail.ru <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practces - AVOID'>lock_open</span>";
} else if (location.search.split("=")[1] == "Mail") {
document.getElementById("ru").innerHTML = "Mail.ru <span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practces - AVOID'>lock_open</span>";
} else if (location.search.split("=")[1] == "google+classroom") {
  document.getElementById("com").innerHTML = "Google Classroom - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://classroom.google.com/h";
  s.innerHTML = "Classroom";
  sa.href = "https://classroom.google.com/";
} else if (location.search.split("=")[1] == "google+Classroom") {
  document.getElementById("com").innerHTML = "Google Classroom - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://classroom.google.com/h";
  s.innerHTML = "Classroom";
  sa.href = "https://classroom.google.com/";
} else if (location.search.split("=")[1] == "Google+classroom") {
  document.getElementById("com").innerHTML = "Google Classroom - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://classroom.google.com/h";
  s.innerHTML = "Classroom";
  sa.href = "https://classroom.google.com/";
} else if (location.search.split("=")[1] == "Google+Classroom") {
  document.getElementById("com").innerHTML = "Google Classroom - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://classroom.google.com/h";
  s.innerHTML = "Classroom";
  sa.href = "https://classroom.google.com/";
} else if (location.search.split("=")[1] == "google+maps") {
  document.getElementById("com").innerHTML = "Google Maps - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://maps.google.com";
  s.innerHTML = "Maps";
  sa.href = "https://maps.google.com/";
} else if (location.search.split("=")[1] == "google+Maps") {
  document.getElementById("com").innerHTML = "Google Maps - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://maps.google.com";
  s.innerHTML = "Maps";
  sa.href = "https://maps.google.com/";
} else if (location.search.split("=")[1] == "Google+maps") {
  document.getElementById("com").innerHTML = "Google Maps - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://maps.google.com";
  s.innerHTML = "Maps";
  sa.href = "https://maps.google.com/";
} else if (location.search.split("=")[1] == "Google+Maps") {
  document.getElementById("com").innerHTML = "Google Maps - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://maps.google.com";
  s.innerHTML = "Maps";
  sa.href = "https://maps.google.com/";
} else if (location.search.split("=")[1] == "google+drive") {
  document.getElementById("com").innerHTML = "Google Drive - official site<span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://drive.google.com";
  s.innerHTML = "Drive";
  sa.href = "https://drive.google.com/";
} else if (location.search.split("=")[1] == "google+Drive") {
  document.getElementById("com").innerHTML = "Google Drive - official site<span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://drive.google.com";
  s.innerHTML = "Drive";
  sa.href = "https://drive.google.com/";
} else if (location.search.split("=")[1] == "Google+drive") {
  document.getElementById("com").innerHTML = "Google Drive - official site<span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://drive.google.com";
  s.innerHTML = "Drive";
  sa.href = "https://drive.google.com/";
} else if (location.search.split("=")[1] == "Google+Drive") {
  document.getElementById("com").innerHTML = "Google Drive - official site<span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://drive.google.com";
  s.innerHTML = "Drive";
  sa.href = "https://drive.google.com/";
} else if (location.search.split("=")[1] == "google+docs") {
  document.getElementById("com").innerHTML = "Google Docs - create and edit documents<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://docs.google.com";
  s.innerHTML = "Docs";
  sa.href = "https://docs.google.com/";
} else if (location.search.split("=")[1] == "google+Docs") {
  document.getElementById("com").innerHTML = "Google Docs - create and edit documents<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://docs.google.com";
  s.innerHTML = "Docs";
  sa.href = "https://docs.google.com/";
} else if (location.search.split("=")[1] == "Google+docs") {
  document.getElementById("com").innerHTML = "Google Docs - create and edit documents<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://docs.google.com";
  s.innerHTML = "Docs";
  sa.href = "https://docs.google.com/";
} else if (location.search.split("=")[1] == "Google+Docs") {
  document.getElementById("com").innerHTML = "Google Docs - create and edit documents<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://docs.google.com";
  s.innerHTML = "Docs";
  sa.href = "https://docs.google.com/";
} else if (location.search.split("=")[1] == "google+sites") {
  document.getElementById("com").innerHTML = "Google Sites - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://sites.google.com";
} else if (location.search.split("=")[1] == "google+Sites") {
  document.getElementById("com").innerHTML = "Google Sites - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://sites.google.com";
} else if (location.search.split("=")[1] == "Google+sites") {
  document.getElementById("com").innerHTML = "Google Sites - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://sites.google.com";
} else if (location.search.split("=")[1] == "Google+Sites") {
  document.getElementById("com").innerHTML = "Google Sites - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://sites.google.com";
} else if (location.search.split("=")[1] == "google+slides") {
  document.getElementById("com").innerHTML = "Google Slides - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://slides.google.com";
  s.innerHTML = "Slides";
  sa.href = "https://slides.google.com/";
} else if (location.search.split("=")[1] == "google+Slides") {
  document.getElementById("com").innerHTML = "Google Slides - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://slides.google.com";
  s.innerHTML = "Slides";
  sa.href = "https://slides.google.com/";
} else if (location.search.split("=")[1] == "Google+slides") {
  document.getElementById("com").innerHTML = "Google Slides - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://slides.google.com";
  s.innerHTML = "Slides";
  sa.href = "https://slides.google.com/";
} else if (location.search.split("=")[1] == "Google+Slides") {
  document.getElementById("com").innerHTML = "Google Slides - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://slides.google.com";
  s.innerHTML = "Slides";
  sa.href = "https://slides.google.com/";
} else if (location.search.split("=")[1] == "vimeo") {
  document.getElementById("com").innerHTML = "Vimeo - official site<span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://vimeo.com";
  s.innerHTML = "Vimeo";
  sa.href = "https://vimeo.com/";
} else if (location.search.split("=")[1] == "Vimeo") {
  document.getElementById("com").innerHTML = "Vimeo - official site<span class='material-icons' style='color:#ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://vimeo.com";
  s.innerHTML = "Vimeo";
  sa.href = "https://vimeo.com/";
} else if (location.search.split("=")[1] == "instagram") {
  document.getElementById("com").innerHTML = "Instagram - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://instagram.com";
  s.innerHTML = "Instagram";
  sa.href = "https://instagram.com";
} else if (location.search.split("=")[1] == "Instagram") {
  document.getElementById("com").innerHTML = "Instagram - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://instagram.com";
  s.innerHTML = "Instagram";
  sa.href = "https://instagram.com";
} else if (location.search.split("=")[1] == "insta") {
  document.getElementById("com").innerHTML = "Instagram - official site<span class='material-icons' style='color:red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://instagram.com";
  s.innerHTML = "Instagram";
  sa.href = "https://instagram.com";
} else if (location.search.split("=")[1] == "DuckDuckGo") {
  document.getElementById("com").innerHTML = "DuckDuckGo – Privacy, simplified. <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='No tracking'>lock</span>";
  document.getElementById("comA").href = "https://duckduckgo.com";
  s.innerHTML = "DuckDuckGo";
  sa.href = "https://duckduckgo.com";
} else if (location.search.split("=")[1] == "duckduckgo") {
  document.getElementById("com").innerHTML = "DuckDuckGo – Privacy, simplified. <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='No tracking'>lock</span>";
  document.getElementById("comA").href = "https://duckduckgo.com";
  s.innerHTML = "DuckDuckGo";
  sa.href = "https://duckduckgo.com";
} else if (location.search.split("=")[1] == "ddg") {
  document.getElementById("com").innerHTML = "DuckDuckGo – Privacy, simplified. <span class='material-icons' style='color:#3fba29; font-size: 30px;' title='No tracking'>lock</span>";
  document.getElementById("comA").href = "https://start.duckduckgo.com";
  s.innerHTML = "DuckDuckGo";
  sa.href = "https://start.duckduckgo.com";
} else if (location.search.split("=")[1] == "class") {
  document.getElementById("com").innerHTML = "Google Classroom - Sign in <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://classroom.google.com";
  s.innerHTML = "Classroom";
  sa.href = "https://classroom.google.com";
  // BELOW: results for chrome or browser download
} else if (location.search.split("=")[1] == "google+chrome") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "Google+chrome") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "google+Chrome") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "Google+Chrome") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "chrome") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "Chrome") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "browser") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "browsers") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "Browser") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "Browsers") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "google+chrome+download") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "chrome+download") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "browser+download") {
  document.getElementById("com").innerHTML = "Google Chrome Download <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://chrome.google.com";
  document.getElementById("ru").innerHTML = "Download Brave Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy, blocks trackers and ads'>lock</span>";
  document.getElementById("ruA").href = "https://brave.com";
  document.getElementById("site").innerHTML = "Download Tor Browser <span class='material-icons' style='color: purple; font-size: 30px;' title='Complete anonymity and possible access to dark web'>lock</span>";
  document.getElementById("siteA").href = "https://torproject.org";
  document.getElementById("de").innerHTML = "Download Firefox Browser <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.mozilla.org/en-US/firefox/new/";
  document.getElementById("cn").innerHTML = "See if Google is testing FLoC on you <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='Good privacy practices'>lock</span>";
  document.getElementById("cnA").href = "https://amifloced.org";
  document.getElementById("uk").innerHTML = "Seznam browser download <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.seznam.cz/prohlizec";
  s.innerHTML = "Chrome";
  sa.href = "https://chrome.google.com";
} else if (location.search.split("=")[1] == "news") {
  document.getElementById("com").innerHTML = "Google news <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://news.google.com";
  document.getElementById("ru").innerHTML = "New York Times <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("ruA").href = "https://www.nytimes.com";
  document.getElementById("site").innerHTML = "Washington Post <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>lock</span>";
  document.getElementById("siteA").href = "https://www.washingtonpost.com/";
  document.getElementById("de").innerHTML = "Apple News <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.apple.com/apple-news/";
  document.getElementById("cn").innerHTML = "CNN  - Breaking news <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>lock</span>";
  document.getElementById("cnA").href = "https://www.cnn.com/";
  document.getElementById("uk").innerHTML = "BBC news <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.bbc.com/news";
} else if (location.search.split("=")[1] == "News") {
  document.getElementById("com").innerHTML = "Google news <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://news.google.com";
  document.getElementById("ru").innerHTML = "New York Times <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("ruA").href = "https://www.nytimes.com";
  document.getElementById("site").innerHTML = "Washington Post <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>lock</span>";
  document.getElementById("siteA").href = "https://www.washingtonpost.com/";
  document.getElementById("de").innerHTML = "Apple News <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.apple.com/apple-news/";
  document.getElementById("cn").innerHTML = "CNN  - Breaking news <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>lock</span>";
  document.getElementById("cnA").href = "https://www.cnn.com/";
  document.getElementById("uk").innerHTML = "BBC news <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.bbc.com/news";
} else if (location.search.split("=")[1] == "current+events") {
  document.getElementById("com").innerHTML = "Google news <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://news.google.com";
  document.getElementById("ru").innerHTML = "New York Times <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("ruA").href = "https://www.nytimes.com";
  document.getElementById("site").innerHTML = "Washington Post <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>lock</span>";
  document.getElementById("siteA").href = "https://www.washingtonpost.com/";
  document.getElementById("de").innerHTML = "Apple News <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.apple.com/apple-news/";
  document.getElementById("cn").innerHTML = "CNN  - Breaking news <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>lock</span>";
  document.getElementById("cnA").href = "https://www.cnn.com/";
  document.getElementById("uk").innerHTML = "BBC news <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.bbc.com/news";
} else if (location.search.split("=")[1] == "breaking+news") {
  document.getElementById("com").innerHTML = "Google news <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("comA").href = "https://news.google.com";
  document.getElementById("ru").innerHTML = "New York Times <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>person_search</span>";
  document.getElementById("ruA").href = "https://www.nytimes.com";
  document.getElementById("site").innerHTML = "Washington Post <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Poor privacy practices and tracking'>lock</span>";
  document.getElementById("siteA").href = "https://www.washingtonpost.com/";
  document.getElementById("de").innerHTML = "Apple News <span class='material-icons' style='color: #3fba29; font-size: 30px;' title='More private'>lock</span>";
  document.getElementById("deA").href = "https://www.apple.com/apple-news/";
  document.getElementById("cn").innerHTML = "CNN  - Breaking news <span class='material-icons' style='color: red; font-size: 30px;' title='Poor privacy practices and tracking'>lock</span>";
  document.getElementById("cnA").href = "https://www.cnn.com/";
  document.getElementById("uk").innerHTML = "BBC news <span class='material-icons' style='color: #ffc000; font-size: 30px;' title='Moderate privacy practices'>person_search</span>";
  document.getElementById("ukA").href = "https://www.bbc.com/news";
} else {
  s.innerHTML = "Search";
}
// launch button
document.getElementById("s-button").style.visibility = "visible";
