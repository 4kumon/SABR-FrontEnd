import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateDialogComponent } from './cliente-create-dialog.component';

describe('ClienteCreateDialogComponent', () => {
  let component: ClienteCreateDialogComponent;
  let fixture: ComponentFixture<ClienteCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCreateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
