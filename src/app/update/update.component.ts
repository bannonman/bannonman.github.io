import { Component, OnInit} from '@angular/core';
import {ConnectionService} from '../connection.service';
import {Tweet} from '../models/tweet.model';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pageConfig: any;
  tweets: any = []

  constructor(private connectionService: ConnectionService) {
    this.pageConfig = {
      id: 'socialPage',
      itemsPerPage: 4,
      currentPage: 1,
    };
  }

  onPageChange(event){
    console.log(event);
    this.pageConfig.currentPage = event;
  }

  ngOnInit(): void {
    this.connectionService.getTweets().subscribe(resp => {
      console.log("Social Response: " + resp)
      this.tweets = resp;
      console.log(this.tweets)
    });    
  }
}
