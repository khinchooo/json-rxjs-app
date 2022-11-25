import { Component, OnInit } from '@angular/core';
import { Site } from './site.model';
import { SiteService } from './site.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'json-rxjs-app';

  sites: Site[] = [];
  siteName: string = '';
  siteURL: string = '';
  updateId: string = '';
  updateName: string = '';
  updateURL: string = '';
  deleteId: string = '';

  constructor(private siteService: SiteService) {}
  ngOnInit() {
    this.siteService.getSites().subscribe((data: Site[]) => {
      this.sites = data;
    });
  }
  createData() {
    if (!this.siteName.trim() || !this.siteURL.trim()) return;
    const siteInfo: Site = {
      name: this.siteName,
      url: this.siteURL
    }
    this.siteService.createSite(siteInfo).subscribe(
      (data: Site) => {
        this.sites.push(data);
        this.siteName = '';
        this.updateURL = '';
    });
  };
  updateData() {
    if(
      !this.updateId.trim() ||
      !this.updateName.trim() ||
      !this.updateURL.trim()) return;

    const siteInfo: Site = {
      name: this.updateName,
      url: this.updateURL,
    }

    this.siteService
      .updateSite(this.updateId, siteInfo)
      .subscribe((data: Site) => {
        const index = this.sites.findIndex(site => site.id === data.id);
        this.sites[index] = { ...data };
        this.updateId = '';
        this.updateName = '';
        this.updateURL = '';
    });
  };
  deleteData() {
    if (!this.deleteId.trim()) return;
    this.siteService.deleteSite(this.deleteId).subscribe(() =>{
      const index = this.sites.findIndex(
        site => site.id === Number(this.deleteId)
      );
      this.sites.splice(index, 1);
      this.deleteId = '';
    });
  }
}
