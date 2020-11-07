import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {
  @Input('mediaDetail') mediaDetail;
  @Input('mediaType') mediaType;
  base_url: string;
  img_url: string;

  constructor(private _c: AppConfig) {
    this.base_url = `${this._c.config.images?.base_url}w185`;
  }

  ngOnInit() {}

  ngOnChanges(change) {
    if (change.mediaDetail && change.mediaDetail.currentValue.poster_path) {
      this.img_url = `${this.base_url}${this.mediaDetail.poster_path}`;
    }
  }
}
