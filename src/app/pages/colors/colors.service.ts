import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    'providedIn' : 'root'
})

export class ColorService {
    constructor(private httpClient: HttpClient) {
        
    }

    getColors(pageNo:number) {
        return this.httpClient.get(`https://reqres.in/api/unknown?per_page=5&page=${pageNo}`);
    }
}