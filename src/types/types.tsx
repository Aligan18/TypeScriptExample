export interface IAdress{
    street: string;
    suite: string;
    city:string;
    zipcode: string;
}


export interface IUser {
    id : string;
    name : string;
    username : string;
    email : string;
    address : IAdress;
}   
export interface ITodo {
    userId: number;
    id: string; 
    title: string;
    completed:boolean ;
    
}

export interface ISlide {
    img : string;
    title: string;
}