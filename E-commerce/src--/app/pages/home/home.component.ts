import { OwlOptions } from './../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { CatigoriesService } from '../../core/services/catigories/catigories.service';
import { Icatigories } from '../../shared/interfaces/icatigories';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly catigoriesService = inject(CatigoriesService)
  productsData: Iproduct[] = [];
  catigoriesData: Icatigories[]= [];

  getProductsData() {
    this.productsService.getAllProducts().subscribe({
      next:(res)=>{
        this.productsData = res.data;
        console.log(this.productsData);
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  getCatigory(){
    this.catigoriesService.getAllCate().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.catigoriesData = res.data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.getProductsData();
    this.getCatigory();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplayTimeout: 3500,
    autoplay:true,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

   
    slider: OwlOptions = {
      loop: true,

      mouseDrag: true,
      touchDrag: false,
      pullDrag: true,
      autoplay:true,
      autoplaySpeed:5000,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      items:1,
      nav: true
    }
}
