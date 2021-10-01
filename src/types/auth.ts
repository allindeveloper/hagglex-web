import { IPhoneNumberDetails, IUser } from "./User";

export interface ISignUpRequestPayload {
    email:string,
    password:string,
    username:string,
    phonenumber:string,
    phoneNumberDetails?:IPhoneNumberDetails,
    referralCode?:string,
    country?:string,
    currency?:string,
}
export interface ISignUpResponse extends IUser {

}

export interface ILoginRequestPayload {
    input:string,
    password:string
}