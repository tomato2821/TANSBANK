import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpayRetornoComponent } from './webpay-retorno.component';

describe('WebpayRetornoComponent', () => {
  let component: WebpayRetornoComponent;
  let fixture: ComponentFixture<WebpayRetornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebpayRetornoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebpayRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
