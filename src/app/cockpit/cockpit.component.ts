import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
   // newServerContent = '';

   @ViewChild('serverContentInput') serverContentInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput: any) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
    serverName: nameInput.value,
     serverContent: this.serverContentInput.nativeElement.value
  });
  }

  onAddBlueprint(nameInput: any) {
this.bluePrintCreated.emit({
  serverName: nameInput.value,
  serverContent: this.serverContentInput.nativeElement.value
});
}

}
