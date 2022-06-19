
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "//www.googletagmanager.com/gtm." + "js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-5T772QJ");



var htmlDivCss = unescape(
  ".banquetsvg.tparrows%3Abefore%20%7B%0A%09display%3Anone%3B%0A%7D%0A.banquetsvg.tparrows%20%7B%0A%20%20background%3A%20transparent%20%21important%3B%0A%20%20width%3A%20auto%20%21important%3B%0A%20%20height%3A%20auto%20%21important%3B%0A%7D%0A.banquetsvg.tp-leftarrow%20%7B%0A%09transform%3A%20rotate%28180deg%29%3B%0A%20%20%09%0A%7D%0A%0A.banquetsvg.tparrows%20span%7B%0A%09transition%3A%20.25s%20ease-out%3B%0A%20%20%20%20display%3A%20inline-block%3B%0A%7D%0A%20%20%0A.banquetsvg.tp-leftarrow%3Ahover%20span%20%7B%0A%20%20%20%20transform%3A%20translateX%283px%29%3B%0A%7D%0A%0A.banquetsvg.tp-rightarrow%3Ahover%20span%20%7B%0A%20%20%20%20transform%3A%20translateX%283px%29%3B%0A%7D%0A%0A.custombullets2%20.tp-bullet%20%7B%0A%20%20%20%20overflow%3Ahidden%3B%0A%20%20%20%20border-radius%3A50%25%3B%0A%20%20%20%20width%3A10px%3B%0A%20%20%20%20height%3A10px%3B%0A%20%20%20-webkit-transition%3A%20.3s%20ease-out%3B%0A%20%20%20%20transition%3A%20.3s%20ease-out%3B%0A%20%20%20%20background-color%3A%20%23e0dfde%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%20%20%20%20border%3A%201px%20solid%20%23e0dfde%3B%0A%7D%0A.custombullets2%20.tp-bullet.selected%20%7B%0A%20%20%20border%3A%201px%20solid%20%233e3930%3B%0A%20%20%20background-color%3A%20transparent%3B%0A%7D%0A%0A%0A"
);
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement("div");
  htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
  document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

var htmlDivCss = unescape("%0A%0A%0A%0A");
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement("div");
  htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
  document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}
