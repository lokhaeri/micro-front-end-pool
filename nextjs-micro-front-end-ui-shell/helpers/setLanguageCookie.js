/**
 * setLangCookie
 * @param {*} lang 
 */
export default function setLangCookie(lang) {
  var d = new Date();
  d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "lang=" + lang + ";" + expires + ";path=/";
}