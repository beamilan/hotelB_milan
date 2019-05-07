import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room.model';

@Component({
  selector: 'app-dettagli-stanza',
  templateUrl: './dettagli-stanza.component.html',
  styleUrls: ['./dettagli-stanza.component.css']
})
export class DettagliStanzaComponent implements OnInit {
    @Input() s : Room[];
  constructor() { }

  ngOnInit() {
  }

}
