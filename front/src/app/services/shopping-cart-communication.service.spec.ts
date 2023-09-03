import { TestBed } from '@angular/core/testing';

import { ShoppingCartCommunicationService } from './shopping-cart-communication.service';

describe('ShoppingCartCommunicationService', () => {
  let service: ShoppingCartCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
