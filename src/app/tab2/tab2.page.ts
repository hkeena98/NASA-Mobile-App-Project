import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public ast;

  public search: string;
  
  public imgArr: string[] = [];

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };

	constructor(private dataService: NasaService, private modalController: ModalController)	{
    
  }
  
  getGallery()
  {
    this.dataService.getNASAGallery(this.search).then( res => {
      this.ast = res;
      this.imgArr = [];
      let xar = JSON.parse(this.ast.data);
      let p = xar.collection.items;
      for(let i = 0; i < p.length; i++)
      {
        this.imgArr.push(p[i].links[0].href);
      }
    });
  }

  
  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => modal.present());
  }



}
