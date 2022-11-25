import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../site.model';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.css']
})
export class EditSiteComponent implements OnInit {
  sites: Site[] = [];
  siteName: string = '';
  siteURL: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private siteService: SiteService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.siteService.getSite(id!).subscribe((data: Site) => {
      this.siteName = data.name;
      this.siteURL = data.url;
    });
  }

  editSite(): void {
    if (!this.siteName.trim() || !this.siteURL.trim()) return;

    const id = this.route.snapshot.paramMap.get('id');
    const siteInfo: Site = {
      name: this.siteName,
      url: this.siteURL,
    };

    this.siteService.updateSite(id!, siteInfo).subscribe((data: Site)=> {
      this.siteName = '';
      this.siteURL = '';
      this.router.navigate(['/'])
    });
  }

}
