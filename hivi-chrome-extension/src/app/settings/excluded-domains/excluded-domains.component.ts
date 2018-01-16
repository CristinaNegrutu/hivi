import {Component, OnInit} from '@angular/core';
import {ExcludedDomainsService} from './excluded-domains.service';

@Component({
  selector: 'excluded-domains',
  templateUrl: './excluded-domains.component.html',
})
export class ExcludedDomainsComponent implements OnInit {

  public excludedDomains: string[];

  constructor(private domainsService: ExcludedDomainsService) {
  }

  ngOnInit() {
    this.excludedDomains = this.getExcludedDomains();
  }

  getExcludedDomains() {

    if (localStorage.getItem("excluded_domains") == null) {
      return []
    } else {
      return JSON.parse(localStorage.getItem("excluded_domains"));

    }
  }

  addDomainToList(domainName): void {

    let domains;
    if (localStorage.getItem("excluded_domains") == null) {
      console.log("shit is getting cleaned");
      domains = []
    } else {
      domains = JSON.parse(localStorage.getItem("excluded_domains"));

    }
    if (domains.indexOf(domainName) === -1) {
      domains.push(domainName);
      localStorage.setItem("excluded_domains", null)
      this.excludedDomains = domains;
      localStorage.setItem("excluded_domains", JSON.stringify(domains));
    }

  }

  deleteDomainFromList(domainName: string, index: number) {

    let domains = JSON.parse(localStorage.getItem("excluded_domains"));
    domains = domains.filter(item => item !== domainName);

    this.excludedDomains = domains;

    localStorage.setItem("excluded_domains", null);
    localStorage.setItem("excluded_domains", JSON.stringify(domains));
  }

}
