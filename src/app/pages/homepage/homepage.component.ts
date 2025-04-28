import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent implements OnInit, AfterViewInit {

  /* ---------- hover / click ---------- */
  hoveredGroup: 'gauche' | 'droite' | null = null;
  selectedGroup: string | null = null;
  isCarouselOpen = false;

  /* ---------- refs pour GSAP ---------- */
  @ViewChild('logoGrid')     logoGrid!: ElementRef;
  @ViewChild('titlesBlock')  titlesBlock!: ElementRef;
  @ViewChild('announcement') announcement!: ElementRef;
  @ViewChild('socialIcons')  socialIcons!: ElementRef;

  /* ========== INIT ========== */
  ngOnInit(): void { /* meta + titre si besoin */ }

  ngAfterViewInit(): void {
    const tl = gsap.timeline();

    tl.to(this.logoGrid.nativeElement.querySelectorAll('img'), {
        opacity:1, scale:1, duration:1, ease:'power2.out', stagger:0.1
      })
      .from(this.titlesBlock.nativeElement, {
        opacity:0, y:50, duration:0.8, ease:'power2.out'
      }, '+=0.2')
      .from(this.announcement.nativeElement, {
        opacity:0, y:50, duration:0.8, ease:'power2.out'
      }, '+=0.2')
      .from(this.socialIcons.nativeElement.children, {
        opacity:0, scale:0.8, duration:0.8, stagger:0.2, ease:'power2.out'
      }, '+=0.2');
  }

  /* ========== INTERACTIONS ========== */
  hoverGroup(group:'gauche'|'droite'){ this.hoveredGroup = group; }
  unhoverGroup(){ this.hoveredGroup = null; }

  openCarousel(group:string){
    this.selectedGroup = group;
    this.isCarouselOpen = true;
  }
  closeCarousel(){ this.isCarouselOpen = false; }
}
