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
		var alreadyAdded = this.domainNameInExcludedDomains(domainName);
		domainName = domainName.toLowerCase();
		if (alreadyAdded == false){
			if (domainName != "" && domainName !== null) {
				this.excludedDomains.push({name: domainName});
			}
		}
	}

	deleteDomainFromList(domainName: string, index: number) {
		this.excludedDomains.splice(index, 1);
	}

	domainNameInExcludedDomains(domainName: string): boolean {
		var length = this.excludedDomains.length;
		for (var i = 0; i < length; i++) {
			if (this.excludedDomains[i].name === domainName) {
				return true;
			}
		}
		return false;
	}

}
