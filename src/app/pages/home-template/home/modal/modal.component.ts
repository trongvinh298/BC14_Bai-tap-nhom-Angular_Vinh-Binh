import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_core/services/share-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  homeCourse: any;
  constructor(private shareData: ShareDataService) {}

  ngOnInit(): void {
    this.shareData.shareCourse.subscribe((result: any) => {
      console.log(result);
      this.homeCourse = result;
    });
  }
}
