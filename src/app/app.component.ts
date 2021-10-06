import { Component, SimpleChanges } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Welcome to cakeShake';
  jsonLD!: SafeHtml;
  
  constructor(private titleservice: Title, private metaservice: Meta, private sanitizer: DomSanitizer) {

  }


  ngOnInit(changes: SimpleChanges) {
    const json = {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      url: 'https://cakeshake.com',
      name: 'cakeshake',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-000-000-0000',
        contactType: 'Customer service'
      }
    };
    
    this.jsonLD = this.getSafeHTML(json);

    this.titleservice.setTitle(this.title);
    this.metaservice.addTag({ name: 'keywords', content: 'cakeShake, birthday cakes, birthday gifts' });
    this.metaservice.addTag({ name: 'description', content: 'cakeshake all customized cakes and gifts available' });
    this.metaservice.addTag({ name: 'author', content: 'cakeShake' });
    this.metaservice.addTag({ name: 'robots', content: 'index, follow' });
  }


  getSafeHTML(value: {}) {
    // If value convert to JSON and escape / to prevent script tag in JSON
    const json = value
      ? JSON.stringify(value, null, 2).replace(/\//g, '\\/')
      : '';
    const html = `${json}`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}


