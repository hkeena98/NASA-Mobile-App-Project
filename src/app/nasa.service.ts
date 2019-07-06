import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';


@Injectable({
	providedIn: 'root'
})

export class NasaService 
{
	apiAPOD: string = 'https://api.nasa.gov/planetary/apod?api_key=19rXOy4D0uF14Yx2U8bYKT9dLX7xijgOPJvoIU5n'

	apiGallery: string = "https://images-api.nasa.gov/search?q=";
	apiUrl: string;
	apiKey: string = '?api_key=19rXOy4D0uF14Yx2U8bYKT9dLX7xijgOPJvoIU5n';

	constructor(private http: HTTP) {
		console.log("Running NASA service");		
	}
	
	public getNASADaily()
	{
		return this.http.get(this.apiAPOD, {}, {});
	}
	
	public getNASAGallery(term: string)
	{
		this.apiUrl = this.apiGallery + term;
		return this.http.get(this.apiUrl, {}, {});
	}
}
