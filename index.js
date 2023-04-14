var userLang = navigator.language || navigator.userLanguage;
var langSess = sessionStorage.getItem('lang');

if(!langSess){
  sessionStorage.setItem('lang', userLang);
  if(userLang == 'fr-FR' && window.location.href != '/'){
    location.replace("https://massagebordeaux.fr/")
  } else if (window.location.href != '/en/' && window.location.href != '/en') {
    location.replace("https://massagebordeaux.fr/en/")
  }
}
