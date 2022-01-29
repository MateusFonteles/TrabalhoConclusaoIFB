import { TestBed } from '@angular/core/testing';

import { SubirImagensService } from './subir-imagens.service';

describe('SubirImagensService', () => {
  let service: SubirImagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirImagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
