import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Domain, ExcludedDomainsService } from './excluded-domains.service';

@Component({
	selector: 'excluded-domains',
	templateUrl: './excluded-domains.component.html',
	changeDetection: ChangeDetectionStrategy.Default
})
export class ExcludedDomainsComponent implements OnInit {

	constructor(private domainsService: ExcludedDomainsService,
		private changeDetectorRef: ChangeDetectorRef ) { }

		public excludedDomains: Domain[];

		ngOnInit() {
			this.getExcludedDomains();
		}

		getExcludedDomains(): void {
			this.domainsService.getExcludedDomains()
			.subscribe(results => this.excludedDomains = results);
		}

		addDomainToList(domainName): void {
			this.domainsService.addDomainToList(domainName);
		}

		deleteDomainFromList(domainName: string, index: number) {
			this.domainsService.deleteDomainFromList(domainName, index);
			this.changeDetectorRef.markForCheck();
		}

	}
