import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle = 'HEALTHY Life';


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(recipes: string) {
    // this.eventEmitterShow.emit(feature);
  }
}
