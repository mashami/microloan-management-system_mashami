import { toast } from "@/hooks/use-toast";
import { logInType, userType } from "./types";

export const users:userType[]= [
    {firstName:"Pacifique", lastName:"mashami",password:"12345", telephone:"078888888"},
     {firstName:"Admin", lastName:"",password:"admin", telephone:"0786107865"},
]

export let currentUser:userType | undefined 



export const register = ({firstName, lastName,password,telephone}:userType) =>{
  const newUser:userType = {firstName,lastName,password,telephone}
    users.push(newUser)

}


export const login = ({telephone,password }: logInType)  =>{

    const findUser:userType | undefined = users.find((user) => user.telephone ===telephone && user.password === password)

    if (findUser) {
    return currentUser = findUser
    }

    else {
        toast({
        variant: "destructive",
        title: "User not found",
        className: "w-fit"
      });

      return
    }

   

}