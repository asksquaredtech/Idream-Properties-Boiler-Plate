import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CrudService } from '../services/crud.service'; // Adjust the path as necessary

@Component({
  selector: 'app-contact-form',
  standalone: true, // Mark this component as standalone
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  imports: [ReactiveFormsModule] // Import ReactiveFormsModule here
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CrudService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.crudService.addContact(this.contactForm.value)
        .then(() => {
          console.log('Contact saved successfully!');
          this.contactForm.reset();
        })
        .catch(error => console.error('Error saving contact:', error));
    }
  }
}