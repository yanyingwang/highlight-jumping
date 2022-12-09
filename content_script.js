console.log("Loading highlight jumping ...");

function hashHJ() {
  oldURL = new URL(event.oldURL);
  newURL = new URL(event.newURL);
  oldHash = oldURL.hash.substring(1);
  newHash = newURL.hash.substring(1);
  oldHashDecoded = decodeURIComponent(oldHash);
  newHashDecoded = decodeURIComponent(newHash);
  console.log(`Hjumping: ${oldHashDecoded} => ${newHashDecoded}`);
  if (!!oldHashDecoded) {
      document.getElementsByName(oldHashDecoded)[0].nextElementSibling.style.background = "transparent"
  }
  if (!!newHashDecoded) {
    document.getElementsByName(newHashDecoded)[0].nextElementSibling.style.background = "yellow"
  }
}

function mereHJ() {
  const urlhashstr = decodeURIComponent(location.hash.substring(1));
  console.log(`Hjumping: ${urlhashstr}`);
  if (!!urlhashstr) {
    document.getElementsByName(urlhashstr)[0].nextElementSibling.style.background = "yellow"
  }
}

window.onhashchange = (event) => {
  hashHJ();
};

window.onload = (event) => {
  mereHJ();
};

// window.onDOMContentLoaded = () => {
//   mereHJ();
// }

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

// document.onreadystatechange = () => {
//   if (document.readyState === "complete") {
//     mereHJ();
//   }
// };
