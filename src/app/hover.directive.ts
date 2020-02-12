import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {

   }
   @HostListener("mousrover")
   onMouseOver(){
     let part = this.el.nativeElement.querySelector('.img')
     this.renderer.setStyle(part,'display','block');

   }
   @HostListener("mousrout")
   onMouseOut(){
    let part = this.el.nativeElement.querySelector('.img')
    this.renderer.setStyle(part,'display','none');
     
   }

}
