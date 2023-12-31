import { Account } from "./account";

export class Dog {
  id?: number;
  name: string;
  breed: string;
  age: number;
  sex: string;
  colorCoat: string;
  description?: string;
  arrivedDate: Date;
  arrivedFrom: string;
  size: string;
  location: string;
  photoBytes?: any;

  // For Adoption
  adoptRequested?: boolean;
  adoptAccepted?: boolean;
  account?: Account;

  // Not Included In Persistence
  isPhotoUpdated: boolean;

  constructor(
    _name: string,
    _breed: string,
    _age: number,
    _sex: string,
    _colorCoat: string,
    _arrivedDate: Date,
    _arrivedFrom: string,
    _size: string,
    _location: string,
  ) {
    this.name = _name;
    this.breed = _breed;
    this.age = _age;
    this.sex = _sex;
    this.colorCoat = _colorCoat;
    this.arrivedDate = _arrivedDate;
    this.arrivedFrom = _arrivedFrom;
    this.size = _size;
    this.location = _location;
    

    // By Default
    this.isPhotoUpdated = false;
  }

  static NoDog(): Dog {
    return new Dog('', '', -1, '', '', new Date(), '', '', '');
  }
}
