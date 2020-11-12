import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { IMediaItem } from 'src/app/media/media.model';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {
  @Input('mediaDetail') mediaDetail: IMediaItem;
  @Input('mediaType') mediaType: string;
  base_url: string;
  img_url: string;

  constructor(private _c: AppConfig) {
    this.base_url = `${this._c.config.images?.base_url}w185`;
  }

  ngOnInit() {
    this.img_url = `${this.base_url}${this.mediaDetail.poster_path}`;
  }
}
