import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

export interface ImageSlider {
  imgUrl:string;
  link:string;
  caption:string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider',{ static:true }) imgSlider: ElementRef;
  constructor(private rd2:Renderer2) { }

  ngOnInit() {
    // console.log('ngOnInit', this.imgSlider);
  }

  ngAfterViewInit(): void {1
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('ngAfterViewInit', this.imgs);
    // this.imgs.forEach( item => item.nativeElement.style.height = '148px');
    // this.imgs.forEach( item => {
    //   this.rd2.setStyle(item.nativeElement,'height', '148px');
    // });
    this.intervalId = setInterval(()=>{
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', (this.getIndex(++this.selectedIndex) % this.sliders.length ) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length);
    }, this.intervalBySeconds * 1000);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }

  getIndex(idx:number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length) ;
  }

  handleScroll(ev) {
      const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
      this.selectedIndex = Math.round(ratio);
  }

}
