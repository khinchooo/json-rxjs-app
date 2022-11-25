import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from '../site.model';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {
  sites: Site[] = [];
  constructor(private router: Router, private siteService: SiteService) { }

  ngOnInit(): void {
    // site listを表示する事
    this.siteService.getSites().subscribe((data: Site[]) => {
      this.sites = data;
    });
  }

  addSite(): void {
    // add site router
    this.router.navigate(['/sites/add']);
  }

  editSite(id: number): void {
    this.router.navigate([`/sites/edit/${id}`]);
  }

  deleteSite(id: number): void {
    this.siteService.deleteSite(id).subscribe(()=>{
      this.sites = this.sites.filter((site) => site.id !== id);
    });
  }
}
