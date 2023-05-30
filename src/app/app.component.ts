import { Component } from '@angular/core';
import { flyInOut } from './shared/animations/contact/contact-view.animation';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [flyInOut],
})
export class AppComponent {
  title = 'Ebriopes';

  constructor(private readonly context: ChildrenOutletContexts) {}

  getRouterAnimationState(): string {
    return this.context.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
