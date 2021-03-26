import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor( private DataService: DataService ) { }

  clientes: Observable<any>;

  ngOnInit() {
    this.clientes = this.DataService.getClient();
    this.DataService.sendPostRequest();
  }

}
