import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/dog';
import { DogRecordService } from '../../services/dog-record.service';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-dashboard',
	templateUrl: './user-dashboard.component.html',
	styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
	dogs: Array<Dog> = [];
	filteredDogs: Array<Dog> = [];

	// Filter
	nameFilter: string = '';
	breedFilter: string = '';
	colorFilter: string = '';
	sizeFilter: string = '';
	sexFilter: string = '';
	ageFilter: string = '';

	constructor(private router: Router,
		private accountService: AccountService,
		private dogRecordService: DogRecordService) { }

	ngOnInit(): void {
		this.dogRecordService.viewAllDogRecords().subscribe((data: Dog[]) => {
			this.dogs = data;
			this.filteredDogs = this.dogs;
		});
	}

	onUserLogout(): void {
		this.accountService.logout().subscribe({
			next: (value: boolean) => {
				if (value) {
					this.router.navigate(['/login']);
				}
			},
			error: (err: any) => {
				console.error(err);
			}
		});
	}

	// Filters
	onFilterApplied(): void {
		const nameQuery = this.nameFilter.toLowerCase();
		const breedQuery = this.breedFilter.toLowerCase();
		const colorQuery = this.colorFilter.toLowerCase();
		const sizeQuery = this.sizeFilter.toLowerCase();
		const sexQuery = this.sexFilter.toLowerCase();
		const ageQuery = this.ageFilter;

		this.filteredDogs = this.dogs;

		if (nameQuery.trim() !== "")
			this.filteredDogs = this.filteredDogs.filter(dog => dog.name.toLowerCase().includes(nameQuery))

		if (breedQuery.trim() !== "")
			this.filteredDogs = this.filteredDogs.filter(dog => dog.breed.toLowerCase().includes(breedQuery))

		if (colorQuery.trim() !== "")
			this.filteredDogs = this.filteredDogs.filter(dog => dog.colorCoat.toLowerCase().includes(colorQuery))

		if (sizeQuery.trim() !== "")
			this.filteredDogs = this.filteredDogs.filter(dog => dog.size.toLowerCase().includes(sizeQuery))

		if (sexQuery.trim() !== "")
			this.filteredDogs = this.filteredDogs.filter(dog => dog.sex.toLowerCase().includes(sexQuery))

		if (ageQuery !== "" && ageQuery !== null)
			this.filteredDogs = this.filteredDogs.filter(dog => dog.age.toString().toLowerCase().includes(ageQuery));
	}

	onFiltersReset(): void {
		this.breedFilter = "";
		this.nameFilter = "";
		this.colorFilter = "";
		this.sizeFilter = "";
		this.sexFilter = "";
		this.ageFilter = "";

		this.filteredDogs = this.dogs;
	}
}
