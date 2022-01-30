import { Injectable } from '@angular/core';
import { Bank, Adress } from './types';
@Injectable({
  providedIn: 'root'
})
export class BanksInfoService {

  banks: Bank[] = [
    {
      id: 1,
      name: 'AmeriaBank',
      adress: {
        county: 'Armenia',
        city: 'Yerevan'
      }
    },

    {
      id: 2,
      name: 'InecoBank',
      adress: {
        county: 'Armenia',
        city: 'Kirovakan'
      }
    },

    {
      id: 3,
      name: 'ArcaxBank',
      adress: {
        county: 'Arcax',
        city: 'Stepanakert'
      }
    },

    {
      id: 4,
      name: 'ArdshinBank',
      adress: {
        county: 'Armenia',
        city: 'Eghegnadzor'
      }
    },

    {
      id: 5,
      name: 'EvokaBank',
      adress: {
        county: 'Armenia',
        city: 'Xaphan'
      }
    },

    {
      id: 6,
      name: 'HayEkonomBank',
      adress: {
        county: 'Armenia',
        city: 'Abovyan'
      }
    },

    {
      id: 7,
      name: 'YuniBank',
      adress: {
        county: 'Arcax',
        city: 'Martakert'
      }
    },

    {
      id: 8,
      name: 'ZberBank',
      adress: {
        county: 'Russia',
        city: 'Moscow'
      }
    },

    {
      id: 9,
      name: 'AlfaBAnk',
      adress: {
        county: 'Russia',
        city: 'Leningrad'
      }
    },

    {
      id: 9,
      name: 'CredutBank',
      adress: {
        county: 'France',
        city: 'Paris'
      }
    }

  ]

  getBankInfoById(id: number): Bank {
    return this.banks.find(obj => obj.id === id);
  }

  getAllAdressTheBanks(): Adress[] {
    return this.banks.map(obj => obj.adress)
  }

  getBanksByCountry(country: string): Bank[] {
    return this.banks.filter(item => item.adress.county === country)
  }

  getAllCounty(): string[] {
    let reslut = this.banks.map(item => item.adress.county);
    return Array.from(new Set(reslut));
  }

}











