import { Component, Input } from '@angular/core';
import { IMediaItem } from 'src/app/media/media.model';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss'],
})
export class MediaListComponent {
  @Input('mediaRes') mediaRes: IMediaItem[];
  @Input('mediaType') mediaType: string;

  constructor() {}
}
