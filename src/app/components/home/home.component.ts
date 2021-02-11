import { Component, OnInit } from '@angular/core';
import { PicturesService } from 'src/app/services/pictures.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'picture';
  pictures: any = [];
  totalRecords: Number;
  page: Number = 1;
  infoPicture: any = {
    name: '',
    image: '',
    episode: 0

  }
  constructor(private pictureService: PicturesService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

  }

  open(content, item) {
    this.infoPicture.name = item.name;
    this.infoPicture.episode = item.episode;
    this.infoPicture.image = item.image;
    this.modalService.open(content);
  }

  ngOnInit() {
    this.pictureService.getPictures().subscribe(data => {
      if (data['results']) {
        this.pictures = data['results'];
        this.totalRecords = this.pictures.length;
      }
    })
  }
  handlePageChange(data:any){
    
  }


}
