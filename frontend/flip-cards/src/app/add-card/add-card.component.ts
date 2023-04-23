import {Component, EventEmitter, Output} from '@angular/core';
import {Card} from "../../shared/models/Card";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.less']
})
export class AddCardComponent {
  @Output()
  add = new EventEmitter<Card>();
  form = new FormGroup({
    nameInput: new FormControl(null, Validators.required),
    descriptionInput: new FormControl(null, [Validators.required, Validators.max(1000)]),
  });

  submit(): void {

    const name = this.form.get('nameInput')?.value;
    const description = this.form.get('descriptionInput')?.value;

    if (name && description) {
      this.add.emit({name, description});
    }
    this.form.reset();
  }
}
