import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  constructor(private tl: Title, private mt: Meta) { }

  ngOnInit(): void {
     this.tl.setTitle('Birthday Cakes');
     this.mt.updateTag({ name: 'keywords', content: 'chochlate cakes, customized cakes, dryfruit cake, no egg cake' });
     this.mt.updateTag({ name: 'description', content: 'we provide all veg cake without eggs' });

  }

}
