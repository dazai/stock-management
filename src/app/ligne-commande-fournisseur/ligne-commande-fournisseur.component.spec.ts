import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCommandeFournisseurComponent } from './ligne-commande-fournisseur.component';

describe('LigneCommandeFournisseurComponent', () => {
  let component: LigneCommandeFournisseurComponent;
  let fixture: ComponentFixture<LigneCommandeFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneCommandeFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneCommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
