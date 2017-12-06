import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ExcludedDomainsService {

	public excludedDomains: string[] = [];

	getExcludedDomains(): Observable<string[]> {
		return of(this.excludedDomains);
	}

	addDomainToList(domainName: string) {
		var alreadyAdded = this.domainNameInExcludedDomains(domainName);
		domainName = domainName.toLowerCase();
		if (alreadyAdded == false){
			if (domainName != "" && domainName !== null) {
				this.excludedDomains.push(domainName);
			}
		}
	}

	deleteDomainFromList(domainName: string, index: number) {
		this.excludedDomains.splice(index, 1);
	}

	domainNameInExcludedDomains(domainName: string): boolean {
		var length = this.excludedDomains.length;
		for (var i = 0; i < length; i++) {
			if (this.excludedDomains[i] === domainName) {
				return true;
			}
		}
		return false;
	}

}
