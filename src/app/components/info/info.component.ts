import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  
  width: number = 0;
  animacion: string = "";
  cartas: number = 0;

  constructor() {}

  ngOnInit(): void {

    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.width = event.target.innerWidth;
	}

  prev(){
  
    if ( this.cartas != 0 ) {   

      this.animacion = "animate__flipOutY";      
      this.animar("-");   
    }else{

      this.cartas = 3;
      if ( this.width > 767 ) {
        this.cartas = 1;
      }  
    }  
  }

  next(){

    if ( this.cartas != 3 ) {

      if (this.cartas == 1 && this.width > 767) {
        this.cartas = 0;
        return;
      }
      this.animar("+");   
    }else{
      this.cartas = 0;
    }
  }

  private animar(operator: string){

    this.animacion = "animate__flipOutY";  

    setTimeout(()=>{
      if(operator == "+") {
        this.cartas++;
      }else
        this.cartas--;      
      this.animacion = "animate__flipInY";    
    }, 600);
  }
}
