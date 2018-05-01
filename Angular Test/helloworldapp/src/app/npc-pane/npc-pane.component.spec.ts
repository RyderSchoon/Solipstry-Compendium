import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcPaneComponent } from './npc-pane.component';

describe('NpcPaneComponent', () => {
  let component: NpcPaneComponent;
  let fixture: ComponentFixture<NpcPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
