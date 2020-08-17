import { Component, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ImageSliderComponent, {static:true}) imageSlider: ImageSliderComponent;
  scrollableTabBgColor = 'yellow';
  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    },
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/148598/12/5161/90302/5f3252c8E679fb616/9cab254bb153153b.jpg!q70.jpg.dpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/115236/17/15156/98506/5f3a132aEb31959ec/0d3e8e201a5384f0.jpg!cr_1125x445_0_171!q70.jpg.dpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/148598/12/5161/90302/5f3252c8E679fb616/9cab254bb153153b.jpg!q70.jpg.dpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/130557/26/7106/122717/5f37625aE3ecfde89/f7a6c47342d9b545.jpg!cr_1125x445_0_171!q70.jpg.dpg',
      link: '',
      caption: ''
    },
  ];
  handleTabSelected(topMenu: TopMenu) {
    const bgColors = ['green', 'skyblue', 'orange'];
    const idx = Math.floor(Math.random() * 3);
    this.scrollableTabBgColor = bgColors[idx];
    console.log(topMenu);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.imageSlider);
  }
}
