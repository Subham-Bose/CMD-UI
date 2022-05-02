import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomsTabComponent } from './chatrooms-tab.component';

describe('ChatroomsTabComponent', () => {
  let component: ChatroomsTabComponent;
  let fixture: ComponentFixture<ChatroomsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatroomsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
