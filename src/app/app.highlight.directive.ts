//Directive allows use of the @Directive decorator
// Element ref allows access to element in html
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighLightDirective{
    constructor(private el: ElementRef){}
    // Pass color from 'myHighlight' attribute to 'highlightColor' model.
    @Input('myHighlight')
    highlightColor: string | null | undefined;
    // Set color on mouse entry. 'red' is the default.
    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight( this.highlightColor || 'red');
    }
// Set color to null on mouse exit.
    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string | null, ) {
        //this.el.nativeElement.style.color = color;
        this.el.nativeElement.style.backgroundColor = color;
    }


}