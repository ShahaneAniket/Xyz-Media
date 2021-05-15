import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  view:string ="Public";
  ImagePreview :string ="";
  MediaName :string ="";
  Description:string="";
galleryList : MediaGallery[]=
[
  {
    ImagePath:"../../assets/images/pinterest.png",
    MediaName:"Pinterest",
    Description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    IsPublic:true
  },
  {
    ImagePath:"../../assets/images/facebook.png",
    MediaName:"Facebook",
    Description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    IsPublic:true
  },
  {
    ImagePath:"../../assets/images/twitter.png",
    MediaName:"Twitter",
    Description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    IsPublic:true
  },
  {
    ImagePath:"../../assets/images/yahoo.png",
    MediaName:"Yahoo",
    Description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    IsPublic:true
  }

]
  
  ngOnInit(): void {

  }


  showModal(data: MediaGallery){
    this.ImagePreview = data.ImagePath;
    this.MediaName = data.MediaName;
    this.Description = data.Description
  }

}
export class MediaGallery{
  ImagePath:string="";
  MediaName : string ="";
  Description:string="";
  IsPublic :boolean =false;
}