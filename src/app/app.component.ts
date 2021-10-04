import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to cakeShake';

  constructor(private titleservice: Title, private metaservice: Meta) {

  }


  ngOnInit() {
    this.titleservice.setTitle(this.title);
    this.metaservice.addTag({ name: 'keywords', content: 'cakeShake, birthday cakes, birthday gifts' });
    this.metaservice.addTag({ name: 'description', content: 'cakeshake all customized cakes and gifts available' });
    this.metaservice.addTag({ name: 'author', content: 'cakeShake' });
    this.metaservice.addTag({ name: 'robots', content: 'index, follow' });
  }

}


