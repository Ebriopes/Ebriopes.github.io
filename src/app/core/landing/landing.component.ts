import { Component } from '@angular/core';
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  faFacebook = faFacebookSquare;
  faGithub = faGithubSquare;
  faLinkedin = faLinkedin;
  typed: any;

  ngOnInit(): void {
    this.typed = new Typed('.description-typed', {
      // stringsElement: '#typed-strings',
      strings: ['Desarrollador', 'Gamer', 'Observador', 'Curioso', 'Humano'],
      // startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      // smartBackspace: true,
      // shuffle: true,
      // cursorChar: '>',
      // fadeOut: true,
      // autoInsertCss: false,
      // bindInputFocus: false,
      // contentType: 'null',
    });
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }
}
