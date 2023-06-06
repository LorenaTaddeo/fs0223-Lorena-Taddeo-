import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-superhero-form',
  templateUrl: './superhero-form.component.html',
  styleUrls: ['./superhero-form.component.scss']
})
export class SuperheroFormComponent {

  superheroForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.superheroForm = this.fb.group({
      name: ['', Validators.required],
      alterEgo: ['', Validators.required],
      power: ['', Validators.required],
      enemy: ['', Validators.maxLength(10)],
      planet: ['', [Validators.required, Validators.minLength(5)]],
      weakness: ''
    });
  }

  get powerOptions() {
    return ['Super forza', 'Volo', 'Invisibilità'];
  }

  onSubmit() {
    console.log('Supereroe creato:', this.superheroForm.value);
  }

  addPower() {
    const powers = this.superheroForm.get('powers') as FormArray;
    powers.push(this.fb.control(''));
  }

  removePower(index: number) {
    const powers = this.superheroForm.get('powers') as FormArray;
    powers.removeAt(index);
  }

}
