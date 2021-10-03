import SimpleCrypto from "simple-crypto-js";


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
export const maskEmail = (email:string)=>{
  if (email) {
    // if (email.length > 20) {
    //   return email.substring(0, 20) + "...";
    // }
    let firstPart = email.substring(0,10)
    let secondPart = email.split("@")
    let newEmail = `${firstPart}*******${secondPart?.[1]}`
    return newEmail;
  } else {
    return "";
  }
}
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


