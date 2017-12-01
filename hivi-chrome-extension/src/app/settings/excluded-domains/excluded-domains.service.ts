import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class Domain {
	name: string;
}

@Injectable()
export class ExcludedDomainsService {

	public excludedDomains: Domain[] = [
		// { name: 'yahoo' },
	];

	getExcludedDomains(): Observable<Domain[]> {
		return of(this.excludedDomains);
	}

	addDomainToList(domainName: string) {
		domainName = domainName.toLowerCase();
		if (domainName != "" && domainName !== null) {
			this.excludedDomains.push({name: domainName});
		}
		//TODO: Must check that value hasn't already been added
		console.log(domainName);
		console.log(this.excludedDomains);
		console.log("Pressed ENTER in order to add domain to list.");
	}

	deleteDomainFromList(domainName: string, index: number) {
		this.excludedDomains.splice(index, 1);
		console.log(this.excludedDomains);
		console.log("Pressed delete button in order to remove a domain from list.");
	}

}
