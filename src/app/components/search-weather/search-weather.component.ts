import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {
  weather:any={};
  city:any={};
  cityWeather:any;
  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
  }

  search() {
    this.weatherService.searchWeatherByCity(this.city).subscribe((data) => {
      this.cityWeather = data.weather;
    })   
  }
}
