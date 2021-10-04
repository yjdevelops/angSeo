import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  constructor(private tl: Title, private mt: Meta) { }

  ngOnInit(): void {

    this.tl.setTitle('Birthday Gifts');
     this.mt.updateTag({ name: 'keywords', content: 'Toys, photo frames, chochlate boxes, teddy beer' });
     this.mt.updateTag({ name: 'description', content: 'Here you will get best birthday gifts for ur loved ones' });
  }

}
