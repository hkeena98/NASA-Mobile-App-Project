import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  public ast;

  public picTitle: string;
  public picDate: string;
  public picCredit: string;
  public picExplain: string;
  public picURL: string;

	constructor(private dataService: NasaService)	{

  }
  
  ionViewDidEnter()
  {
    this.dataService.getNASADaily().then( res => {
      this.ast = res;
      let xar = JSON.parse(this.ast.data);      
      this.picCredit = xar.copyright;
      this.picDate = xar.date;
      this.picExplain = xar.explanation;
      this.picTitle = xar.title;
      this.picURL = xar.hdurl;
    }); 
  }

}
