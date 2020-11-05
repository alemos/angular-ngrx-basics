import { Component, Input, OnInit } from '@angular/core';
import { ITopRatedMedia } from 'src/app/media/media.model';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss'],
})
export class MediaListComponent implements OnInit {
  @Input('mediaRes') mediaRes: ITopRatedMedia;
  @Input('mediaType') mediaType: string;
  mediaList: Array<any> = [];
  showContent: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(change) {
    if (change.mediaRes && change.mediaRes.currentValue) {
      this.mediaList = this.mediaRes && this.mediaRes.results;
      this.showContent = true;
    }
  }
}
