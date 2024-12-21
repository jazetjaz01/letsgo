export type Trip = {
    id:string;
    departure_city: string;
    place_called_departure: string;
    arrival_city: string;
    place_called_arrival:string;
    day_trip: string;
    time_trip_departure: number;
    time_trip_arrival: number;
    duration_trip:number;
    price:number;
      available_seat:number;
      user:User;
    

};


export type User = {
    id:string;
    
    avatar_image?:string;
    name:string;
    rate_user:number;
}


