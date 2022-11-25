import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from '../site.model';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  siteName: string = '';
  siteURL: string = '';

  constructor(private router: Router, private siteService: SiteService) { }

  ngOnInit(): void {}

  addSite(): void {
    if (!this.siteName.trim() || !this.siteURL.trim()) return;

    const siteInfo: Site = {
      name: this.siteName,
      url: this.siteURL,
    };
    this.siteService.createSite(siteInfo).subscribe(()=> {
      this.siteName = '';
      this.siteURL = '';
      this.router.navigate(['/'])
    });
  }
}
