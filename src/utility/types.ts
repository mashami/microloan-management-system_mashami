export interface signupType{
    firstName?:string,
    lastName?:string,
    telephone:string
    password:string

}


export interface logInType{
    telephone:string
    password:string
}

export interface loanType{
    income:number,
    amount:number
}