import { Component } from '@angular/core';
import { PictureData } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'day31';
  images : PictureData[]= [{
    url:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
    text:'cat1'
  },{
    url:'https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/02/USAT/71425480007-getty-images-1498838344.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp',
    text:'cat2'
  },{
    url:'https://1.bp.blogspot.com/-58Vbuvi6I8A/YAxSAvqKFjI/AAAAAAAAvE0/uFk0Zzo1Q1AGWpopKF4Y_mDGzvr2kBMLgCLcBGAsYHQ/s800/Cinnamon%2BBrit%2BSH_edited.jpg',
    text:'Meow Meow'
  }]

  pastCaptions: string[] = []

  imagePressed(text: string): void {
    console.info('app.component: image pressed: ', text)
    this.pastCaptions.push(text)
  }

}