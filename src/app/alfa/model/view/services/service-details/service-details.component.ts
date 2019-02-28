import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Model stuff
import { ServiceItem } from '../../../type/service-item';
import { ServiceItemFactory } from '../../../service/service-item-factory';
import { ServiceItemProviderService } from '../../../service/service-item-provider.service';

@Component({
  selector: 'bm-service-details',
  templateUrl: './service-details.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ServiceDetailsComponent implements OnInit {

  service: ServiceItem = ServiceItemFactory.empty();

  constructor(
    private serviceItemProvider: ServiceItemProviderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
