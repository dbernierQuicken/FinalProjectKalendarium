import * as testing from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { LoginComponent } from './login.component';

let component: LoginComponent;
let fixture: testing.ComponentFixture<LoginComponent>;

describe('login component', () => {
  beforeEach(testing.async(() => {
    testing.TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserModule],
      providers: [
        { provide: testing.ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = testing.TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  }));

  it('should do something', testing.async(() => {
    expect(true).toEqual(true);
  }));
});
