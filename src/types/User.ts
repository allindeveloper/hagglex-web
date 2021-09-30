import { ICard } from "./Card";

export interface IUser {
    _id: string,
   email:string,
   phonenumber:string,
   phoneNumberDetails:IPhoneNumberDetails,
   referralCode:string,
   totalReferralEarning:number,
   referralCount:number,
   tradeCount:number,
   avgTradeRating:number,
   username:string,
   kycStatus:string,
   emailVerified:boolean,
   phoneNumberVerified:boolean,
   active:boolean,
   suspended:boolean,
   role:boolean,
   profile:boolean,
   userCard:ICard,
   kyc:any,
   createdAt:string

}

export interface IPhoneNumberDetails {
    phoneNumber:string,
    callingCode:string,
    flag:string
}

