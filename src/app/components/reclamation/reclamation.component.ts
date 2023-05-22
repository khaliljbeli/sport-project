import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
    private reclamationService : ReclamationService) { }

  ngOnInit() {
    this.reclamForm = this.formBuilder.group({
      subject: ["", [Validators.required]],
      description: ["", [Validators.required]],
  })
}

reclam(){
  this.reclamationService.addReclamation(this.reclamForm.value)
}
}
