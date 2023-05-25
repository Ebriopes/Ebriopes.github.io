import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MouseParallaxDirective } from 'src/app/shared/mouseParallax.directive';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FontAwesomeModule,
    MouseParallaxDirective,
  ],
})
export class LandingModule {}
