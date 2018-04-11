import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Devotee } from '../../shared/sdk/index';

@Component({
  selector: 'app-devotee-card',
  templateUrl: './devotee-card.component.html',
  styleUrls: ['./devotee-card.component.css']
})
export class DevoteeCardComponent implements OnInit {

  form: FormGroup;  
  @Input() devotee: Devotee;

  constructor(    
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({

  });    
  }

}
