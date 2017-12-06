import { Component, OnInit } from '@angular/core';
import { ExcludedDomainsService } from './excluded-domains.service';

@Component({
	selector: 'excluded-domains',
	templateUrl: './excluded-domains.component.html',
})
export class ExcludedDomainsComponent implements OnInit {

	public excludedDomains: string[];

	constructor(private domainsService: ExcludedDomainsService) { }

	ngOnInit() {
		this.getExcludedDomains();
	}

	getExcludedDomains(): void {
		this.domainsService.getExcludedDomains()
		.subscribe(results => this.excludedDomains = results);
	}

	addDomainToList(domainName): void {
		this.domainsService.addDomainToList(domainName);
		console.log("ExcludedDomainsComponent: number of excluded domains = "
		+ this.excludedDomains.length);
	}

	deleteDomainFromList(domainName: string, index: number) {
		this.domainsService.deleteDomainFromList(domainName, index);
		console.log("ExcludedDomainsComponent: number of excluded domains = "
		+ this.excludedDomains.length);
	}

}
