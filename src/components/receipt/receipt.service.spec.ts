import {ReceiptService} from "./receipt.service";
import {inject, TestBed} from "@angular/core/testing";

describe('ReceiptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceiptService]
    });
  });

  it('should ...', inject([ReceiptService], (service: ReceiptService) => {
    expect(service).toBeTruthy();
  }));
});
