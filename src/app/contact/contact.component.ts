import { Component, OnInit } from '@angular/core';

import { Feedback, ContactType } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
  	'[@flyInOut]': '',
  	'style': 'display: block'
  },
  animations: [
  	flyInOut(),
  	expand()
  ]
})
export class ContactComponent implements OnInit {

	feedbackForm: FormGroup;
	contactType = ContactType;

	showForm:boolean = true;
	showSpinner:boolean = false;
	showFeedback:boolean = false;

	feedback: Feedback;

	formErrors = {
		firstname: {
			required: 'First Name is required',
			minlength: 'First Name must be at least 2 characters long',
			maxlength: 'First Name cannot be more than 25 characters long'
		},

		lastname: {
			required: 'Last Name is required',
			minlength: 'Last Name must be at least 2 characters long',
			maxlength: 'Last Name cannot be more than 25 characters long'
		},

		telnum: {
			required: 'Tel. Number is required',
			pattern: 'Tel. Number must contain only numbers'
		},

		email: {
			required: 'Email is required',
			email: 'Email not in valid format'
		},
	};

  constructor(private fb: FormBuilder,
  					  private feedbackservice: FeedbackService) { }

  ngOnInit() {
  	this.feedbackForm = this.fb.group({
  		firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
  		lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
  		telnum: [0, [Validators.required, Validators.pattern]],
  		email: ['', [Validators.required, Validators.email]],
  		agree: false,
  		contacttype: 'None',
  		message: ''
  	});
  }

  onSubmit() {
  	this.showForm = false;
		this.showSpinner = true;
		this.showFeedback = false;

  	this.feedbackservice.submitFeedback(this.feedbackForm.value)
  		.subscribe(feedback => {
  			this.feedback = feedback;

  			this.showForm = false;
				this.showSpinner = false;
				this.showFeedback = true;

				setTimeout(() => {
					this.showForm = true;
					this.showSpinner = false;
					this.showFeedback = false;
				}, 5000)

  		});

  	this.feedbackForm.reset({
  		firstname: '',
  		lastname: '',
  		telnum: 0,
  		email: '',
  		agree: false,
  		contacttype: 'None',
  		message: ''
  	});
  }

}
