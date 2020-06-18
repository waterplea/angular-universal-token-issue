import {Component, Inject, InjectionToken, Optional} from '@angular/core';

export const WITHOUT_FACTORY = new InjectionToken<string>('Without factory token');
export const WITH_FACTORY = new InjectionToken<string>('With factory token', {
  factory: () => 'Browser factory value'
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    @Inject(WITH_FACTORY) readonly withFactory: string,
    @Optional() @Inject(WITHOUT_FACTORY) readonly withoutFactory: string | null,
  ) {}
}
