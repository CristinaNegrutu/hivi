import { Injectable } from '@angular/core';

@Injectable()
export class HiviService {

	// Pie-Chart related methods
	getPieChartsLabels(): string[] {
		return [
			'www.youtube.com',
			'www.facebook.com',
			'www.gmail.com',
			'www.imdb.com',
			'www.amazon.com'
		];
	}

	getPieChartData(): number[] {
		return [13, 5, 4, 5, 1];
	}

	// Bar-Chart related methods
	getBarChartLabels(): string[] {
		return ['youtube', 'facebook', 'gmail', 'imdb', 'webmail', 'emag', 'amazon']
	}

	getBarChartData(): any[] {
		return [
	    {data: [65, 62, 60, 59, 56, 55, 40, 12], label: 'Your most viewed sites'}
	  ];
	}

}
