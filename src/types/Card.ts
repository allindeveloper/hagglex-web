export interface ICard {
    id:string,
    user:string,
    cardDetails:string
}

export interface ICardDetails {
    cardType:string,
    authorizationCode:string,
    bank:string,
    bin:string,
    brand:string,
    expMonth:string,
    last4:string,
    channel:string,
    countryCode:string
}