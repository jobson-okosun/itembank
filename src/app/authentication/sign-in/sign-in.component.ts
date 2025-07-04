import { TrueOrFalseComponent } from './../../pages/items/true-or-false/true-or-false.component';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/shared/user.service';
import { SchedulerAccountService } from '../services/scheduler-account.service';

declare var tinymce: any;
declare const MathJax: any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, AfterViewInit {
  private readonly notifier: NotifierService;
  // Login Form
  loginForm!: FormGroup;
  schedulerLoginForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error_msg = '';
  returnUrl!: string;
  notification_error = '';
  // set the current year
  year: number = new Date().getFullYear();
  checkSubmit: boolean = false;
  error: boolean = false;

  itembankForm: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private http: AuthenticationService,
    private notifierService: NotifierService,
    private router: Router,
    private userService: UserService,
    private schedulerAccountService: SchedulerAccountService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });

    this.schedulerLoginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.renderMath();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  get s() {
    return this.schedulerLoginForm.controls;
  }

  toggleForm() {
    this.itembankForm = !this.itembankForm;
  }

  onSubmit(): void {
    this.error = false;
    this.error_msg = '';
    this.submitted = true;
    this.checkSubmit = true;
    let whitespace =
      this.loginForm.controls['username'].value.indexOf(' ') >= 0;
    if (whitespace) {
      this.submitted = false;
      this.error = true;
      this.error_msg = 'username is invalid';
      return;
    }

    if (
      this.loginForm.controls['username'].value === '' ||
      this.loginForm.controls['password'].value === ''
    ) {
      this.error_msg = `All fields are required!`;
      this.error = true;
      this.submitted = false;
      return;
    }

    // if (
    //   this.loginForm.controls["username"].value ===
    //   this.loginForm.controls["password"].value
    // ) {
    //   this.error_msg = `username and password cannot have the same values!`;
    //   this.error = true;
    //   this.submitted = false;
    //   return;
    // }
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
    } else {
      this.http.login(this.loginForm.value).subscribe(
        (value) => {
          //todo: navigate
          // console.log(value);
          let data = {
            org_id: environment.org_id,
            role: value.authorities[0],
            id: value.id,
            key: environment.key,
            username: value.username,
          };
          if (value) {
            //  this.http.authorizeItembank(data).subscribe((value) => {
            // console.log('scheduler rights granted', value);
            //  });
          }
          this.router
            .navigate(['examalpha'])
            .catch((reason) => console.log(reason));
        },
        (err: HttpErrorResponse) => {
          //todo: show error
          this.error = true;
          if (err.status === 401) {
            this.error_msg = 'Invalid Login Credentials!';
            // this.submitted = false;
          } else if (err?.error?.message) {
            this.error_msg = err.error.message;
            // this.submitted = false;
          } else {
            this.error_msg = 'Sorry! Unable to perform login';
          }

          this.submitted = false;

          /* console.log(err); */
        }
      );
    }
  }

  onSchedulerSubmit(): void {
    this.error = false;
    this.error_msg = '';
    this.submitted = true;
    this.checkSubmit = true;
    let whitespace =
      this.schedulerLoginForm.controls['username'].value.indexOf(' ') >= 0;
    if (whitespace) {
      this.submitted = false;
      this.error = true;
      this.error_msg = 'username is invalid';
      return;
    }
    // console.log(this.schedulerLoginForm.value);
    // stop here if form is invalid
    if (this.schedulerLoginForm.invalid) {
      this.submitted = false;
    } else {
      this.http.schedulerLogin(this.schedulerLoginForm.value).subscribe(
        (value) => {
          //todo: navigate
          // console.log(value);
          // this.schedulerAccountService.setCurrentUser(value);
          this.userService.setCurrentUser(value);
          this.router
            .navigate(['schedule/participants'])
            .catch((reason) => console.log(reason));
        },
        (err: HttpErrorResponse) => {
          //todo: show error
          this.error = true;
          this.error_msg = err.error;
          this.submitted = false;
          // console.log(err);
        }
      );
    }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  //

  itemStimulus: string = '';

  preProcess(pl, o) {
    // console.log(pl);
    let content = o.content;
  }
  option: Object = {
    height: 200,
    menubar: true,
    branding: false,
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'table quickbars lists autoresize charmap paste',
    quickbars_insert_toolbars: false,
    setup: this.setup.bind(this),
    paste_preprocess: function (pl, o) {
      // console.log(o.content);
    },
    toolbar:
      'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent table quickimage quicklink | subscript superscript charmap',
  };

  setup(editor: any) {
    let activeEquation: HTMLElement | null = null;

    const openDialog = (latex: string) => {
      editor.windowManager.open({
        title: 'Edit Equation',
        size: 'normal',
        body: {
          type: 'panel',
          items: [
            {
              type: 'htmlpanel',
              html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey">${latex}</math-field>`,
            },
          ],
        },
        buttons: [
          { type: 'cancel', name: 'cancel', text: 'Cancel' },
          { type: 'submit', name: 'update', text: 'Update', primary: true },
        ],
        onSubmit: (api) => {
          const mathField = document.getElementById('mathfield') as any;
          const updatedLatex = mathField.getValue();

          if (activeEquation) {
            // Update the selected equation
            activeEquation.setAttribute('data-latex', updatedLatex);
            activeEquation.innerHTML = `\\(${updatedLatex}\\)`;
            activeEquation.classList.add('math-expression');

            // Trigger MathJax to re-render
            MathJax.typesetPromise([editor.getBody()])
              .then(() => console.log('Math rendering updated'))
              .catch((err) => console.error('Math rendering failed:', err));
          }

          activeEquation = null;
          api.close();
        },
      });
    };

    editor.on('init', () => {
      const editorBody = editor.getBody();

      // Event  for equations
      editorBody.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('.math-expression')) {
          const equationElement = target.closest(
            '.math-expression'
          ) as HTMLElement;
          activeEquation = equationElement;

          const latex = equationElement.getAttribute('data-latex') || '';

          openDialog(latex);
        }
      });
    });

    editor.ui.registry.addButton('equation-editor', {
      text: 'Insert Math',
      icon: 'character-count',
      onAction: () => {
        editor.windowManager.open({
          title: 'Insert Equation',
          size: 'normal',
          body: {
            type: 'panel',
            items: [
              {
                type: 'htmlpanel',
                html: `<math-field id="mathfield" style="width: 100%; height: 200px; border: 1px solid grey"></math-field>`,
              },
            ],
          },
          buttons: [
            { type: 'cancel', name: 'cancel', text: 'Cancel' },
            { type: 'submit', name: 'insert', text: 'Insert', primary: true },
          ],
          onSubmit: (api) => {
            const mathField = document.getElementById('mathfield') as any;
            const latex = mathField.getValue();

            // Create span for the math equation
            const content = `<span class="math-expression" data-latex="${latex}">\\(${latex}\\)</span>`;
            editor.insertContent(content);
            editor.insertContent('&nbsp;');

            // Ensure cursor placement is outside the equation
            editor.selection.collapse(false);

            MathJax.typesetPromise([editor.getBody()])
              .then(() => console.log('Math rendering complete'))
              .catch((err) => console.error('Math rendering failed:', err));

            api.close();
          },
        });
      },
    });
  }

  renderMath(): void {
    console.log('Math rendering initiated');
    const editorContent = tinymce?.activeEditor?.getBody();
    if (editorContent) {
      MathJax.typesetPromise([editorContent])
        .then((e) => console.log('Math rendering complete', e))
        .catch((err) => console.error('Math rendering failed:', err));
    } else {
      console.warn('No active editor content found for Math rendering.');
    }
  }
  show: boolean = false;
  viewInnerHtml() {
    console.log(this.itemStimulus, 'itemstimulus');
  }
  capture(event: any) {
    console.log(event, 'here');
    if (event) {
      console.log('event');
      this.show = !this.show;
      this.renderMath();
    }
  }
}
