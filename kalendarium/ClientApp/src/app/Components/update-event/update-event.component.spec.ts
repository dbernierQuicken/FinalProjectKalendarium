import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UpdateEventComponent } from './update-event.component';

let component: UpdateEventComponent;
let fixture: ComponentFixture<UpdateEventComponent>;

describe('update-event component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEventComponent],
      imports: [BrowserModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(UpdateEventComponent);
    component = fixture.componentInstance;
  }));

  it('should do something', async(() => {
    expect(true).toEqual(true);
  }));
});
