import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherURL: string = "http://localhost:3000/weathers"
  constructor(private httpClient: HttpClient) { }
  searchWeatherByCity(obj) {
    return this.httpClient.post<{weather: any}>(`${this.weatherURL}/search`, obj)
  }
}
