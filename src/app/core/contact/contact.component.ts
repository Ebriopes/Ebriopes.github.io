import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IMail {
  name: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  mailForm: FormGroup;
  email: string = 'antonio.vargasrosales@gmail.com';

  constructor(private readonly fb: FormBuilder) {
    this.mailForm = fb.group({
      name: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  sendMail() {
    const { name, subject, message }: IMail = this.mailForm.value;
    const subjectText = `${
      name || 'Anonymous'
    }: ${subject} ... from ebriopes.com`;

    const url = `mailto:${this.email}?subject=${subjectText}&body=${message}`;

    window.open(url, '_blank');
  }
}
