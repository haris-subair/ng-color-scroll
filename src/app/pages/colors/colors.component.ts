import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ColorService } from "./colors.service";

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls : ['./colors.component.scss']
    
})
    
export class ColorsComponent {
  
    pageNo: number = 1;
    maxPages: number = 0;
    colorData: any =[];
    total_pages: number = 0;
    constructor(private router:Router , private colorService:ColorService) {
        this.getColors();
    }

    getColors() {
        this.colorService.getColors(this.pageNo).subscribe((res:any) => {
            if (res && res.data) {
                if (this.colorData.length !=0) {
                    this.colorData = (this.colorData).concat(res.data);
                } else {
                    this.colorData = res.data;
                }
                this.total_pages = res.total_pages;
            }
     
        })
    }

    onScroll() {

        if (this.pageNo < this.total_pages) {
            this.pageNo++
            this.getColors()
        } else {
            alert("No more colors");
        }

    }
  
}