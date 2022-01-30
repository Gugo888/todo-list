import { Component, OnInit } from '@angular/core';
import { BanksInfoService } from '../banks-info.service';
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent  {

  constructor(private banksService: BanksInfoService) { }

  banker = this.banksService.banks;
  bankAllCountry = this.banksService.getAllCounty();

  getBanksByCountry(country: string) {
    return this.banksService.getBanksByCountry(country)
  }
}















