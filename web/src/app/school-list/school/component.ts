import { Component, OnInit, Input } from '@angular/core';
import { School } from 'yacs-api-client';

@Component({
  selector: 'school',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class SchoolComponent {
  @Input() school: School;
}
