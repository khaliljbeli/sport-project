import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { generateId } from 'src/app/shared/generateId';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  stores: any = [];
  storeForm: FormGroup;
  id: any;
  title: string = "Add Store";
  findedStore:any={};
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.stores = JSON.parse(localStorage.getItem("stores") || "[]");
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    //ID Exist (Editing)
    if (this.id) {
      this.title = "Edit Store";
      this.findedStore = this.stores.find((obj) => {return obj.id == this.id});
      // Tab.find((obj)=> { return  condition});
    }
    this.storeForm = this.fb.group({
      name: [""],
      adress: [""]
    })
  }
  validate() {
    if (this.id) {
      //Editing
      for (let i = 0; i < this.stores.length; i++) {
        if (this.stores[i].id == this.id) {
          this.stores[i] = this.findedStore;
          break;
        }
      }
    } else {
      //Adding
    this.stores = JSON.parse(localStorage.getItem("stores") || "[]");
    this.storeForm.value.id = generateId(this.stores);
    this.stores.push(this.storeForm.value);
    }
    localStorage.setItem("stores", JSON.stringify(this.stores));
  }

}
