import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var slideIndex = 0;
                    showSlides();
                    function showSlides() 
                    {
                      var i;
                      var slides = document.getElementsByClassName("myslide") as HTMLCollectionOf<HTMLElement>;
                      var dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
                      for (i = 0; i < slides.length; i++) {
                      slides[i].style.display = "none";  
                      }
                      slideIndex++;
                      if (slideIndex > slides.length) {slideIndex = 1}    
                      for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" active", "");
                      }
                      slides[slideIndex-1].style.display = "block";  
                      dots[slideIndex-1].className += " active";
                      setTimeout(showSlides, 3000); 
                    }


  } 

}
