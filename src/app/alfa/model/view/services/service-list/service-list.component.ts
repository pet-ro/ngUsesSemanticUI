import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { from } from 'rxjs';  // <--- why 

// Model related stuff
import { ServiceItem } from '../../../type/service-item';
import { ServiceItemProviderService } from '../../../service/service-item-provider.service'


@Component({
  selector: 'bm-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {


  services : ServiceItem[];

  constructor(
    private serviceItemProvider : ServiceItemProviderService
  ) { }

  ngOnInit() {
    this.serviceItemProvider.getAll()
    .subscribe(res => this.services = res);  
  }

}
