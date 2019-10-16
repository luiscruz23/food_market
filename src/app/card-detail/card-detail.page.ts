import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../services/informacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {

  detail: any;
  id: any;

  constructor(private _infoService: InformacionService, private activatedRoute: ActivatedRoute) {

    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    this.detail = this._infoService.getDetail(this.id);
    console.log(this.detail);
   }

  ngOnInit() {
  }

}
