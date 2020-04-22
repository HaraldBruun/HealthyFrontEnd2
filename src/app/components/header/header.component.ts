import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() eventEmitterShow = new EventEmitter<string>();
  headerTitle = 'HEALTHY Life';

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.eventEmitterShow.emit(feature);
  }
}
