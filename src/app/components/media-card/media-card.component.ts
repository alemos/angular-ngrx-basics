import { Component, Input, OnInit } from '@angular/core';

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
  cfg: any;

  constructor() {
    this.cfg = JSON.parse(localStorage.getItem('config'));
    this.base_url = `${this.cfg && this.cfg.images?.base_url}w185`;
  }

  ngOnInit() {}

  ngOnChanges(change) {
    if (change.mediaDetail && change.mediaDetail.currentValue.poster_path) {
      this.img_url = `${this.base_url}${this.mediaDetail.poster_path}`;
    }
  }
}
