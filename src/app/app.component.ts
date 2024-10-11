import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { SubscriptionLike } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  weatherService = inject(WeatherService);
  weatherData = signal<any>([]);
  private subscription!: SubscriptionLike 
  locationForm = new FormGroup({
    city: new FormControl('')
  })

  submitCity() {
    this.weatherService.submitCity(
      this.locationForm.value.city ?? '',
    )
    
  }

  ngOnInit(): void {
    this.subscription =
    this.weatherService.weatherData
      .subscribe((response: any) => {
        this.weatherData.set(response);
      }, (error: any) => {
        console.error('Error fetching weather data:', error);
      });
  }
    ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
}
