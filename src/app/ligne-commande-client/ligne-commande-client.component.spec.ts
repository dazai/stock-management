import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCommandeClientComponent } from './ligne-commande-client.component';

describe('LigneCommandeClientComponent', () => {
  let component: LigneCommandeClientComponent;
  let fixture: ComponentFixture<LigneCommandeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneCommandeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
