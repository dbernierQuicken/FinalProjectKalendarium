import * as testing from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SignUpComponent } from './sign-up.component';

let component: SignUpComponent;
let fixture: testing.ComponentFixture<SignUpComponent>;

describe('signUp component', () => {
  beforeEach(testing.async(() => {
    testing.TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [BrowserModule],
      providers: [
        { provide: testing.ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = testing.TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
  }));

  it('should do something', testing.async(() => {
    expect(true).toEqual(true);
  }));
});
