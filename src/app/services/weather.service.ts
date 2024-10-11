import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  http = inject(HttpClient);
  weatherData = new BehaviorSubject<any>('')
  


  
  
 

  submitCity(city: string){
    console.log(city);
    this.getWeatherData(city).subscribe(response => {
      this.weatherData.next(response);
    }, error => {
      console.log('Error fetching weather data', error);
      
    })
    
    // Make an API request to fetch weather data for the given city.
   ;
    
    
    
    // Implement logic to submit the city to the API and update weatherData signal.
    
  }
  getWeatherData(city: string) {
    

    
    

    
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=w1k7LrBJNBb4kDE4hUBYaTzN5wMMzket`
    return this.http.get(url);
  }

  
    
  }
  

