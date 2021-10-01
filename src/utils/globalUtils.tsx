import SimpleCrypto from "simple-crypto-js";


// from http://widgets.twimg.com/j/1/widget.js
var K = function () {
  var a = navigator.userAgent;
  return {
    ie: a.match(/MSIE\s([^;]*)/)
  }
}();

export const enterHandler = (id?: string) => {
  window.addEventListener("keyup", (event) => {
    // 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
      event.preventDefault();
      // Trigger the button element with a click
      let loginTrigger = document.querySelector(`#${id}`) as HTMLElement;
      if (loginTrigger && loginTrigger !== null) {
        loginTrigger?.click?.();
      }
    }
  });
};
export const isValidUrl = (value: string) => {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(value);
}

export const cryptographyService = () => {
  const simpleCrypto = new SimpleCrypto("T()o(){o){R}");
  return simpleCrypto;
}

