"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([["src_app_pages_users_users_module_ts"],{

/***/ 65178:
/*!**************************************************************!*\
  !*** ./src/app/pages/moderation/models/moderation-levels.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModerationLevels": () => (/* binding */ ModerationLevels)
/* harmony export */ });
var ModerationLevels;
(function (ModerationLevels) {
    ModerationLevels["REVIEW"] = "REVIEW";
    ModerationLevels["APPROVE"] = "APPROVE";
    ModerationLevels["PUBLISH"] = "PUBLISH";
})(ModerationLevels || (ModerationLevels = {}));


/***/ }),

/***/ 86594:
/*!************************************************************!*\
  !*** ./src/app/pages/users/add-user/add-user.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserComponent": () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_new_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/new-user-model */ 53284);
/* harmony import */ var _moderation_models_moderation_levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../moderation/models/moderation-levels */ 65178);
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/role */ 45564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/users.service */ 29073);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _items_item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../items/item-topic/item-topic.component */ 86216);
/* harmony import */ var _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/rightsidebar/rightsidebar.component */ 56034);














const _c0 = function () {
  return {
    color: "red"
  };
};

function AddUserComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Firstname is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Lastname is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_div_39_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_div_39_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddUserComponent_div_39_span_1_Template, 2, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddUserComponent_div_39_span_2_Template, 2, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](38);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors["pattern"]);
  }
}

function AddUserComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Please enter phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-item-topic", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sendSubjects", function AddUserComponent_div_55_Template_app_item_topic_sendSubjects_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r21.recievedTag($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Subject");
  }
}

function AddUserComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please re-enter password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_span_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Password Mismatch.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function AddUserComponent_button_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Create User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r0.invalid);
  }
}

function AddUserComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r18.submitted);
  }
}

class AddUserComponent {
  constructor(userService, notifier) {
    this.userService = userService;
    this.notifier = notifier;
    this.subjects = [];
    this.role = new _model_role__WEBPACK_IMPORTED_MODULE_3__.Role();
    this.Role = [];
    this.selectedRoles = [];
    this.selectedRoleIds = [];
    this.submitted = false;
    this.moderatorLevels = [];
    this.adminSelected = false;
  }
  /** Handler function for the quick guide pull out */


  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');

    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Users'
    }, {
      label: 'Add-User',
      active: true
    }];
    this.moderatorLevels = Object.values(_moderation_models_moderation_levels__WEBPACK_IMPORTED_MODULE_2__.ModerationLevels);
    this.appRoles$ = this.userService.listRoles();
  }

  clearSelectedRoles() {
    this.selectedRoles = [];
  }

  onAdd($event) {
    if (this.Role.length > 0 && $event.role === 'ADMIN') {
      this.Role = []; // empties the previously added roles if any, before picking admin role

      this.Role.push($event.role); // pushes just the admin role

      this.selectedRoles = []; // empties the previously selected roles

      this.selectedRoles.push($event.role); // update the value of selected roles to just the admin

      this.selectedRoleIds = [];
      this.selectedRoleIds.push($event.id);
      return;
    } else {
      this.Role.push($event);
      this.selectedRoles.push($event.role);
      this.selectedRoleIds.push($event.id);
    }
  }

  removeRole($event) {
    // console.log($event.label);
    if (this.selectedRoles.includes($event.label)) {
      this.selectedRoles.splice(this.selectedRoles.indexOf($event.role));
    }
  }

  createUser(value) {
    this.submitted = true;

    if (value.valid === false) {
      this.submitted = false;
      return this.notifier.notify('error', 'All fields are required.');
    }
    /* if (this.Role.length === 0) {
      this.submitted = false;
      return this.notifier.notify(
        'warning',
        'A role must be assigned to a user.'
      );
    } */


    if (!this.role) {
      this.submitted = false;
      return this.notifier.notify('warning', 'A role must be assigned to a user.');
    }

    if (value.password !== value.confirmPassword) {
      this.submitted = false;
      return this.notifier.notify('warning', 'passwords do not match!');
    }

    this.mapFormToNewUser(value);
  }

  mapFormToNewUser(value) {
    //let role = this.selectedRoleIds;
    let moderatorLevel = this.moderationLevels;
    let subjectIds = [];
    let user = new _model_new_user_model__WEBPACK_IMPORTED_MODULE_1__.NewUserModel();
    let role = this.role.id;
    this.subjects.forEach(value => subjectIds.push(value.id)); // console.log(subjectIds);
    //value.subjectIds.forEach((value) => subjectIds.push(value.subjectIds));

    user.email = value.email.trim();
    user.firstName = value.firstname.trim();
    user.lastName = value.lastname.trim();
    user.password = value.password.trim();
    user.username = value.username.trim();
    user.phone = value.phone.trim(); //user.roles = role;

    user.roles.push(this.role.id);
    user.moderationLevel = moderatorLevel; //user.subjectIds = subjectIds;

    let id = this.sendUserToServer(user); // console.log(user);

    if (id) {
      user = new _model_new_user_model__WEBPACK_IMPORTED_MODULE_1__.NewUserModel();
      this.ngOnInit();
    }
  }

  sendUserToServer(user) {
    let success;
    this.userService.addNewUser(user).subscribe(value => {
      // todo: display success
      if (value) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'success',
          title: 'Congratulations',
          html: 'You have successfully created a new user!'
        });
        this.submitted = false;
      }

      this.selectedRoles = [];
      this.Role = [];
      this.selectedRoleIds = [];
      this.ngOnInit();
      success = value;
    }, error => {
      // todo: display error
      this.submitted = false;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'error',
        title: 'Failed',
        text: `${error.error.errors[0]}`
      });
      this.selectedRoles = [];
      this.Role = [];
      this.selectedRoleIds = [];
      this.ngOnInit();
    });
    return success;
  }

  logRole(role) {// console.log(this.role);
  }

  recievedTag($event) {
    this.subjects = $event; // console.log('assigned subject', this.subjects);
  }

}

AddUserComponent.ɵfac = function AddUserComponent_Factory(t) {
  return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_user_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_9__.NotifierService));
};

AddUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AddUserComponent,
  selectors: [["app-add-user"]],
  decls: 78,
  vars: 47,
  consts: [["title", "ADD-USER", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "live-preview"], [1, "row", "g-3", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "col-md-6"], ["for", "firstname", 1, "form-label"], [3, "ngStyle"], ["type", "text", "name", "firstname", "id", "firstname", "placeholder", "Enter your First name", "required", "", "ngModel", "", 1, "form-control"], ["firstname", "ngModel"], [3, "ngStyle", 4, "ngIf"], ["for", "lastnameInput", 1, "form-label"], ["type", "text", "name", "lastname", "id", "lastnameInput", "placeholder", "Enter your Lastname", "required", "", "ngModel", "", 1, "form-control"], ["lastname", "ngModel"], ["for", "usernameInput", 1, "form-label"], ["type", "text", "name", "username", "id", "usernameInput", "placeholder", "Enter your Username", "required", "", "ngModel", "", 1, "form-control"], ["username", "ngModel"], ["for", "email", 1, "form-label"], ["type", "email", "name", "email", "id", "email", "placeholder", "enter email", "pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "required", "", "ngModel", "", 1, "form-control"], ["emailRef", "ngModel"], [4, "ngIf"], ["for", "phone", 1, "form-label"], ["type", "text", "name", "phone", "id", "phone", "placeholder", "enter your phone number", "required", "", "ngModel", "", 1, "form-control"], ["phone", "ngModel"], ["for", "role", 1, "form-label"], ["bindLabel", "role", "name", "role", "ngModel", "", 3, "items", "ngModel", "ngModelChange"], ["class", "col-12", 4, "ngIf"], ["for", "inputPassword4", 1, "form-label"], ["type", "password", "name", "password", "id", "inputPassword4", "placeholder", "Password", "required", "", "ngModel", "", 1, "form-control"], ["password", "ngModel"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "name", "confirmPassword", "placeholder", "re-enter your password", "required", "", "ngModel", "", 1, "form-control"], ["confirmPassword", "ngModel"], [1, "col-12"], [1, "d-flex", "gap-2", "justify-content-end"], [3, "currentView", "pageGuide", "settingsButtonClicked"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], [3, "ngIf"], [1, "mb-3"], [3, "label", "sendSubjects"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-outline-primary", "btn-load", 3, "disabled"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "visually-hidden"], [1, "flex-grow-1", "ms-2"]],
  template: function AddUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-breadcrumbs", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);

        return _r0.valid && ctx.createUser(_r0.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Firstname ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AddUserComponent_span_15_Template, 2, 2, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Lastname ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, AddUserComponent_span_23_Template, 2, 2, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Username ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, AddUserComponent_span_31_Template, 2, 2, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "input", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, AddUserComponent_div_39_Template, 3, 2, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Phone number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "input", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, AddUserComponent_span_47_Template, 2, 2, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Roles ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "ng-select", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_ng_select_ngModelChange_53_listener($event) {
        return ctx.role = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](54, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, AddUserComponent_div_55_Template, 3, 1, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "input", 31, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, AddUserComponent_span_63_Template, 2, 2, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Confirm Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "input", 34, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, AddUserComponent_span_71_Template, 2, 2, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, AddUserComponent_span_72_Template, 2, 2, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "app-rightsidebar", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("settingsButtonClicked", function AddUserComponent_Template_app_rightsidebar_settingsButtonClicked_75_listener() {
        return ctx.onSettingsButtonClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, AddUserComponent_button_76_Template, 2, 1, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, AddUserComponent_ng_template_77_Template, 7, 1, "ng-template", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](22);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](38);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](46);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](62);

      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](39, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", _r1.invalid && _r1.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](40, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", _r3.invalid && _r3.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](41, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", _r5.invalid && _r5.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](42, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", _r7.invalid && _r7.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](43, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", _r9.invalid && _r9.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](44, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](54, 37, ctx.appRoles$))("ngModel", ctx.role);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.role.role == "AUTHOR" || ctx.role.role == "MODERATOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](45, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", _r12.invalid && _r12.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r12.invalid && _r12.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](46, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", _r14.invalid && _r14.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (_r14.errors == null ? null : _r14.errors["required"]) && _r14.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r14.value !== _r12.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentView", "Creating New User");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.submitted);
    }
  },
  directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.PatternValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _items_item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_6__.ItemTopicComponent, _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightsidebarComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 80305:
/*!****************************************************************!*\
  !*** ./src/app/pages/users/directives/no-letters.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noLettersDirective": () => (/* binding */ noLettersDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class noLettersDirective {
    validate(control) {
        if (control.value && /[a-zA-Z]/.test(control.value)) {
            return { lettersNotAllowed: true };
        }
        return null;
    }
}
noLettersDirective.ɵfac = function noLettersDirective_Factory(t) { return new (t || noLettersDirective)(); };
noLettersDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: noLettersDirective, selectors: [["", "noLetters", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: noLettersDirective,
                multi: true
            }
        ])] });


/***/ }),

/***/ 32966:
/*!**************************************************************!*\
  !*** ./src/app/pages/users/directives/no-space.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoSpaceDirective": () => (/* binding */ NoSpaceDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class NoSpaceDirective {
    validate(control) {
        if (control.value && /\s/.test(control.value)) {
            return { noSpaces: true };
        }
        return null;
    }
}
NoSpaceDirective.ɵfac = function NoSpaceDirective_Factory(t) { return new (t || NoSpaceDirective)(); };
NoSpaceDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NoSpaceDirective, selectors: [["", "noInputSpace", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: NoSpaceDirective,
                multi: true
            }])] });


/***/ }),

/***/ 86609:
/*!**************************************************************!*\
  !*** ./src/app/pages/users/edit-user/edit-user.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserComponent": () => (/* binding */ EditUserComponent)
/* harmony export */ });
/* harmony import */ var _model_change_user_password_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/change-user-password.model */ 89682);
/* harmony import */ var _model_change_user_details_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/change-user-details.model */ 47244);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../items/item-http.service */ 45911);
/* harmony import */ var _user_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/users.service */ 29073);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);












function EditUserComponent_div_0_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", ctx_r2.userDetail.username, ") ");
} }
function EditUserComponent_div_0_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", user_r7.role, "", ctx_r3.userDetail.userRolesDTOList.length - i_r8 === 1 ? "" : ",", " ");
} }
function EditUserComponent_div_0_ng_template_36_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_0_ng_template_36_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r13.userDetail.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx_r10.userDetail.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r10.userDetail.username)("disabled", !ctx_r10.currentUser.authorities.includes("ADMIN"));
} }
function EditUserComponent_div_0_ng_template_36_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditUserComponent_div_0_ng_template_36_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r15.updateUserDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EditUserComponent_div_0_ng_template_36_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r12.updating);
} }
function EditUserComponent_div_0_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function EditUserComponent_div_0_ng_template_36_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r17.updateUserDetails(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, EditUserComponent_div_0_ng_template_36_div_3_Template, 5, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_0_ng_template_36_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r19.userDetail.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_0_ng_template_36_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r20.userDetail.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_0_ng_template_36_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r21.userDetail.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_0_ng_template_36_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r22.userDetail.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, EditUserComponent_div_0_ng_template_36_button_26_Template, 2, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, EditUserComponent_div_0_ng_template_36_button_27_Template, 7, 1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditUserComponent_div_0_ng_template_36_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r23.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.userDetail.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx_r5.userDetail.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r5.userDetail.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx_r5.userDetail.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r5.userDetail.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx_r5.userDetail.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r5.userDetail.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx_r5.userDetail.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r5.userDetail.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.updating);
} }
function EditUserComponent_div_0_li_37_ng_template_4_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "uppercase");
} if (rf & 2) {
    const item_r29 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, item_r29[0].subjectName), " ");
} }
function EditUserComponent_div_0_li_37_ng_template_4_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditUserComponent_div_0_li_37_ng_template_4_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r30.addSubjectToUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Update Subject(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EditUserComponent_div_0_li_37_ng_template_4_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r28.updating);
} }
function EditUserComponent_div_0_li_37_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 36, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function EditUserComponent_div_0_li_37_ng_template_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r32.addSubjectToUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Add/Remove User Subjects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ng-select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_0_li_37_ng_template_4_Template_ng_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r34.selectedSubjects = $event; })("change", function EditUserComponent_div_0_li_37_ng_template_4_Template_ng_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r35.viewDeselected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EditUserComponent_div_0_li_37_ng_template_4_ng_template_10_Template, 2, 3, "ng-template", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, EditUserComponent_div_0_li_37_ng_template_4_button_13_Template, 2, 0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, EditUserComponent_div_0_li_37_ng_template_4_button_14_Template, 7, 1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r24.subjects)("multiple", true)("ngModel", ctx_r24.selectedSubjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r24.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r24.updating);
} }
function EditUserComponent_div_0_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Subjects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EditUserComponent_div_0_li_37_ng_template_4_Template, 15, 5, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavItem", 2);
} }
const _c0 = function (a0, a1) { return { "badge-soft-success": a0, "badge-soft-danger": a1 }; };
function EditUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditUserComponent_div_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r36.routeBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Back to Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, EditUserComponent_div_0_p_22_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, EditUserComponent_div_0_ng_container_23_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "ul", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Personal Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, EditUserComponent_div_0_ng_template_36_Template, 30, 11, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, EditUserComponent_div_0_li_37_Template, 5, 1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](31);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r0.userDetail.firstName[0].toUpperCase(), "", ctx_r0.userDetail.lastName[0].toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r0.userDetail.firstName, " ", ctx_r0.userDetail.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.userDetail.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.userDetail.userRolesDTOList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](12, _c0, ctx_r0.userDetail.activated, !ctx_r0.userDetail.activated));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userDetail.activated ? "Active" : "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("activeId", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavItem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.authority === "ADMIN" && ctx_r0.userDetail.role !== "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavOutlet", _r4);
} }
function EditUserComponent_1_ng_template_0_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r42);
} }
function EditUserComponent_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Are you sure you want to remove the following subjects from this user? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EditUserComponent_1_ng_template_0_ul_4_Template, 3, 1, "ul", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r39.deselectedSubjects);
} }
function EditUserComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, EditUserComponent_1_ng_template_0_Template, 5, 1, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
} }
class EditUserComponent {
    constructor(router, activatedRoute, itemService, userService, userService2, location) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.itemService = itemService;
        this.userService = userService;
        this.userService2 = userService2;
        this.location = location;
        this.roles = [];
        this.newPassword = new _model_change_user_password_model__WEBPACK_IMPORTED_MODULE_0__.ChangeUserPassword();
        this.newUserDetails = new _model_change_user_details_model__WEBPACK_IMPORTED_MODULE_1__.ChangeUserDetails();
        this.subjects = [];
        this.selectedSubjects = [];
        this.deselectedSubjects = [];
        this.selectedSubjectIds = [];
        this.userDefaultSubjects = [];
        this.updating = false;
        // currentUser: Account = this.userService2.getCurrentUser();
        this.currentUser = this.userService2.getCurrentUser()
            ? this.userService2.getCurrentUser()
            : this.userService2.getCurrentUserAfterReload();
        this.activatedRoute.paramMap.subscribe((params) => {
            this.userId = params.get("id");
        });
    }
    ngOnInit() {
        if (this.currentUser.authorities.includes("ADMIN")) {
            this.fetchAdminUserDetail(this.userId);
            this.itemService.fetchAllSubjectsDropdown().subscribe((value) => {
                this.subjects = value;
            });
            this.selectedSubjects = this.userDefaultSubjects;
        }
        else {
            this.fetchUserDetail(this.userId);
        }
        this.roles$ = this.userService.listRoles();
    }
    showSelect(event) {
        // console.log(event);
    }
    fetchAdminUserDetail(userId) {
        this.userService.getUserDetail(userId).subscribe((value) => {
            // console.log(value);
            this.userDetail = value;
            this.userDetail.userSubjectsDTOS.forEach((subject) => {
                this.userDefaultSubjects.push(subject);
            });
            value.userRolesDTOList.forEach((role) => {
                this.roles.push(role.role);
                this.userDetail.role = role.role;
            });
            // console.log(this.roles);
        }, (error) => {
            // console.log(error);
        });
    }
    fetchUserDetail(userId) {
        this.userService.getSingleUserDetails(userId).subscribe((value) => {
            // console.log(value);
            this.userDetail = value;
            /* this.userDetail.userSubjectsDTOS.forEach((subject) => {
              this.userDefaultSubjects.push(subject);
            }); */
            value.userRolesDTOList.forEach((role) => {
                this.roles.push(role.role);
                this.userDetail.role = role.role;
            });
            // console.log(this.roles);
        }, (error) => {
            // console.log(error);
        });
    }
    cancel() {
        this.location.back();
        //this.router.navigate(['/examalpha/users']);
    }
    changeUserPassword() {
        if (this.confirmation.trim() === this.newPassword.newPassword.trim()) {
            this.userService.ChangeUserPassword(this.newPassword).subscribe((value) => {
                // console.log(value);
            }, (error) => {
                // console.log(error);
            });
        }
    }
    updateUserDetails(updateDetailForm) {
        this.updating = true;
        //console.log(updateDetailForm.value);
        this.newUserDetails.firstName = this.userDetail.firstName.trim();
        this.newUserDetails.lastName = this.userDetail.lastName.trim();
        this.newUserDetails.phone = this.userDetail.phone.trim();
        this.newUserDetails.email = this.userDetail.email.trim();
        this.newUserDetails.role = this.userDetail.userRolesDTOList[0].roleId;
        this.newUserDetails.id = this.userDetail.id;
        //console.log(this.newUserDetails);
        this.userService.updateUserDetails(this.newUserDetails).subscribe((value) => {
            //console.log(value);
            this.updating = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: "success",
                html: "User information has been updated successfully.",
            });
        }, (error) => {
            //console.log(error);
            this.updating = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: "error",
                html: `${error.error}`,
            });
        });
    }
    recieveSubjects($events) {
        // console.log($events);
    }
    viewDeselected($event) {
        //this.deselectedSubjects = $event;
        // console.log($event.ngValue);
    }
    addSubjectToUser() {
        console.log(this.subjects, "subjects");
        console.log(this.selectedSubjects, "selected subjects");
        this.updating = true;
        //  console.log(this.selectedSubjectIds);
        console.log(this.userDefaultSubjects, "default");
        // this.selectedSubjects.forEach((subject) => {
        //   /* let newSubject = new AddSubjectToUser();
        //   newSubject.userId = this.userId; */
        //   if (this.selectedSubjectIds.includes(subject.subjectId)) {
        //     this.deselectedSubjects.push(subject.subjectName);
        //   } else {
        //     console.log(subject);
        //     console.log("here");
        //     this.selectedSubjectIds.push(subject.subjectId);
        //   }
        // });
        console.log(this.selectedSubjects, "selected");
        this.selectedSubjects.forEach((subject) => {
            if (!this.selectedSubjectIds.includes(subject.id)) {
                this.selectedSubjectIds.push(subject.id);
            }
        });
        console.log("Default Subjects1:", this.userDefaultSubjects);
        console.log("Selected Subjects1:", this.selectedSubjects);
        const removedSubjects = this.userDefaultSubjects.filter((subject) => !this.selectedSubjects.some((selected) => selected.subjectName === subject.subjectName));
        this.deselectedSubjects = removedSubjects;
        console.log("Removed Subjects:", removedSubjects);
        console.log(this.selectedSubjectIds, "selectedSubjectIds");
        // return;
        this.newSubject = {
            id: "",
            userId: this.userId,
            subjectIds: this.selectedSubjectIds,
        };
        if (this.deselectedSubjects.length > 0) {
            // Get names of removed subject
            const removedSubjectNames = removedSubjects.map(subject => subject.subjectName).join(", ");
            // this.subjects
            //     .filter(subject => removedSubjects.includes(subject.id))
            //     .map(subject => subject.subjectName)
            //     .join(", ");
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: "warning",
                title: "Warning",
                text: `Are you sure you want to remove the following subject(s): ${removedSubjectNames} from ${this.userDetail.username.toUpperCase()}?`,
                showCancelButton: true,
                confirmButtonText: "Yes, remove them!",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Proceed with the removal
                    this.selectedSubjectIds = this.selectedSubjectIds.filter((id) => !removedSubjects.some((removed) => removed.subjectId === id));
                    console.log("Updated selectedSubjectIds:", this.selectedSubjectIds);
                    this.updateSubjectAssignment();
                }
            });
        }
        else {
            this.updateSubjectAssignment();
        }
        console.log(this.newSubject);
        console.log(this.selectedSubjectIds);
        // return;
    }
    updateSubjectAssignment() {
        this.userService
            .addremoveSubjectFromUser(this.newSubject)
            .toPromise()
            .then((response) => {
            if (response) {
                this.updating = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: "success",
                    title: "Congratulations",
                    text: `You successfully assigned ${this.selectedSubjectIds.length} subject(s) to ${this.userDetail.username.toUpperCase()}`,
                });
            }
        })
            .catch((error) => {
            this.updating = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: "error",
                title: "Failed!",
                text: error.error.message,
            });
        });
    }
    editUserModerationLevels() { }
    routeBack() {
        this.location.back();
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_3__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_user_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location)); };
EditUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "position-relative", "mx-n4", "mt-n4"], [1, "py-2", "d-flex", "align-items-center", "flex-row", "gap-2"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-gray-800", "dark:text-white"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 12h14M5 12l4-4m-4 4 4 4"], [3, "click"], [1, "profile-wid-bg", "profile-setting-img"], [1, "overlay-content"], [1, "text-end", "p-3"], [1, "row"], [1, "col-lg-3"], [1, "card", "mt-n5"], [1, "card-body", "p-4"], [1, "text-center"], [1, "profile-user", "position-relative", "d-inline-block", "mx-auto", "mb-4"], [1, "d-flex", "justify-content-center", "mb-4"], [1, "image-placeholder", "bg-soft-primary", "rounded-circle"], [1, ""], [1, "fs-16", "mb-1", "text-capitalize"], ["class", "text-muted mb-1", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-border", "p-2", 3, "ngClass"], [1, "col-lg-9"], [1, "card", "mt-lg-n5"], [1, "card-header"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-tabs-custom", "rounded", "card-header-tabs", "border-bottom-0", 3, "activeId"], ["customNav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], [1, "fas", "fa-home"], ["ngbNavContent", ""], ["class", "nav-item", 3, "ngbNavItem", 4, "ngIf"], [1, "tab-content"], [3, "ngbNavOutlet"], [1, "text-muted", "mb-1"], [1, "text-primary", "mb-0"], ["novalidate", "", 3, "ngSubmit"], ["updateUserDetailForm", "ngForm"], ["class", "col-12", 4, "ngIf"], [1, "col-lg-6"], [1, "mb-3"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstnameInput", "name", "firstName", "placeholder", "Enter your firstname", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastnameInput", "name", "lastName", "placeholder", "Enter your lastname", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["for", "phone", 1, "form-label"], ["type", "text", "name", "phone", "id", "phone", "placeholder", "Enter your phone number", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["for", "email", 1, "form-label"], ["type", "email", "name", "email", "id", "email", "placeholder", "Enter your email", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "col-lg-12"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-load", 3, "disabled", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "col-12"], ["type", "text", "name", "username", "id", "username", "placeholder", "Enter username", 1, "form-control", 3, "value", "ngModel", "disabled", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-primary", "btn-load", 3, "disabled"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "visually-hidden"], [1, "flex-grow-1", "ms-2"], [1, "far", "fa-envelope"], ["assignNewTagToUserForm", "ngForm"], ["id", "newlink"], ["id", "1"], ["for", "choices-multiple-default", 1, "form-label"], ["bindLabel", "subjectName", "name", "subject", 1, "custom", 3, "items", "multiple", "ngModel", "ngModelChange", "change"], ["ng-optgroup-tmp", ""], [1, "d-flex", "gap-2", "justify-content-end"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success btn-load", 3, "disabled", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-outline-success", "btn-load", 3, "disabled"], ["confirmDelete", ""], [1, "modal-body", "p-5"], ["class", "ps-4 vstack gap-2", 4, "ngFor", "ngForOf"], [1, "ps-4", "vstack", "gap-2"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, EditUserComponent_div_0_Template, 41, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EditUserComponent_1_Template, 2, 0, undefined, 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updating);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavContent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptgroupTemplateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe], styles: [".profile-setting-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 90px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1zZXR0aW5nLWltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDkwcHghaW1wb3J0YW50O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 72419:
/*!**********************************************************!*\
  !*** ./src/app/pages/users/model/account-status-enum.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatusEnum": () => (/* binding */ AccountStatusEnum)
/* harmony export */ });
var AccountStatusEnum;
(function (AccountStatusEnum) {
    AccountStatusEnum["ACTIVE"] = "ACTIVE";
    AccountStatusEnum["INACTIVE"] = "INACTIVE";
})(AccountStatusEnum || (AccountStatusEnum = {}));


/***/ }),

/***/ 17017:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/model/activity-list-page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityListPage": () => (/* binding */ ActivityListPage)
/* harmony export */ });
class ActivityListPage {
}


/***/ }),

/***/ 21398:
/*!****************************************************************!*\
  !*** ./src/app/pages/users/model/add-subject-to-user.model.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSubjectToUser": () => (/* binding */ AddSubjectToUser)
/* harmony export */ });
class AddSubjectToUser {
    constructor() {
        this.subjectIds = [];
    }
}


/***/ }),

/***/ 89682:
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/model/change-user-password.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeUserPassword": () => (/* binding */ ChangeUserPassword)
/* harmony export */ });
class ChangeUserPassword {
}


/***/ }),

/***/ 81734:
/*!***************************************************!*\
  !*** ./src/app/pages/users/model/filter-users.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterUsers": () => (/* binding */ FilterUsers)
/* harmony export */ });
class FilterUsers {
    constructor() {
        this.email = null;
        this.username = null;
        this.subjectId = null;
        this.role = null;
        this.activeStatus = null;
        this.verificationStatus = null;
        this.registrationStatus = null;
    }
}


/***/ }),

/***/ 53284:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/model/new-user-model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewUserModel": () => (/* binding */ NewUserModel)
/* harmony export */ });
class NewUserModel {
    constructor() {
        this.roles = [];
        this.subjectIds = [];
    }
}


/***/ }),

/***/ 45564:
/*!*******************************************!*\
  !*** ./src/app/pages/users/model/role.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
class Role {
}


/***/ }),

/***/ 83758:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/model/user-activity-filter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityFilter": () => (/* binding */ UserActivityFilter)
/* harmony export */ });
class UserActivityFilter {
    constructor() {
        this.userActivityType = null;
        this.startDate = null;
        this.endDate = null;
    }
}


/***/ }),

/***/ 13401:
/*!**********************************************************!*\
  !*** ./src/app/pages/users/model/user-activity-types.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityTypes": () => (/* binding */ UserActivityTypes)
/* harmony export */ });
var UserActivityTypes;
(function (UserActivityTypes) {
    UserActivityTypes["LOGIN"] = "LOGIN";
    UserActivityTypes["CREATE_ITEM"] = "CREATE_ITEM";
    UserActivityTypes["EDIT_ITEM"] = "EDIT_ITEM";
    UserActivityTypes["DELETE_ITEM"] = "DELETE_ITEM";
    UserActivityTypes["CREATE_PASSAGE"] = "CREATE_PASSAGE";
    UserActivityTypes["EDIT_PASSAGE"] = "EDIT_PASSAGE";
    UserActivityTypes["DELETE_PASSAGE"] = "DELETE_PASSAGE";
    UserActivityTypes["ADD_ITEM_TO_PASSAGE"] = "ADD_ITEM_TO_PASSAGE";
    UserActivityTypes["DELETE_ITEM_TO_PASSAGE"] = "DELETE_ITEM_TO_PASSAGE";
    UserActivityTypes["COPY_ITEM"] = "COPY_ITEM";
    UserActivityTypes["MOVE_ITEM"] = "MOVE_ITEM";
    UserActivityTypes["REJECT_ITEM"] = "REJECT_ITEM";
    UserActivityTypes["APPROVE_ITEM"] = "APPROVE_ITEM";
    UserActivityTypes["LOGOUT"] = "LOGOUT";
})(UserActivityTypes || (UserActivityTypes = {}));


/***/ }),

/***/ 36959:
/*!************************************************************************************!*\
  !*** ./src/app/pages/users/moderator-activities/moderator-activities.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModeratorActivitiesComponent": () => (/* binding */ ModeratorActivitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar-angular */ 51618);






function ModeratorActivitiesComponent_ng_template_302_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngx-simplebar", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Joseph Parker");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "20 Dec 2021 - 05:47AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " I am getting message from customers that when they place order always get error message . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Tonya Noble");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "22 Dec 2021 - 02:32PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Thomas Taylor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "24 Dec 2021 - 05:20PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " If you have further questions, please contact Customer Support from the \u201CAction Menu\u201D on your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Online Order Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h5", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Tonya Noble");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "26 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Online Order Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " provides you with the most current status of your order. To help manage your order refer to the \u201CAction Menu\u201D to initiate return, contact Customer Support and more. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h5", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Nancy Martino");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "8 sec ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Other shipping methods are available at checkout if you want your purchase delivered faster. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "form", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Leave a Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "textarea", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Post Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModeratorActivitiesComponent_ng_template_306_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "File Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Upload Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h6", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "App pages.zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Zip File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "2.22 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "21 Dec, 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "li", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Velzon admin.ppt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "PPT File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "2.24 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "25 Dec, 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ul", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "li", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h6", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Images.zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "ZIP File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "1.02 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "28 Dec, 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "ul", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "h6", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Bg-pattern.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "PNG File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "879 KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "02 Nov 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModeratorActivitiesComponent_ng_template_310_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Time Entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "thead", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Timer Idle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Tasks Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Thomas Taylor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "02 Jan, 2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "3 hrs 12 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "05 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Apps Pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Tonya Noble");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "28 Dec, 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "1 hrs 35 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Profile Page Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Tonya Noble");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "27 Dec, 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "4 hrs 26 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "03 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Ecommerce Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModeratorActivitiesComponent_ng_template_314_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Team Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModeratorActivitiesComponent_ng_template_314_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const modal_r6 = restoredCtx.$implicit; return modal_r6.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Members :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ngx-simplebar", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Nancy Martino");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " HB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h5", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Henry Baird");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h5", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Frank Hook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Jennifer Carter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h5", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Alexis Clarke");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h5", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Joseph Parker");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModeratorActivitiesComponent_ng_template_314_Template_button_click_88_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const modal_r6 = restoredCtx.$implicit; return modal_r6.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ModeratorActivitiesComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: 'user', active: false },
            { label: 'moderator-activities', active: true },
        ];
    }
    openModal(data) { }
}
ModeratorActivitiesComponent.ɵfac = function ModeratorActivitiesComponent_Factory(t) { return new (t || ModeratorActivitiesComponent)(); };
ModeratorActivitiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModeratorActivitiesComponent, selectors: [["app-moderator-activities"]], decls: 316, vars: 6, consts: [["title", "Task Details", 3, "breadcrumbItems"], [1, "row"], [1, "col-xxl-3"], [1, "card"], [1, "card-body", "text-center"], [1, "card-title", "mb-3", "flex-grow-1", "text-start"], [1, "mb-2"], [1, "mb-1"], [1, "fs-14", "mb-4"], [1, "hstack", "gap-2", "justify-content-center"], [1, "btn", "btn-primary", "btn-sm"], [1, "ri-stop-circle-line", "align-bottom", "me-1"], [1, "btn", "btn-soft-secondary", "btn-sm"], [1, "ri-play-circle-line", "align-bottom", "me-1"], [1, "card", "mb-3"], [1, "card-body"], [1, "mb-4"], ["name", "choices-single-default", "data-choices", "", "data-choices-search-false", "", 1, "form-control"], ["value", ""], ["value", "Unassigned"], ["value", "To Do"], ["value", "Inprogress"], ["value", "In Reviews", "selected", ""], ["value", "Completed"], [1, "table-card"], [1, "table", "mb-0"], [1, "fw-medium"], [1, "badge", "badge-soft-primary"], [1, "badge", "badge-soft-success"], [1, "d-flex", "mb-3"], [1, "card-title", "mb-0", "flex-grow-1"], [1, "flex-shrink-0"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#inviteMembersModal", 1, "btn", "btn-soft-primary", "btn-sm", 3, "click"], [1, "ri-share-line", "me-1", "align-bottom"], [1, "list-unstyled", "vstack", "gap-3", "mb-0"], [1, "d-flex", "align-items-center"], ["src", "assets/images/users/avatar-10.jpg", "alt", "", 1, "avatar-xs", "rounded-circle"], [1, "flex-grow-1", "ms-2"], ["routerLink", "/pages/profile", 1, "link-secondary"], [1, "text-muted", "mb-0"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "btn-sm", "fs-16", "text-muted", "dropdown", "arrow-none"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "ri-eye-fill", "text-muted", "me-2", "align-bottom"], [1, "ri-star-fill", "text-muted", "me-2", "align-bottom"], [1, "ri-delete-bin-5-fill", "text-muted", "me-2", "align-bottom"], ["src", "assets/images/users/avatar-8.jpg", "alt", "", 1, "avatar-xs", "rounded-circle"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "avatar-xs", "rounded-circle"], [1, "card-title", "mb-3"], [1, "vstack", "gap-2"], [1, "border", "rounded", "border-dashed", "p-2"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm"], [1, "avatar-title", "bg-light", "text-primary", "rounded", "fs-24"], [1, "ri-folder-zip-line"], [1, "flex-grow-1", "overflow-hidden"], [1, "fs-13", "mb-1"], ["href", "javascript:void(0);", 1, "text-body", "text-truncate", "d-block"], [1, "flex-shrink-0", "ms-2"], [1, "d-flex", "gap-1"], ["type", "button", 1, "btn", "btn-icon", "text-muted", "btn-sm", "fs-18"], [1, "ri-download-2-line"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "text-muted", "btn-sm", "fs-18", "dropdown", "arrow-none"], [1, "ri-pencil-fill", "align-bottom", "me-2", "text-muted"], [1, "ri-delete-bin-fill", "align-bottom", "me-2", "text-muted"], [1, "ri-file-ppt-2-line"], [1, "mt-2", "text-center"], ["type", "button", 1, "btn", "btn-primary"], [1, "col-xxl-9"], [1, "text-muted"], [1, "mb-3", "fw-semibold", "text-uppercase"], [1, "ps-3", "list-unstyled", "vstack", "gap-2"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "productTask", 1, "form-check-input"], ["for", "productTask", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "dashboardTask", "checked", "", 1, "form-check-input"], ["for", "dashboardTask", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "calenderTask", 1, "form-check-input"], ["for", "calenderTask", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "authenticationTask", 1, "form-check-input"], ["for", "authenticationTask", 1, "form-check-label"], [1, "pt-3", "border-top", "border-top-dashed", "mt-4"], [1, "hstack", "flex-wrap", "gap-2", "fs-15"], [1, "badge", "fw-medium", "badge-soft-secondary"], [1, "card-header"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-tabs-custom", "rounded", "card-header-tabs", "border-bottom-0", 3, "activeId"], ["customNav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], ["ngbNavContent", ""], [1, "tab-content"], [3, "ngbNavOutlet"], ["role", "document"], ["content", ""], [1, "card-title", "mb-4"], [1, "px-3", "mx-n3", "mb-2", 2, "height", "508px"], [1, "d-flex", "mb-4"], ["src", "assets/images/users/avatar-7.jpg", "alt", "", 1, "avatar-xs", "rounded-circle"], [1, "flex-grow-1", "ms-3"], [1, "fs-13"], ["routerLink", "/pages/profile"], ["href", "javascript:void(0);", 1, "badge", "text-muted", "bg-light"], [1, "mdi", "mdi-reply"], [1, "d-flex", "mt-4"], ["href", "javascript:void(0);", 1, "text-decoration-underline"], [1, "d-flex"], ["href", "javascript:void(0)", 1, "text-decoration-underline"], [1, "row", "g-2", "mb-3"], [1, "col-lg-1", "col-sm-2", "col-6"], ["src", "assets/images/small/img-4.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/small/img-5.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/users/avatar-6.jpg", "alt", "", 1, "avatar-xs", "rounded-circle"], [1, "mt-4"], [1, "row", "g-3"], [1, "col-lg-12"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["id", "exampleFormControlTextarea1", "rows", "3", "placeholder", "Enter comments", 1, "form-control", "bg-light", "border-light"], [1, "col-12", "text-end"], ["type", "button", 1, "btn", "btn-ghost-secondary", "btn-icon", "waves-effect", "me-1"], [1, "ri-attachment-line", "fs-16"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "table", "table-borderless", "align-middle", "mb-0"], [1, "table-light", "text-muted"], ["scope", "col"], [1, "avatar-title", "bg-light", "text-primary", "rounded", "fs-20"], [1, "ri-file-zip-fill"], [1, "ms-3", "flex-grow-1"], [1, "fs-15", "mb-0"], ["href", "javascript:void(0)", 1, "link-secondary"], ["href", "javascript:void(0);", "id", "dropdownMenuLink1", "data-bs-toggle", "dropdown", "aria-expanded", "true", "ngbDropdownToggle", "", 1, "btn", "btn-light", "btn-icon", "arrow-none"], [1, "ri-equalizer-fill"], ["aria-labelledby", "dropdownMenuLink1", "data-popper-placement", "bottom-end", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", 2, "position", "absolute", "inset", "0px 0px auto auto", "margin", "0px", "transform", "translate(0px, 23px)"], [1, "ri-eye-fill", "me-2", "align-middle", "text-muted"], [1, "ri-download-2-fill", "me-2", "align-middle", "text-muted"], [1, "dropdown-divider"], [1, "ri-delete-bin-5-line", "me-2", "align-middle", "text-muted"], [1, "ri-file-pdf-fill"], ["href", "javascript:void(0);", 1, "link-secondary"], ["href", "javascript:void(0);", "id", "dropdownMenuLink2", "data-bs-toggle", "dropdown", "aria-expanded", "true", "ngbDropdownToggle", "", 1, "btn", "btn-light", "btn-icon", "arrow-none"], ["aria-labelledby", "dropdownMenuLink2", "data-popper-placement", "bottom-end", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", 2, "position", "absolute", "inset", "0px 0px auto auto", "margin", "0px", "transform", "translate(0px, 23px)"], [1, "ri-folder-line"], ["href", "javascript:void(0);", "id", "dropdownMenuLink3", "data-bs-toggle", "dropdown", "aria-expanded", "true", "ngbDropdownToggle", "", 1, "btn", "btn-light", "btn-icon", "arrow-none"], ["aria-labelledby", "dropdownMenuLink3", "data-popper-placement", "bottom-end", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", 2, "position", "absolute", "inset", "0px 0px auto auto", "margin", "0px", "transform", "translate(0px, 23px)"], [1, "ri-eye-fill", "me-2", "align-middle"], [1, "ri-download-2-fill", "me-2", "align-middle"], [1, "ri-delete-bin-5-line", "me-2", "align-middle"], [1, "ri-image-2-fill"], ["href", "javascript:void(0);", "id", "dropdownMenuLink4", "data-bs-toggle", "dropdown", "aria-expanded", "true", "ngbDropdownToggle", "", 1, "btn", "btn-light", "btn-icon", "arrow-none"], [1, "ri-equalizer-fill", 2, "cursor", "pointer"], ["aria-labelledby", "dropdownMenuLink4", "data-popper-placement", "bottom-end", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", 2, "position", "absolute", "inset", "0px 0px auto auto", "margin", "0px", "transform", "translate(0px, 23px)"], [1, "card-title", "mb-4", "pb-2"], [1, "table-responsive", "table-card"], [1, "table", "align-middle", "mb-0"], ["scope", "row"], ["src", "assets/images/users/avatar-8.jpg", "alt", "", 1, "rounded-circle", "avatar-xxs"], ["routerLink", "/pages/profile", 1, "fw-medium", "link-secondary"], ["src", "assets/images/users/avatar-10.jpg", "alt", "", 1, "rounded-circle", "avatar-xxs"], [1, "modal-content", "border-0"], [1, "modal-header", "p-3", "ps-4", "bg-soft-primary"], ["id", "inviteMembersModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "search-box", "mb-3"], ["type", "text", "placeholder", "Search here...", 1, "form-control", "bg-light", "border-light"], [1, "ri-search-line", "search-icon"], [1, "mb-4", "d-flex", "align-items-center"], [1, "me-2"], [1, "mb-0", "fs-13"], [1, "avatar-group", "justify-content-center"], ["href", "javascript:void(0);", "ngbTooltip", "Tonya Noble", "placement", "top", "data-bs-toggle", "tooltip", 1, "avatar-group-item"], [1, "avatar-xs"], ["src", "assets/images/users/avatar-10.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["href", "javascript:void(0);", "ngbTooltip", "Thomas Taylor", "placement", "top", 1, "avatar-group-item"], ["src", "assets/images/users/avatar-8.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["href", "javascript:void(0);", "ngbTooltip", "Nancy Martino", "placement", "top", 1, "avatar-group-item"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["data-simplebar", "", 1, "mx-n4", "px-4", 2, "max-height", "225px"], [1, "vstack", "gap-3"], [1, "avatar-xs", "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "flex-grow-1"], [1, "fs-13", "mb-0"], ["href", "javascript:void(0);", 1, "text-body", "d-block"], ["type", "button", 1, "btn", "btn-light", "btn-sm"], [1, "avatar-title", "bg-soft-primary", "text-primary", "rounded-circle"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "avatar-title", "bg-soft-success", "text-success", "rounded-circle"], ["src", "assets/images/users/avatar-7.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", "w-xs", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "w-xs"]], template: function ModeratorActivitiesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Time Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "9 hrs 13 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Profile Page Satructure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Stop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Select Task board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Unassigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Inprogress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "In Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Tasks No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "#VLZ456");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Tasks Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Profile Page Satructure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Velzon - Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Inprogress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "05 Jan, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Assigned To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModeratorActivitiesComponent_Template_button_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](315); return ctx.openModal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " Assigned Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Tonya Noble");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Favourite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Thomas Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Favourite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Nancy Martino");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Favourite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Attachments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "App pages.zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "2.2MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, " Rename");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Velzon admin.ppt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "2.4MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, " Rename");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Images.zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "1.2MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, " Rename");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "View more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, " It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Sub-tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "ul", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " Product Design, Figma (Software), Prototype ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, " Dashboards : Ecommerce, Analytics, Project,etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "label", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, " Create calendar, chat and email app pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, " Add authentication pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Tasks Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "UI/UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "ul", 87, 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, " Comments (5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](302, ModeratorActivitiesComponent_ng_template_302_Template, 95, 0, "ng-template", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, " Attachments File (4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](306, ModeratorActivitiesComponent_ng_template_306_Template, 148, 0, "ng-template", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, " Time Entries (9 hrs 13 min) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](310, ModeratorActivitiesComponent_ng_template_310_Template, 62, 0, "ng-template", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](314, ModeratorActivitiesComponent_ng_template_314_Template, 92, 0, "ng-template", 94, 95, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](298);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](297);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavContent, simplebar_angular__WEBPACK_IMPORTED_MODULE_5__.SimplebarAngularComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlcmF0b3ItYWN0aXZpdGllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 65838:
/*!****************************************************!*\
  !*** ./src/app/pages/users/user/user.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStatus": () => (/* binding */ UserStatus),
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _model_new_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/new-user-model */ 53284);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _model_add_subject_to_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/add-subject-to-user.model */ 21398);
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/role */ 45564);
/* harmony import */ var _model_account_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/account-status-enum */ 72419);
/* harmony import */ var _model_filter_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/filter-users */ 81734);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.service */ 29073);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/breadcrumbs/breadcrumbs.component */ 47352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _items_item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../items/item-topic/item-topic.component */ 86216);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _directives_no_space_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directives/no-space.directive */ 32966);
/* harmony import */ var _directives_no_letters_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/no-letters.directive */ 80305);
/* harmony import */ var _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/rightsidebar/rightsidebar.component */ 56034);

























function UserComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Loading users...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Loading users...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_div_2_h4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" List of All Users ", ctx_r7.users ? "(" + ctx_r7.users.length + ")" : "(" + 0 + ")", " ");
  }
}

function UserComponent_div_2_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Filtered Results ", "(" + ctx_r8.filteredUsers.length + ")", " ");
  }
}

function UserComponent_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("You have selected ", ctx_r9.selectedUsers.length == ctx_r9.users.length ? "all" : ctx_r9.selectedUsers.length, " user(s). ");
  }
}

function UserComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Bulk Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_div_6_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r15.bulkActivateDeactivate(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Activate Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_div_6_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r17.bulkActivateDeactivate(false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Deactivate Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_div_6_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r18.resendVerificationEmail();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Resend Verification Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "btn-secondary": a0,
    "btn-danger": a1
  };
};

const _c1 = function (a0, a1) {
  return {
    "ri-equalizer-fill": a0,
    "ri-close-fill": a1
  };
};

function UserComponent_div_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Create User(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_ng_container_7_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);

      return ctx_r19.openNewUserModal(_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, " New User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_ng_container_7_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](7);

      return ctx_r21.openUsersUploadModal(_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Upload Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_ng_container_7_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r22.downloadUsersFile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, " Download Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_ng_container_7_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r23.openFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](3, _c0, !ctx_r11.showFilter, ctx_r11.showFilter));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](6, _c1, !ctx_r11.showFilter, ctx_r11.showFilter));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r11.showFilter ? "HIDE FILTER" : "FILTER", " ");
  }
}

function UserComponent_div_2_div_8_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const regStat_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", regStat_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", regStat_r28, " ");
  }
}

function UserComponent_div_2_div_8_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const status_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", status_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", status_r29, " ");
  }
}

function UserComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "form", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function UserComponent_div_2_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r30.filterUsers();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function UserComponent_div_2_div_8_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r32.filter.email = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function UserComponent_div_2_div_8_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r33.filter.username = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Registration Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function UserComponent_div_2_div_8_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r34.filter.registrationStatus = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, UserComponent_div_2_div_8_option_19_Template, 2, 2, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "app-item-topic", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("sendSubjects", function UserComponent_div_2_div_8_Template_app_item_topic_sendSubjects_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r35.receiveSubjects($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ng-select", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function UserComponent_div_2_div_8_Template_ng_select_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r36.filter.role = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Active Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function UserComponent_div_2_div_8_Template_select_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r37.filter.activeStatus = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, UserComponent_div_2_div_8_option_34_Template, 2, 2, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_div_8_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r38.clearFilterInputs();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, " Clear Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](41, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, " Apply Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r12.filter.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r12.filter.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r12.filter.registrationStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r12.registrationStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Subject")("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](28, 10, ctx_r12.appRoles$))("ngModel", ctx_r12.filter.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r12.filter.activeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r12.accountStatus);
  }
}

function UserComponent_div_2_div_9_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, " Fullname");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "p-sortIcon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "p-columnFilter", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "p-sortIcon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "p-columnFilter", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "p-sortIcon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "p-columnFilter", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, " Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "p-sortIcon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, " Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "p-sortIcon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_div_2_div_9_ng_template_5_ng_container_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const subject_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, subject_r50.subjectName));
  }
}

function UserComponent_div_2_div_9_ng_template_5_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UserComponent_div_2_div_9_ng_template_5_ng_container_13_div_1_Template, 4, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const user_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", user_r42.userSubjectsDTOS);
  }
}

function UserComponent_div_2_div_9_ng_template_5_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const role_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", role_r52.role, " ");
  }
}

const _c2 = function (a0, a1) {
  return {
    "badge-soft-success": a0,
    "badge-soft-danger": a1
  };
};

function UserComponent_div_2_div_9_ng_template_5_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](2, _c2, user_r42.activated, !user_r42.activated));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](user_r42.activated ? "ACTIVE" : "INACTIVE");
  }
}

function UserComponent_div_2_div_9_ng_template_5_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](user_r42.activated ? "de-activating..." : "activating...");
  }
}

function UserComponent_div_2_div_9_ng_template_5_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Registration incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_div_2_div_9_ng_template_5_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Registration complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

const _c3 = function (a0, a1) {
  return {
    "ri-forbid-fill": a0,
    "ri-checkbox-circle-fill": a1
  };
};

function UserComponent_div_2_div_9_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "p-tableCheckbox", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, UserComponent_div_2_div_9_ng_template_5_ng_container_13_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, UserComponent_div_2_div_9_ng_template_5_ng_container_15_Template, 3, 1, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, UserComponent_div_2_div_9_ng_template_5_span_19_Template, 2, 5, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, UserComponent_div_2_div_9_ng_template_5_span_21_Template, 3, 1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, UserComponent_div_2_div_9_ng_template_5_span_22_Template, 2, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, UserComponent_div_2_div_9_ng_template_5_span_23_Template, 2, 0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ul", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, " View Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, " Manage Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_div_9_ng_template_5_Template_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r56);
      const user_r42 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return ctx_r55.resendEmailVerification(user_r42.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, " Resend Email Verification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_div_9_ng_template_5_Template_button_click_44_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r56);
      const user_r42 = restoredCtx.$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return ctx_r57.activateUser(user_r42);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](45, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", user_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 18, user_r42.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 20, user_r42.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](user_r42.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", user_r42.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", user_r42.userSubjectsDTOS.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", user_r42.userRolesDTOList);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !user_r42.updatingUserStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", user_r42.updatingUserStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !user_r42.registrationComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", user_r42.registrationComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/users/view/", user_r42.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !user_r42.registrationComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/users/edit/", user_r42.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", user_r42.activated);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !user_r42.registrationComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](22, _c3, user_r42.activated, !user_r42.activated));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", user_r42.activated ? "De-activate" : "Activate", " ");
  }
}

const _c4 = function () {
  return [20, 30, 50];
};

function UserComponent_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "p-table", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selectionChange", function UserComponent_div_2_div_9_Template_p_table_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r58.selectedUsers = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, UserComponent_div_2_div_9_ng_template_4_Template, 25, 0, "ng-template", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, UserComponent_div_2_div_9_ng_template_5_Template, 47, 25, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 7, ctx_r13.users$))("rowHover", true)("rows", 20)("selection", ctx_r13.selectedUsers)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](9, _c4))("paginator", true);
  }
}

function UserComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h4", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "No User(s) Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_2_div_10_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);

      return ctx_r60.openNewUserModal(_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Add User");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, UserComponent_div_2_h4_2_Template, 2, 1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, UserComponent_div_2_h4_3_Template, 2, 1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, UserComponent_div_2_span_5_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, UserComponent_div_2_div_6_Template, 17, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, UserComponent_div_2_ng_container_7_Template, 20, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, UserComponent_div_2_div_8_Template, 43, 12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, UserComponent_div_2_div_9_Template, 6, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, UserComponent_div_2_div_10_Template, 8, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.filtered);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filtered);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selectedUsers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selectedUsers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selectedUsers.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.showFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.loading && !ctx_r1.filtered && ctx_r1.users.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.loading && !ctx_r1.filtered && ctx_r1.users.length < 1);
  }
}

function UserComponent_div_3_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, " Fullname");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "p-sortIcon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "p-columnFilter", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "p-sortIcon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "p-columnFilter", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "p-sortIcon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "p-columnFilter", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, " Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "p-sortIcon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, " Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "p-sortIcon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const subject_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, subject_r76.subjectName));
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UserComponent_div_3_ng_container_1_ng_template_5_ng_container_12_div_1_Template, 4, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const user_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", user_r67.userSubjectsDTOS);
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const role_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", role_r78.role, " ");
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](2, _c2, user_r67.activated, !user_r67.activated));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](user_r67.activated ? "ACTIVE" : "INACTIVE");
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](user_r67.activated ? "de-activating..." : "activating...");
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Registration incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Registration complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_li_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " View Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/users/view/", user_r67.id, "");
  }
}

function UserComponent_div_3_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "p-tableCheckbox", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, UserComponent_div_3_ng_container_1_ng_template_5_ng_container_12_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, UserComponent_div_3_ng_container_1_ng_template_5_ng_container_14_Template, 3, 1, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, UserComponent_div_3_ng_container_1_ng_template_5_span_18_Template, 2, 5, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, UserComponent_div_3_ng_container_1_ng_template_5_span_20_Template, 3, 1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, UserComponent_div_3_ng_container_1_ng_template_5_span_21_Template, 2, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, UserComponent_div_3_ng_container_1_ng_template_5_span_22_Template, 2, 0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "ul", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, UserComponent_div_3_ng_container_1_ng_template_5_li_29_Template, 4, 1, "li", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, " Manage Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_div_3_ng_container_1_ng_template_5_Template_a_click_36_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r83);
      const user_r67 = restoredCtx.$implicit;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return ctx_r82.activateUser(user_r67);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](37, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", user_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 15, user_r67.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 17, user_r67.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](user_r67.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", user_r67.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", user_r67.userSubjectsDTOS.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", user_r67.userRolesDTOList);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !user_r67.updatingUserStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", user_r67.updatingUserStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !user_r67.registrationComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", user_r67.registrationComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", user_r67.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/users/edit/", user_r67.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](19, _c3, user_r67.activated, !user_r67.activated));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", user_r67.activated ? "De-activate" : "Activate", "");
  }
}

function UserComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "p-table", 111, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, UserComponent_div_3_ng_container_1_ng_template_4_Template, 25, 0, "ng-template", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, UserComponent_div_3_ng_container_1_ng_template_5_Template, 39, 22, "ng-template", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 6, ctx_r62.filteredUsers$))("rowHover", true)("rows", 20)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](8, _c4))("paginator", true);
  }
}

function UserComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h4", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "No User(s) Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UserComponent_div_3_ng_container_1_Template, 6, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, UserComponent_div_3_div_2_Template, 5, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.loading && ctx_r2.filteredUsers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.loading && ctx_r2.filteredUsers.length < 1);
  }
}

function UserComponent_ng_template_4_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_ng_template_4_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No spaces allowed in first name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

const _c5 = function () {
  return {
    color: "red"
  };
};

function UserComponent_ng_template_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UserComponent_ng_template_4_div_16_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, UserComponent_ng_template_4_div_16_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](15);

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](3, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r86.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r86.hasError("noSpaces"));
  }
}

function UserComponent_ng_template_4_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_ng_template_4_div_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No spaces allowed in last name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_ng_template_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UserComponent_ng_template_4_div_24_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, UserComponent_ng_template_4_div_24_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](23);

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](3, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r88.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r88.hasError("noSpaces"));
  }
}

function UserComponent_ng_template_4_div_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](1, _c5));
  }
}

function UserComponent_ng_template_4_div_32_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](1, _c5));
  }
}

function UserComponent_ng_template_4_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UserComponent_ng_template_4_div_32_span_1_Template, 2, 2, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, UserComponent_ng_template_4_div_32_span_2_Template, 2, 2, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](31);

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r90.errors == null ? null : _r90.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r90.errors == null ? null : _r90.errors["pattern"]);
  }
}

function UserComponent_ng_template_4_div_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Please enter phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_ng_template_4_div_40_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Phone number must not contain letters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_ng_template_4_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UserComponent_ng_template_4_div_40_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, UserComponent_ng_template_4_div_40_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](39);

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](3, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r92.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r92.hasError("lettersNotAllowed"));
  }
}

function UserComponent_ng_template_4_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "ADMIN: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, " Has all privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "ANALYTICS:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, " Has ability to process and analyze data from reports and results");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "AUTHOR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Has ability to create and edit question on assigned subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "CENTER_ADMIN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, " Has ability to manage a center and deliver an exam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "MARKER:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, " Has ability to mark theory questions on assigned subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "MODERATOR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, " Has ability to validate questions by either approving or rejecting");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "MONITOR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, " Has ability to track the progress of an ongoing exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function UserComponent_ng_template_4_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "app-item-topic", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("sendSubjects", function UserComponent_ng_template_4_div_55_Template_app_item_topic_sendSubjects_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r110);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r109.receiveSubjects($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Subject");
  }
}

function UserComponent_ng_template_4_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_ng_template_4_button_61_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r112);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

      const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](8);

      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r111.createUser(_r85.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](8);

    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", _r85.invalid || !ctx_r99.role.id || ctx_r99.disableSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Create User ", ctx_r99.role.role, " ");
  }
}

function UserComponent_ng_template_4_button_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r100.submitted);
  }
}

function UserComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h3", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Create New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_ng_template_4_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r114);
      const modal_r84 = restoredCtx.$implicit;
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      modal_r84.close("Close click");
      return ctx_r113.clearSelectedRoles();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "form", 119, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function UserComponent_ng_template_4_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r114);

      const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](8);

      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _r85.valid && ctx_r115.createUser(_r85.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Firstname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "input", 124, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, UserComponent_ng_template_4_div_16_Template, 3, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Lastname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "input", 128, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, UserComponent_ng_template_4_div_24_Template, 3, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "input", 131, 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, UserComponent_ng_template_4_div_32_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "input", 134, 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, UserComponent_ng_template_4_div_40_Template, 3, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](48, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](49, UserComponent_ng_template_4_ng_template_49_Template, 36, 0, "ng-template", null, 138, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "ng-select", 139, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function UserComponent_ng_template_4_Template_ng_select_change_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r114);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r116.onRoleSelectChange();
    })("ngModelChange", function UserComponent_ng_template_4_Template_ng_select_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r114);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r117.role = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](54, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, UserComponent_ng_template_4_div_55_Template, 3, 1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_ng_template_4_Template_button_click_58_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r114);
      const modal_r84 = restoredCtx.$implicit;
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      modal_r84.close("Close click");
      return ctx_r118.clearSelectedRoles();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](59, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, UserComponent_ng_template_4_button_61_Template, 2, 2, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, UserComponent_ng_template_4_button_62_Template, 7, 1, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](15);

    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](23);

    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](31);

    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](39);

    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](50);

    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](26, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("is-invalid", _r86.invalid && _r86.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r86.invalid && _r86.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](27, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("is-invalid", _r88.invalid && _r88.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r88.invalid && _r88.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](28, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("is-invalid", _r90.invalid && _r90.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r90.invalid && _r90.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](29, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("is-invalid", _r92.invalid && _r92.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _r92.invalid && _r92.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](30, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbPopover", _r94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](54, 24, ctx_r4.appRoles$))("ngModel", ctx_r4.role)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.role.role == "AUTHOR" || ctx_r4.role.role == "MODERATOR" || ctx_r4.role.role == "MARKER");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r4.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.submitted);
  }
}

function UserComponent_ng_template_6_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_ng_template_6_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r125);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r124.uploadForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Upload Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);

    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", _r120.invalid || !(_r121.files == null ? null : _r121.files.length));
  }
}

function UserComponent_ng_template_6_button_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Uploading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Uploading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r123.submitted);
  }
}

function UserComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h3", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "UPLOAD USERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_ng_template_6_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r127);
      const modal_r119 = restoredCtx.$implicit;
      return modal_r119.close("Close click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "form", 39, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function UserComponent_ng_template_6_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r127);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r128.uploadForm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "input", 162, 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function UserComponent_ng_template_6_Template_input_change_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r127);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r129.onFileSelected($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_ng_template_6_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r127);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r130.downloadUsersTemplateFile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, " download template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UserComponent_ng_template_6_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r127);
      const modal_r119 = restoredCtx.$implicit;
      return modal_r119.close("Close click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, UserComponent_ng_template_6_button_25_Template, 2, 1, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, UserComponent_ng_template_6_button_26_Template, 7, 1, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r6.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.submitted);
  }
}

class UserStatus {}
class UserComponent {
  constructor(userService, userAccountService, modalService, notifier) {
    this.userService = userService;
    this.userAccountService = userAccountService;
    this.modalService = modalService;
    this.notifier = notifier;
    this.users = [];
    this.filteredUsers = [];
    this.userStatus = new UserStatus();
    this.subjects = [];
    this.role = new _model_role__WEBPACK_IMPORTED_MODULE_3__.Role();
    this.Role = [];
    this.selectedRoles = [];
    this.selectedRoleIds = [];
    this.submitted = false;
    this.moderatorLevels = [];
    this.adminSelected = false;
    this.loading = true;
    this.selectedUsers = [];
    this.filename = "";
    this.accountStatus = [];
    this.filter = new _model_filter_users__WEBPACK_IMPORTED_MODULE_5__.FilterUsers();
    this.registrationStatus = ["COMPLETE", "INCOMPLETE"];
    this.sendingEmailVerification = false;
    this.downloadingFile = false;
    this.filterSubject = new _model_add_subject_to_user_model__WEBPACK_IMPORTED_MODULE_2__.AddSubjectToUser();
    this.filtered = false;
    this.disableSubmit = false;
    this.quickGuide = `<div class="p-4">
  <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
  <p class="text-muted mb-4">
    This page lists all the available user accounts in a tabular format.
    Each row, represents the information of a single user.<br />
    <strong class="text-dark">Note:</strong>&nbsp;This page can only be
    accessed by a user with admin privileges or role.
  </p>

  <h6 class="mt-4 fw-bold text-uppercase">How To Add a new user</h6>
  <p class="text-muted mb-4">
    To add a new user click on the add user button. As shown in the image below;
  </p>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-12">
      <img
        src="assets/images/snapshots/users/new_user.png"
        alt=""
        height="120"
        width="100%"
      />
    </div>
  </div>

  <p class="my-4 text-muted">
    On click of the button a registration form modal pops up. Fill In all the required fields 
    and click the <b>Create user</b> button. As shown in the image below;
  </p>
  <div class="row mb-4">
    <div class="d-flex justify-content-center align-items-center col-12">
      <img
        src="assets/images/snapshots/users/new_user_form.png"
        alt=""
        height="500"
        width="80%"
      />
    </div>
  </div>

  <ol>
    <li>
      <strong class="text-uppercase">Fullname:</strong>&nbsp;
      <span class="text-muted">The first name of the user is a required field.</span>
    </li>

    <li>
      <strong class="text-uppercase">Username:</strong>&nbsp;
      <span class="text-muted">The last name of the user is a required field.</span>
    </li>
    <li>
      <strong class="text-uppercase">Email:</strong>&nbsp;
      <span class="text-muted">The email address of the user is required and must be a valid email.</span>
    </li>
    <li>
      <strong class="text-uppercase">Role:</strong>&nbsp;
      <span class="text-muted">The role is also required. The role determines the privileges granted to a user,
        thereby limiting user activities. The roles can be either of the following; 
        Admin, Authors, Moderators or Examiners.
      </span>
    </li>
    <li>
      <strong class="text-uppercase">Subject:</strong>&nbsp;
      <span class="text-muted">The subject field is not required. However, the subject field is only made visible when the role
        being assigned to the user is either an <b>Author</b> or <b>Moderator</b>.
      </span>
    </li>
    </ol>

    <div
        class="row"
      >
      <div class="d-flex justify-content-center align-items-center col-12">
        <img
          src="assets/images/snapshots/users/users_creation_process.gif"
          alt=""
          height="500"
          width="80%"
        />
      </div>
    </div>

    <ul>
    <li>
      <h6 class="mt-4 mb-2 fw-bold text-uppercase">Admin Role</h6>
      <p class="text-muted mb-4">
        Only the admin has full access or privilege to perform any action within the application. <br />
      </p>
    </li>
    <li>
      <h6 class="mb-0 fw-bold text-uppercase">Author Role</h6>
      <p class="text-muted mb-4">
        An author’s role is to create questions and passages. An author could also edit and        
        delete questions that have not been moderated or published
      </p>
    </li>
    <li>
      <h6 class="mt-4 mb-2 fw-bold text-uppercase">Moderator Role</h6>
      <p class="text-muted mb-4">
        A moderator can only approve or reject a question
      </p>
    </li>
    <li>
      <h6 class="mt-4 mb-2 fw-bold text-uppercase">Examiner Role</h6>
      <p class="text-muted mb-4">
        The role of an examiner is to create an assessment. An examiner can also view questions and passages 
        but cannot create any
      </p>
    </li>
    </ul>

    <div>
      <h6 class="mt-4 mb-2 fw-bold text-uppercase">How To Manage a Users Account</h6>
      <p class="text-muted mb-4">Click on the actions button, it drops down a menu to select from</p>
      <div class="d-flex justify-content-center align-items-center">
        <img src="assets/images/snapshots/users/action_menu.PNG" alt="" height="150" width="50%"/>
      </div>
    </div>

    <p class="text-muted mt-4">
      Click on view and then it opens all the details of the user which includes the user details, date the user was created, 
      the total subjects of the user and the role of the user. A sample is shown below:
    </p>

    <div>

    </div>
</div>`;
    this.first = 0;
    this.rows = 20;
    this.showFilter = false;
    this.receivedSubjects = [];
    this.appRoles$ = this.userService.listRoles(); // console.log(this.appRoles$);
  }
  /** Handler function for the quick guide pull out */


  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById("theme-settings-offcanvas");

    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
  }

  ngOnInit() {
    this.accountStatus = Object.values(_model_account_status_enum__WEBPACK_IMPORTED_MODULE_4__.AccountStatusEnum);
    this.breadCrumbItems = [{
      label: "Users"
    }];
    this.getUsers();
  }

  openNewUserModal(newUserModal) {
    this.modalService.open(newUserModal, {
      centered: true,
      size: "md"
    });
  }

  openUsersUploadModal(userUploadModal) {
    this.modalService.open(userUploadModal, {
      centered: true,
      size: "md"
    });
  }

  dismissModal() {
    this.modalService.dismissAll();
  }

  onFileSelected($event) {
    this.file = $event.target.files[0];
  }

  uploadForm() {
    this.submitted = true;
    this.filename = this.file.name;
    const formData = new FormData();
    formData.append("file", this.file);
    this.userService.bulkUserUpload(formData).subscribe(value => {
      if (value) {
        this.notifier.notify("success", `${value.id}`);
        this.submitted = false;
        document.querySelector('[name="file"]').value = '';
        this.dismissModal();
        this.ngOnInit();
      }
    }, error => {
      this.notifier.notify("error", `${error.error.message}`);
      this.submitted = false;
      document.querySelector('[name="file"]').value = '';
      this.dismissModal();
    });
  }

  getUsers() {
    this.userService.listAllUsers().subscribe(value => {
      this.users = value;
      this.users.forEach(user => {
        user.updatingUserStatus = false;
      });
      this.users$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(this.users);
      this.loading = false;
    });
  }

  activateUser(user) {
    user.updatingUserStatus = true;

    if (user.activated || !user.activated) {
      this.userStatus.enableOrDisable = !user.activated;
    }

    this.userService.activateDeactivateUser(user.id, this.userStatus).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => this.getUsers())).subscribe(value => {
      if (value && user.activated) {
        user.activated = false;
        this.notifier.notify("error", `The user was successfully deactivated.`);
        user.updatingUserStatus = false;
      } else {
        user.activated = true;
        this.notifier.notify("success", "The user was successfully activated.");
        user.updatingUserStatus = false;
      }
    }, error => {
      //console.log(error);
      user.updatingUserStatus = false;
      this.notifier.notify("error", `${error.error.message}`);
    });
  }

  deleteUser(user) {
    return null;
  }

  confirmDeleteUser(user) {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
      customClass: {
        confirmButton: "btn btn-danger",
        cancelButton: "btn btn-primary ms-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure you want to delete user " + user.username + "?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonText: "Yes, delete user!",
      cancelButtonText: "No, cancel!",
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.deleteUser(user).subscribe(value => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            confirmButtonColor: "rgb(3, 142, 220)",
            icon: "success"
          });
          this.getUsers();
        }, error => {});
      }
    });
  }

  bulkActivateDeactivate(value) {
    let userIds = [];
    this.selectedUsers.forEach(user => {
      userIds.push(user.id);
    });
    this.publishLoader(value ? "Activating selected accounts...please wait!" : "Deactivating selected accounts...please wait!");
    this.userService.activateDeactivateMultipleUsers(userIds, value).subscribe(value => {
      if (value) {
        this.notifier.notify("success", `${value.id}`);
      }

      this.ngOnInit();
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
    }, error => {
      this.notifier.notify("error", `${error.error.message}`);
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
    });
  }

  resendVerificationEmail() {}

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  displayRoles(roleDropdown) {
    roleDropdown.open();
  }

  hideRoles(roleDropdown) {
    roleDropdown.close();
  }

  clearSelectedRoles() {
    //this.selectedRoles = [];
    this.role = new _model_role__WEBPACK_IMPORTED_MODULE_3__.Role();
  }

  onAdd($event) {
    if (this.Role.length > 0 && $event.role === "ADMIN") {
      this.Role = []; // empties the previously added roles if any, before picking admin role

      this.Role.push($event.role); // pushes just the admin role

      this.selectedRoles = []; // empties the previously selected roles

      this.selectedRoles.push($event.role); // update the value of selected roles to just the admin

      this.selectedRoleIds = [];
      this.selectedRoleIds.push($event.id);
      return;
    } else {
      this.Role.push($event);
      this.selectedRoles.push($event.role);
      this.selectedRoleIds.push($event.id);
    }
  }

  removeRole($event) {
    // console.log($event.label);
    if (this.selectedRoles.includes($event.label)) {
      this.selectedRoles.splice(this.selectedRoles.indexOf($event.role));
    }
  }

  createUser(value) {
    this.submitted = true;

    if (value.valid === false) {
      this.submitted = false;
      return this.notifier.notify("error", "All fields are required.");
    }
    /* if (this.Role.length === 0) {
      this.submitted = false;
      return this.notifier.notify(
        'warning',
        'A role must be assigned to a user.'
      );
    } */


    if (!this.role) {
      this.submitted = false;
      return this.notifier.notify("warning", "A role must be assigned to a user.");
    }

    if (this.receivedSubjects.length == 0 && this.role.role !== "ADMIN" && this.role.role !== "EXAMINER" && this.role.role !== "CENTER_ADMIN" && this.role.role !== "PROCTOR_ADMIN" && this.role.role !== "PROCTOR" && this.role.role !== "MONITOR" && this.role.role !== "ANALYTIC") {
      this.submitted = false;
      return this.notifier.notify("error", "please assign at least one subject to this user!");
    }

    this.mapFormToNewUser(value);
  }

  mapFormToNewUser(value) {
    // console.log(value);
    //let role = this.selectedRoleIds;
    let moderatorLevel = this.moderationLevels;
    let subjectIds = [];
    let user = new _model_new_user_model__WEBPACK_IMPORTED_MODULE_0__.NewUserModel();
    let role = this.role.id;
    this.receivedSubjects.forEach(value => subjectIds.push(value.id)); // console.log(subjectIds);
    //value.subjectIds.forEach((value) => subjectIds.push(value.subjectIds));

    console.log(value);
    user.email = value.email.trim();
    user.firstName = value.firstname.trim();
    user.lastName = value.lastname.trim();
    user.password = value.password;
    user.username = value.username;
    user.phone = value.phone.trim(); //user.roles = role;

    user.roles.push(this.role.id);
    user.moderationLevel = moderatorLevel;
    user.subjectIds = subjectIds;
    let id = this.sendUserToServer(user); // console.log(user);

    if (id) {
      user = new _model_new_user_model__WEBPACK_IMPORTED_MODULE_0__.NewUserModel();
      this.ngOnInit();
    }
  }

  sendUserToServer(user) {
    let success;
    this.userService.addNewUser(user).subscribe(value => {
      // todo: display success
      // if (value) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        icon: "success",
        title: "Congratulations",
        html: "You have successfully created a new user!"
      });
      this.submitted = false;
      this.selectedRoles = [];
      this.Role = [];
      this.selectedRoleIds = [];
      this.ngOnInit(); //form.reset();

      success = value;
      this.dismissModal(); // }
    }, error => {
      // todo: display error
      this.submitted = false;
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        icon: "error",
        title: "Failed",
        text: `${error.error.message}`
      });
      this.selectedRoles = [];
      this.Role = [];
      this.selectedRoleIds = [];
      this.ngOnInit();
    });
    return success;
  }

  logRole(role) {// console.log(this.role);
  } // recieveSubject($event) {
  //   this.filter.subjectId = $event;
  //   // console.log('subject selected =>', $event);
  // }


  receiveSubjects($event) {
    this.receivedSubjects = $event;
    this.filterSubject = $event; // console.log(this.filterSubject);

    this.disableSubmit = false; // console.log('added subject to filter', $event);
    // console.log('assigned subject', this.subjects);
  }

  uploadCenterAdmins() {}

  deleteUsers() {// console.log(this.selectedUsers);
  }

  openFilter() {
    this.showFilter = !this.showFilter;
  }

  filterUsers() {
    this.loading = true; // console.log(this.filter);
    // empty users list

    this.users = [];
    this.filter.subjectId = this.filterSubject.id;
    this.userService.filterUsers(this.filter).subscribe(value => {
      if (value.length > 0) {
        value.forEach(user => {
          user.updatingUserStatus = false;
        });
        this.filteredUsers = value;
        this.filteredUsers$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(value);
        this.filtered = true;
        this.loading = false;
      } else {
        this.filteredUsers = value;
        this.filtered = true;
        this.loading = false;
      }
    }, error => {
      this.loading = false;
      this.notifier.notify("error", `${error.error.message}`);
    });
  }

  clearFilterInputs() {
    this.filtered = false;
    this.openFilter();

    if (this.filteredUsers) {
      this.loading = false;
      this.filter = new _model_filter_users__WEBPACK_IMPORTED_MODULE_5__.FilterUsers();
      this.filteredUsers = [];
      this.getUsers();
    }
  }

  resendEmailVerification(user_id) {
    this.publishLoader("Resending email verification link(s)...please wait!");
    let data = {
      id: user_id
    };
    this.userService.resendEmailVerification(user_id, data).subscribe(value => {
      this.sendingEmailVerification = false;
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
      return this.notifier.notify("success", "Email verification resent!");
    }, error => {
      this.sendingEmailVerification = false;
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
      return this.notifier.notify("error", `${error.error.message}`);
    });
  }

  downloadUsersTemplateFile() {
    this.downloadingFile = true;
    this.publishLoader("Downloading Upload Template File....please wait");
    this.userService.downloadUsersTemplate().subscribe(value => {
      //const blob = new Blob([value], { type: 'application/octet-stream' });
      var downloadURL = window.URL.createObjectURL(value);
      var link = document.createElement("a");
      link.href = downloadURL;
      link.download = "EXAMALPHA_USERS_UPLOAD_TEMPLATE.csv";
      link.click();
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
      this.downloadingFile = false;
    }, error => {
      // console.log(error);
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
    });
  }

  downloadUsersFile() {
    this.downloadingFile = true;
    this.publishLoader("Downloading Users List....please wait");
    this.userService.downloadAllUsersFile().subscribe(value => {
      //const blob = new Blob([value], { type: 'application/octet-stream' });
      var downloadURL = window.URL.createObjectURL(value);
      var link = document.createElement("a");
      link.href = downloadURL;
      link.download = "EXAMALPHA_USERS_LIST.csv";
      link.click();
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
      this.downloadingFile = false;
    }, error => {
      this.downloadingFile = false;
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
    });
  }

  publishLoader(msg) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: msg,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
      }
    });
  }

  onRoleSelectChange() {
    if (['AUTHOR', 'MODERATOR', 'MARKER'].includes(this.role.role)) {
      this.disableSubmit = true;
      return;
    }

    this.disableSubmit = false;
  }

}

UserComponent.ɵfac = function UserComponent_Factory(t) {
  return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_17__.NotifierService));
};

UserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: UserComponent,
  selectors: [["app-user"]],
  decls: 9,
  vars: 6,
  consts: [["title", "USERS", 3, "breadcrumbItems"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], ["class", "card card-animate", 4, "ngIf"], ["newUserModal", ""], ["usersUploadModal", ""], [3, "currentView", "pageGuide", "settingsButtonClicked"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "mb-2", "align-items-center", "d-flex"], ["class", "card-title mb-0 flex-grow-1", 4, "ngIf"], [1, "d-flex", "gap-2", "flex-shrink-0"], ["class", "badge badge-soft-warning fs-14 uppercase", 4, "ngIf"], ["class", "btn-group", "role", "group", "ngbDropdown", "", 4, "ngIf"], ["class", "card card-animate shadow-lg p-4", "style", "z-index: 99999;", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "card-title", "mb-0", "flex-grow-1"], [1, "badge", "badge-soft-warning", "fs-14", "uppercase"], ["role", "group", "ngbDropdown", "", 1, "btn-group"], ["id", "btnGroupDrop1", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", "arrow-none"], [1, "mdi", "mdi-chevron-down"], ["aria-labelledby", "btnGroupDrop1", "ngbDropdownMenu", "", 1, "dropdown-menu"], [2, "cursor", "pointer"], [1, "dropdown-item", 3, "click"], [1, "ri-checkbox-circle-line", "me-2", "align-middle"], [1, "ri-forbid-fill", "me-2", "align-middle"], [1, "ri-mail-send-fill", "me-2", "align-middle"], ["id", "btnGroupDrop2", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", "arrow-none"], ["aria-labelledby", "btnGroupDrop2", "ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "ri-add-line", "align-middle", "me-2"], [1, "ri-upload-2-line", "me-2", "align-middle"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "ri-download-line", "me-2", "align-middle"], [1, "btn", "btn-secomdary", 3, "ngClass", "click"], [1, "me-2", "align-middle", 3, "ngClass"], [1, "card", "card-animate", "shadow-lg", "p-4", 2, "z-index", "99999"], [3, "ngSubmit"], ["filterUsersForm", "ngForm"], [1, "row", "g-3", "mb-2"], [1, "col-lg-3", "col-sm-12"], ["for", "email", 1, "form-label"], ["type", "email", "name", "email", "placeholder", "Enter email address...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "username", 1, "form-label"], ["type", "text", "name", "username", "placeholder", "Enter the username...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "registrationStatus", 1, "form-label"], ["name", "registrationStatus", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "label", "multiple", "sendSubjects"], ["for", "role", 1, "form-label"], ["bindLabel", "role", "bindValue", "id", "name", "role", "ngModel", "", 3, "items", "ngModel", "ngModelChange"], ["roleFilterRef", "ngModel"], ["for", "status"], ["data-plugin", "choices", "data-choices", "", "data-choices-search-false", "", "name", "status", 1, "form-control", "form-select", 3, "ngModel", "ngModelChange"], [1, "col-lg-6", "col-sm-12", "d-flex", "align-items-end"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "ri-close-fill", "me-2", "align-middle"], ["type", "submit", 1, "btn", "btn-secondary"], [1, "ri-equalizer-fill", "me-2", "align-middle"], [3, "value"], [1, "card", "card-animate"], ["dataKey", "id", "styleClass", "p-datatable-customers", "selectionMode", "multiple", "dataKey", "id", "responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rowHover", "rows", "selection", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [2, "width", "4rem"], ["pSortableColumn", "firstName"], ["field", "firstName"], ["type", "text", "field", "firstname", "display", "menu"], ["pSortableColumn", "username"], ["field", "username"], ["type", "text", "field", "username", "display", "menu"], ["pSortableColumn", "email"], ["field", "email"], ["type", "text", "field", "email", "display", "menu"], ["pSortableColumn", "subjects"], ["field", ""], ["pSortableColumn", "activated"], ["field", "activated"], [4, "ngFor", "ngForOf"], [1, "flex", "justify-content-center"], ["class", "badge badge-border", 3, "ngClass", 4, "ngIf"], [1, "mt-1"], ["class", "text-info", 4, "ngIf"], ["class", "badge text-danger p-0 mt-1", 4, "ngIf"], ["class", "badge text-success p-0 mt-1", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-soft-secondary", "btn-sm", "dropdown", "arrow-none"], [1, "ri-more-fill"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "disabled", "routerLink"], [1, "ri-eye-fill", "align-bottom", "me-2", "text-muted"], [1, "dropdown-item", 3, "routerLink"], [1, "ri-pencil-fill", "align-bottom", "me-2", "text-muted"], [1, "dropdown-item", 3, "disabled", "click"], [1, "dropdown-divider"], [1, "align-middle", "me-2", "text-muted", 3, "ngClass"], [1, ""], [1, "badge", "rounded-pill", "badge-soft-primary"], [1, "badge", "badge-border", 3, "ngClass"], [1, "text-info"], ["_ngcontent-urx-c230", "", 1, "mdi", "mdi-loading", "mdi-spin", "fs-20", "align-middle", "me-2"], [1, "badge", "text-danger", "p-0", "mt-1"], [1, "badge", "text-success", "p-0", "mt-1"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center"], ["src", "assets/images/blank_pages/empty-state.png", "width", "300", "height", "300", 1, ""], [1, "text-secondary", "fw-bold"], [1, "ri-add-line", "me-2"], ["dataKey", "id", "styleClass", "p-datatable-customers", "selectionMode", "multiple", "dataKey", "id", "responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rowHover", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator"], ["datatable", ""], ["style", "cursor: pointer", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "p-4", "modal-body"], [1, "row", "g-3", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "col-6"], ["for", "firstname", 1, "form-label"], [3, "ngStyle"], ["type", "text", "name", "firstname", "id", "firstname", "placeholder", "Enter your First name", "required", "", "ngModel", "", "noInputSpace", "", 1, "form-control"], ["firstname", "ngModel"], [3, "ngStyle", 4, "ngIf"], ["for", "lastnameInput", 1, "form-label"], ["type", "text", "name", "lastname", "id", "lastnameInput", "placeholder", "Enter your Lastname", "required", "", "ngModel", "", "noInputSpace", "", 1, "form-control"], ["lastname", "ngModel"], [1, "col-12"], ["type", "email", "name", "email", "id", "email", "placeholder", "enter email", "pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "required", "", "ngModel", "", 1, "form-control"], ["emailRef", "ngModel"], ["for", "phone", 1, "form-label"], ["type", "text", "name", "phone", "id", "phone", "placeholder", "enter your phone number", "required", "", "ngModel", "", "noLetters", "", 1, "form-control"], ["phone", "ngModel"], [1, "d-flex", "justify-content-between"], ["placement", "top", "data-bs-container", "body", "data-bs-toggle", "popover", "triggers", "mouseenter:mouseleave", "popoverClass", "popOverClass", 1, "ri-question-fill", "text-info", 2, "cursor", "pointer", 3, "ngbPopover"], ["rolesInfoPopOver", ""], ["bindLabel", "role", "name", "role", "ngModel", "", 3, "items", "ngModel", "required", "change", "ngModelChange"], ["roleSelect", "", "roleRef", "ngModel"], ["class", "col-12", 4, "ngIf"], [1, "card-footer"], [1, "d-flex", "gap-2", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "ri-close-line", "me-2", "align-middle"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-load", 3, "disabled", 4, "ngIf"], [1, "fs-10"], [1, "fw-small"], [1, "mb-3"], [3, "label", "sendSubjects"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-outline-primary", "btn-load", 3, "disabled"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", "flex-shrink-0"], [1, "flex-grow-1", "ms-2"], [1, "modal-body", "px-5"], ["uploadUsersForm", "ngForm"], [1, "row", "align-items-center", "g-3"], [1, "col-lg-12"], ["for", "formFile", 1, "form-label"], ["name", "file", "type", "file", "id", "formFile", "accept", ".csv, application/vnd.ms-excel", 1, "form-control", 3, "change"], ["fileSelect", ""], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"]],
  template: function UserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-breadcrumbs", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UserComponent_div_1_Template, 7, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, UserComponent_div_2_Template, 11, 8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, UserComponent_div_3_Template, 3, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, UserComponent_ng_template_4_Template, 63, 31, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, UserComponent_ng_template_6_Template, 27, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "app-rightsidebar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("settingsButtonClicked", function UserComponent_Template_app_rightsidebar_settingsButtonClicked_8_listener() {
        return ctx.onSettingsButtonClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filtered);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("currentView", "Users")("pageGuide", ctx.quickGuide);
    }
  },
  directives: [_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _items_item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_9__.ItemTopicComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectComponent, primeng_table__WEBPACK_IMPORTED_MODULE_21__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_22__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_21__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_21__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_21__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_21__.ColumnFilter, primeng_table__WEBPACK_IMPORTED_MODULE_21__.TableCheckbox, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RequiredValidator, _directives_no_space_directive__WEBPACK_IMPORTED_MODULE_10__.NoSpaceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.PatternValidator, _directives_no_letters_directive__WEBPACK_IMPORTED_MODULE_11__.noLettersDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPopover, _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_12__.RightsidebarComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.TitleCasePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 88124:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-user/view-user.component */ 10027);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-user/add-user.component */ 86594);
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user/edit-user.component */ 86609);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ 65838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);

/** Component Imports */






const routes = [
    { path: '', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__.UserComponent },
    { path: 'add', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_1__.AddUserComponent },
    { path: 'view/:id', component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_0__.ViewUserComponent },
    { path: 'edit/:id', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__.EditUserComponent },
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); };
UsersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 40535:
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularx-flatpickr */ 81988);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! simplebar-angular */ 51618);
/* harmony import */ var _items_items_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/items.module */ 97272);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 84633);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layouts/layouts.module */ 52372);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ 88124);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ 65838);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user/add-user.component */ 86594);
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-user/view-user.component */ 10027);
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-user/edit-user.component */ 86609);
/* harmony import */ var _view_items_view_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-items/view-items.component */ 73108);
/* harmony import */ var _moderator_activities_moderator_activities_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moderator-activities/moderator-activities.component */ 36959);
/* harmony import */ var _directives_no_space_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/no-space.directive */ 32966);
/* harmony import */ var _directives_no_letters_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/no-letters.directive */ 80305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);






















class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_3__.UsersRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPopoverModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbProgressbarModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbAccordionModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_18__.FlatpickrModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_19__.TableModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule,
            _items_items_module__WEBPACK_IMPORTED_MODULE_1__.ItemsModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_21__.PaginatorModule,
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_6__.ViewUserComponent,
        _view_items_view_items_component__WEBPACK_IMPORTED_MODULE_8__.ViewItemsComponent,
        _moderator_activities_moderator_activities_component__WEBPACK_IMPORTED_MODULE_9__.ModeratorActivitiesComponent,
        _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__.EditUserComponent,
        _user_user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent,
        _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__.AddUserComponent,
        _directives_no_space_directive__WEBPACK_IMPORTED_MODULE_10__.NoSpaceDirective,
        _directives_no_letters_directive__WEBPACK_IMPORTED_MODULE_11__.noLettersDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _users_routing_module__WEBPACK_IMPORTED_MODULE_3__.UsersRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPopoverModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTypeaheadModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbProgressbarModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbAccordionModule,
        angularx_flatpickr__WEBPACK_IMPORTED_MODULE_18__.FlatpickrModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_19__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule,
        _items_items_module__WEBPACK_IMPORTED_MODULE_1__.ItemsModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_21__.PaginatorModule,
        src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule] }); })();


/***/ }),

/***/ 73108:
/*!****************************************************************!*\
  !*** ./src/app/pages/users/view-items/view-items.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewItemsComponent": () => (/* binding */ ViewItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ViewItemsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ViewItemsComponent.ɵfac = function ViewItemsComponent_Factory(t) { return new (t || ViewItemsComponent)(); };
ViewItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewItemsComponent, selectors: [["app-view-items"]], decls: 2, vars: 0, template: function ViewItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-items works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWl0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 10027:
/*!**************************************************************!*\
  !*** ./src/app/pages/users/view-user/view-user.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewUserComponent": () => (/* binding */ ViewUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _model_activity_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/activity-list-page */ 17017);
/* harmony import */ var _model_user_activity_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user-activity-filter */ 83758);
/* harmony import */ var _model_user_activity_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-activity-types */ 13401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/user.service */ 79089);
/* harmony import */ var _user_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/users.service */ 29073);
/* harmony import */ var _items_item_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../items/item-http.service */ 45911);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-notifier */ 43683);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _passages_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../passages/list-passages/all-passages.service */ 88820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angularx-flatpickr */ 81988);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var _items_preview_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../items/preview/preview.component */ 22377);
/* harmony import */ var _items_matching_preview_matching_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../items/matching-preview/matching-preview.component */ 98404);
/* harmony import */ var _items_ordering_preview_ordering_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../items/ordering-preview/ordering-preview.component */ 79040);
/* harmony import */ var _items_rich_essay_preview_rich_essay_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../items/rich-essay-preview/rich-essay-preview.component */ 90021);
/* harmony import */ var _items_multiple_response_preview_multiple_response_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../items/multiple-response-preview/multiple-response-preview.component */ 82457);
/* harmony import */ var _items_short_text_preview_short_text_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../items/short-text-preview/short-text-preview.component */ 50612);
/* harmony import */ var _items_yes_or_no_preview_yes_or_no_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../items/yes-or-no-preview/yes-or-no-preview.component */ 33699);
/* harmony import */ var _items_true_or_false_preview_true_or_false_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../items/true-or-false-preview/true-or-false-preview.component */ 96733);
/* harmony import */ var _items_cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../items/cloze-dropdown-preview/cloze-dropdown-preview.component */ 5518);
/* harmony import */ var _items_cloze_text_preview_cloze_text_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../items/cloze-text-preview/cloze-text-preview.component */ 35550);
/* harmony import */ var _items_choice_matrix_preview_choice_matrix_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../items/choice-matrix-preview/choice-matrix-preview.component */ 88261);
/* harmony import */ var _items_drawing_and_writing_preview_drawing_and_writing_preview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../items/drawing-and-writing-preview/drawing-and-writing-preview.component */ 34785);
/* harmony import */ var _items_passage_preview_passage_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../items/passage-preview/passage-preview.component */ 29306);
/* harmony import */ var _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../layouts/rightsidebar/rightsidebar.component */ 56034);






























function ViewUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Loading user's detail...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_35_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", role_r10.role, " ");
} }
function ViewUserComponent_div_1_ng_template_35_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", subject_r11.subjectName.toUpperCase(), " ");
} }
function ViewUserComponent_div_1_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, " User Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, " Username: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, " Firstname: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, " Lastname: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, " Account status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](33, " Create Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](40, " TOTAL SUBJECTS : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](46, " Role : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](47, ViewUserComponent_div_1_ng_template_35_div_47_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](52, "Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](53, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](54, ViewUserComponent_div_1_ng_template_35_div_54_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r5.userDetail.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Email: ", ctx_r5.userDetail.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Phone: ", ctx_r5.userDetail.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r5.userDetail.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r5.userDetail.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r5.userDetail.activated === true ? "active" : "inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](36, 10, ctx_r5.userDetail.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r5.userDetail.userSubjectsDTOS.length, " Subjects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r5.userDetail.userRolesDTOList);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r5.userDetail.userSubjectsDTOS);
} }
function ViewUserComponent_div_1_li_36_ng_template_3_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 6, data_r14.subjectName));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](data_r14.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](data_r14.totalDrafts);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](data_r14.awaitingModeration);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](data_r14.totalPublished);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](data_r14.totalRejected);
} }
function ViewUserComponent_div_1_li_36_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Item analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "thead", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Total Question(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Draft(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18, "Awaiting_Moderation");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Published");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](24, ViewUserComponent_div_1_li_36_ng_template_3_tr_24_Template, 14, 8, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r12.userItemAnalysis);
} }
function ViewUserComponent_div_1_li_36_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_li_36_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return ctx_r15.fetchUserItemAnalysis(ctx_r15.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " Item Analysis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ViewUserComponent_div_1_li_36_ng_template_3_Template, 25, 1, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngbNavItem", 2);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activityType_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("value", activityType_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activityType_r24.split("_").join(" "), " ");
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "bg-primary": a0, "bg-success": a1, "bg-warning": a2, "bg-danger": a3, "bg-secondary": a4 }; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) { return { "ri-login-box-line": a0, "ri-file-add-line": a1, "ri-edit-2-line": a2, "ri-delete-bin-3-line": a3, "ri-article-line": a4, "ri-edit-box-line": a5, "ri-file-copy-line": a6, "ri-file-transfer-line": a7, "ri-close-line": a8, "ri-check-double-line": a9, "ri-logout-box-line": a10 }; };
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "h6", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction5"](7, _c0, activity_r26.userActivityType === ctx_r28.activityTypes[0] || activity_r26.userActivityType === ctx_r28.activityTypes[9], activity_r26.userActivityType === ctx_r28.activityTypes[1] || activity_r26.userActivityType === ctx_r28.activityTypes[4] || activity_r26.userActivityType === ctx_r28.activityTypes[7] || activity_r26.userActivityType === ctx_r28.activityTypes[12], activity_r26.userActivityType === ctx_r28.activityTypes[2] || activity_r26.userActivityType === ctx_r28.activityTypes[5], activity_r26.userActivityType === ctx_r28.activityTypes[3] || activity_r26.userActivityType === ctx_r28.activityTypes[6] || activity_r26.userActivityType === ctx_r28.activityTypes[8] || activity_r26.userActivityType === ctx_r28.activityTypes[13] || activity_r26.userActivityType === ctx_r28.activityTypes[11], activity_r26.userActivityType === ctx_r28.activityTypes[9] || activity_r26.userActivityType === ctx_r28.activityTypes[10]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunctionV"](13, _c1, [activity_r26.userActivityType === ctx_r28.activityTypes[0], activity_r26.userActivityType === ctx_r28.activityTypes[1] || activity_r26.userActivityType === ctx_r28.activityTypes[7], activity_r26.userActivityType === ctx_r28.activityTypes[2] || activity_r26.userActivityType === ctx_r28.activityTypes[6], activity_r26.userActivityType === ctx_r28.activityTypes[3] || activity_r26.userActivityType === ctx_r28.activityTypes[8], activity_r26.userActivityType === ctx_r28.activityTypes[4], activity_r26.userActivityType === ctx_r28.activityTypes[5], activity_r26.userActivityType === ctx_r28.activityTypes[9], activity_r26.userActivityType === ctx_r28.activityTypes[10], activity_r26.userActivityType === ctx_r28.activityTypes[11], activity_r26.userActivityType === ctx_r28.activityTypes[12], activity_r26.userActivityType === ctx_r28.activityTypes[13]]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.userActivityType, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](10, 4, activity_r26.activityDate, "medium"));
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + " " + activity_r26.lastName, " Logged in at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 2, activity_r26.activityDate, "medium"), ". ");
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_1_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_1_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r45); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r43.fetchItem(activity_r26.itemId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_1_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r48); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r46.fetchPassage(activity_r26.passageId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_1_button_11_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_1_button_12_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + " " + activity_r26.lastName, " Created a new question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 9, activity_r26.activityDate, "medium"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", activity_r26.subject + " | " + activity_r26.topic, " ", activity_r26.subtopic && " | " + activity_r26.subtopic, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" ", activity_r26.itemType, " | ", activity_r26.itemStatus, " | ", activity_r26.moderationStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!activity_r26.itemId && !!!activity_r26.passageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!!activity_r26.itemId && !!activity_r26.passageId);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_2_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_2_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r54); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r52.fetchItem(activity_r26.itemId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_2_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_2_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r57); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r55.fetchPassage(activity_r26.passageId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_2_button_11_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_2_button_12_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + " " + activity_r26.lastName, " Edited a question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 9, activity_r26.activityDate, "medium"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", activity_r26.subject + " | " + activity_r26.topic, " ", activity_r26.subtopic && " | " + activity_r26.subtopic, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" ", activity_r26.itemType, " | ", activity_r26.itemStatus, " ", activity_r26.moderationStatus && "|" + activity_r26.moderationStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!activity_r26.itemId && !!!activity_r26.passageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!!activity_r26.itemId && !!activity_r26.passageId);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + " " + activity_r26.lastName, " Deleted a question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](activity_r26.itemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](8, 5, activity_r26.activityDate, "medium"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", activity_r26.subject + " | " + activity_r26.topic, " ", activity_r26.subtopic && " | " + activity_r26.subtopic, " ");
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_4_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r64); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r62.fetchItem(activity_r26.itemId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_4_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_4_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r67); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r65.fetchPassage(activity_r26.passageId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_4_button_9_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_4_button_10_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + activity_r26.lastName, " Created a new passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 6, activity_r26.activityDate, "medium"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", activity_r26.subject + " | " + activity_r26.topic, " ", activity_r26.subtopic && " | " + activity_r26.subtopic, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!activity_r26.itemId && !!!activity_r26.passageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!!activity_r26.itemId && !!activity_r26.passageId);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_5_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_5_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r73); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r71.fetchItem(activity_r26.itemId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_5_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_5_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r76); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r74.fetchPassage(activity_r26.passageId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_5_button_9_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_5_button_10_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + activity_r26.lastName, " Edited a passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 6, activity_r26.activityDate, "medium"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", activity_r26.subject + " | " + activity_r26.topic, " ", activity_r26.subtopic && " | " + activity_r26.subtopic, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!activity_r26.itemId && !!!activity_r26.passageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!!activity_r26.itemId && !!activity_r26.passageId);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + " " + activity_r26.lastName, " Deleted a passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 4, activity_r26.activityDate, "medium"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", activity_r26.subject + " | " + activity_r26.topic, " ", activity_r26.subtopic && activity_r26.subtopic, " ");
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_7_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_7_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r83); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r81.fetchItem(activity_r26.itemId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_7_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_7_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r86); const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3); return ctx_r84.fetchPassage(activity_r26.passageId, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " view passage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_7_button_11_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_7_button_12_Template, 2, 0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + activity_r26.lastName, " Created a new passage question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 9, activity_r26.activityDate, "medium"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", activity_r26.subject + " | " + activity_r26.topic, " ", activity_r26.subtopic && " | " + activity_r26.subtopic, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" ", activity_r26.itemType, " | ", activity_r26.itemStatus, " | ", activity_r26.moderationStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!activity_r26.itemId && !!!activity_r26.passageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !!!activity_r26.itemId && !!activity_r26.passageId);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", activity_r26.firstName + " " + activity_r26.lastName, " Deleted a passage question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 4, activity_r26.activityDate, "medium"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", activity_r26.subject + " | " + activity_r26.topic, " ", activity_r26.subtopic && " | " + activity_r26.subtopic, " ");
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_0_Template, 7, 5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_1_Template, 13, 12, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_2_Template, 13, 12, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_3_Template, 11, 8, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_4_Template, 11, 9, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_5_Template, 11, 9, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_6_Template, 9, 7, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_7_Template, 13, 12, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_div_8_Template, 9, 7, "div", 98);
} if (rf & 2) {
    const activity_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", activity_r26.userActivityType === ctx_r29.activityTypes[8]);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "ngb-accordion", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "ngb-panel", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_4_Template, 11, 25, "ng-template", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_ng_template_5_Template, 9, 9, "ng-template", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("closeOthers", true);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_div_1_Template, 6, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r21.activityListPage.content);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "h4", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, " This user has no activity log(s)! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
const _c2 = function () { return [50, 70, 100]; };
function ViewUserComponent_div_1_ng_template_40_ng_container_0_p_paginator_37_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-paginator", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onPageChange", function ViewUserComponent_div_1_ng_template_40_ng_container_0_p_paginator_37_Template_p_paginator_onPageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4); return ctx_r90.activityListChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("totalRecords", ctx_r23.activityListPage.totalElements)("first", ctx_r23.first)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](6, _c2))("rows", ctx_r23.rows)("showCurrentPageReport", true)("showPageLinks", true);
} }
function ViewUserComponent_div_1_ng_template_40_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "form", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngSubmit", function ViewUserComponent_div_1_ng_template_40_ng_container_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return ctx_r92.filterUserActivities(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "Activity Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ViewUserComponent_div_1_ng_template_40_ng_container_0_Template_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return ctx_r94.userActivityFilter.userActivityType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, " Select Activity Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, ViewUserComponent_div_1_ng_template_40_ng_container_0_option_14_Template, 2, 2, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ViewUserComponent_div_1_ng_template_40_ng_container_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return ctx_r95.userActivityFilter.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ViewUserComponent_div_1_ng_template_40_ng_container_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return ctx_r96.userActivityFilter.endDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_ng_template_40_ng_container_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r93); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return ctx_r97.clearUserActivitiesFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](28, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](29, " Clear Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](31, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, " Apply Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, ViewUserComponent_div_1_ng_template_40_ng_container_0_ng_container_35_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, ViewUserComponent_div_1_ng_template_40_ng_container_0_div_36_Template, 5, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](37, ViewUserComponent_div_1_ng_template_40_ng_container_0_p_paginator_37_Template, 1, 7, "p-paginator", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Activities(", ctx_r17.activityListPage.totalElements, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r17.userActivityFilter.userActivityType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r17.activityTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("type", "datetime-local")("altInput", false)("enableTime", false)("convertModelValue", true)("dateFormat", "Y-m-d")("ngModel", ctx_r17.userActivityFilter.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("type", "datetime-local")("altInput", false)("enableTime", false)("convertModelValue", true)("dateFormat", "Y-m-d")("ngModel", ctx_r17.userActivityFilter.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r17.activityListPage && ctx_r17.activityListPage.content.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r17.activityListPage && ctx_r17.activityListPage.content.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r17.activityListPage && ctx_r17.activityListPage.content.length > 0);
} }
function ViewUserComponent_div_1_ng_template_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Loading User Activities...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Loading User Activities...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ViewUserComponent_div_1_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ViewUserComponent_div_1_ng_template_40_ng_container_0_Template, 38, 18, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ViewUserComponent_div_1_ng_template_40_div_1_Template, 7, 0, "div", 0);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r7.loadingActivityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.loadingActivityList);
} }
const _c3 = function () { return { color: "black" }; };
function ViewUserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](21, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22, "Edit Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, " Create Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "ul", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_Template_li_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r98.fetchUserDetail(ctx_r98.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](34, " Overview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, ViewUserComponent_div_1_ng_template_35_Template, 55, 12, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, ViewUserComponent_div_1_li_36_Template, 4, 1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_div_1_Template_li_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r100.fetchActivities(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39, " Activities ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](40, ViewUserComponent_div_1_ng_template_40_Template, 2, 2, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](44, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", ctx_r1.userDetail.username[0].toUpperCase(), "", ctx_r1.userDetail.username.substring(1, 2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", ctx_r1.userDetail.username, " - ", ctx_r1.userDetail.userRolesDTOList[0].role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](15, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("routerLink", "/examalpha/users/edit/", ctx_r1.userDetail.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](28, 13, ctx_r1.userDetail.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("activeId", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngbNavItem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.authorities.includes("AUTHOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngbNavItem", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngbNavOutlet", _r4);
} }
function ViewUserComponent_ng_template_2_div_9_app_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-preview", 120);
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r104.item)("component", "usage-history")("showDeleteBtnInProfileActivitiesQuestionPreview", false)("showEditBtnInProfileActivitiesQuestionPreview", false);
} }
function ViewUserComponent_ng_template_2_div_9_app_matching_preview_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-matching-preview", 121);
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r105.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_ordering_preview_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-ordering-preview", 121);
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r106.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_rich_essay_preview_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-rich-essay-preview", 121);
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r107.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_multiple_response_preview_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-multiple-response-preview", 121);
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r108.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_short_text_preview_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-short-text-preview", 121);
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r109.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_yes_or_no_preview_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-yes-or-no-preview", 121);
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r110.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_true_or_false_preview_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-true-or-false-preview", 121);
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r111.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_cloze_dropdown_preview_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-cloze-dropdown-preview", 121);
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r112.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_cloze_text_preview_10_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "app-cloze-text-preview", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("closeOuterModal", function ViewUserComponent_ng_template_2_div_9_app_cloze_text_preview_10_Template_app_cloze_text_preview_closeOuterModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r118); const modal_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit; return modal_r101.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r113.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_choice_matrix_preview_11_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "app-choice-matrix-preview", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("closeOuterModal", function ViewUserComponent_ng_template_2_div_9_app_choice_matrix_preview_11_Template_app_choice_matrix_preview_closeOuterModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r121); const modal_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit; return modal_r101.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r114.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_app_drawing_and_writing_preview_12_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "app-drawing-and-writing-preview", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("closeOuterModal", function ViewUserComponent_ng_template_2_div_9_app_drawing_and_writing_preview_12_Template_app_drawing_and_writing_preview_closeOuterModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r124); const modal_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit; return modal_r101.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r115.item)("component", "usage-history");
} }
function ViewUserComponent_ng_template_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ViewUserComponent_ng_template_2_div_9_app_preview_1_Template, 1, 4, "app-preview", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ViewUserComponent_ng_template_2_div_9_app_matching_preview_2_Template, 1, 2, "app-matching-preview", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ViewUserComponent_ng_template_2_div_9_app_ordering_preview_3_Template, 1, 2, "app-ordering-preview", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ViewUserComponent_ng_template_2_div_9_app_rich_essay_preview_4_Template, 1, 2, "app-rich-essay-preview", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ViewUserComponent_ng_template_2_div_9_app_multiple_response_preview_5_Template, 1, 2, "app-multiple-response-preview", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ViewUserComponent_ng_template_2_div_9_app_short_text_preview_6_Template, 1, 2, "app-short-text-preview", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ViewUserComponent_ng_template_2_div_9_app_yes_or_no_preview_7_Template, 1, 2, "app-yes-or-no-preview", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ViewUserComponent_ng_template_2_div_9_app_true_or_false_preview_8_Template, 1, 2, "app-true-or-false-preview", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ViewUserComponent_ng_template_2_div_9_app_cloze_dropdown_preview_9_Template, 1, 2, "app-cloze-dropdown-preview", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ViewUserComponent_ng_template_2_div_9_app_cloze_text_preview_10_Template, 1, 2, "app-cloze-text-preview", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ViewUserComponent_ng_template_2_div_9_app_choice_matrix_preview_11_Template, 1, 2, "app-choice-matrix-preview", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ViewUserComponent_ng_template_2_div_9_app_drawing_and_writing_preview_12_Template, 1, 2, "app-drawing-and-writing-preview", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "MCQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "ASSOCIATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "ORDER_LIST");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "ESSAY_RICH_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "MRQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "SHORT_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "YES_NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "TRUE_FALSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "CLOZE_DROPDOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "CLOZE_TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "CHOICE_MATRIX");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r102.item.type === "DRAWING_AND_WRITING");
} }
function ViewUserComponent_ng_template_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "app-passage-preview", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("previewData", ctx_r103.passage)("showEditBtnInProfileActivitiesPassagePreview", false);
} }
function ViewUserComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h3", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ViewUserComponent_ng_template_2_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r126); const modal_r101 = restoredCtx.$implicit; return modal_r101.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ViewUserComponent_ng_template_2_div_9_Template, 13, 12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ViewUserComponent_ng_template_2_div_10_Template, 2, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", ctx_r3.currentPreview, " Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r3.currentPreview === "Question" && ctx_r3.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r3.currentPreview === "Passage" && ctx_r3.passage);
} }
class ViewUserComponent {
    constructor(activatedRoute, userService, userService2, itemService, notifier, modalService, passageService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.userService2 = userService2;
        this.itemService = itemService;
        this.notifier = notifier;
        this.modalService = modalService;
        this.passageService = passageService;
        this.userItemAnalysis = [];
        this.activityListPage = new _model_activity_list_page__WEBPACK_IMPORTED_MODULE_0__.ActivityListPage();
        this.userActivityFilter = new _model_user_activity_filter__WEBPACK_IMPORTED_MODULE_1__.UserActivityFilter();
        this.activityTypes = Object.keys(_model_user_activity_types__WEBPACK_IMPORTED_MODULE_2__.UserActivityTypes);
        this.roles = [];
        this.loading = true;
        this.page = 0;
        this.size = 50;
        this.first = 0;
        this.rows = 50;
        this.quickGuide = `<div class="p-4">
    <h6 class="mb-2 fw-bold text-uppercase">Introduction</h6>
    <p class="text-muted mb-4">
      This page displays a detailed view of the selected user's account. The page is sectioned into two cards,
      in which the first card shows personal information pertaining to the user 
      like the username, email, phone number, account status, firstname, lastname, 
      total subjects assigned to the user, the role assigned to the user and the date, the user account was created.
    </p>
    <div class="row my-4">
      <div class="d-flex justify-content-center align-items-center col-12">
        <img src="" alt="" />
      </div>
    </div>

    <div></div>

    <div>

    </div>

  </div>`;
        this.loadingActivityList = true;
        this.loading_passage = false;
        this.loading_item = false;
        // this.currentUser = this.userService.getCurrentUser();
        this.currentUser = this.userService.getCurrentUser()
            ? this.userService.getCurrentUser()
            : this.userService.getCurrentUserAfterReload();
        this.activatedRoute.paramMap.subscribe((params) => {
            this.userId = params.get('id');
            // console.log(this.userId);
        });
        this.setDefaultActivityFilterParams();
    }
    /** Handler function for the quick guide pull out */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
        const rightBar = document.getElementById('theme-settings-offcanvas');
        if (rightBar != null) {
            rightBar.classList.toggle('show');
            rightBar.setAttribute('style', 'visibility: visible;');
        }
    }
    ngOnInit() {
        this.fetchUserDetail(this.userId);
        this.fetchUserItemAnalysis(this.userId);
        this.fetchActivities();
    }
    setDefaultActivityFilterParams() {
        var _a, _b;
        if ((_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.authorities) === null || _b === void 0 ? void 0 : _b.includes('ADMIN')) {
            this.userActivityFilter.userId = this.userId;
        }
        //this.userActivityFilter.userActivityType = 'LOGIN';
    }
    fetchUserItemAnalysis(userId) {
        var _a, _b;
        // get all the items created by user
        if ((_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.authorities) === null || _b === void 0 ? void 0 : _b.includes('ADMIN')) {
            this.userService2.getAuthorItems(this.userId).subscribe((value) => {
                this.userItemAnalysis = value;
                // console.log(this.userItemAnalysis);
            }, (error) => {
                this.notifier.notify('error', error.error.message);
            });
        }
        else {
            this.userService2.getSingleItemAnalysisNonAdmin(userId).subscribe((value) => {
                this.userItemAnalysis = value;
                // console.log(this.userItemAnalysis);
            }, (error) => {
                // console.log(error);
                this.notifier.notify('error', error.error.message);
            });
        }
    }
    fetchUserDetail(userId) {
        var _a, _b;
        if ((_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.authorities) === null || _b === void 0 ? void 0 : _b.includes('ADMIN')) {
            this.userService2.getUserDetail(userId).subscribe((value) => {
                this.userDetail = value;
                this.userDetail.userRolesDTOList.map((role, index) => {
                    this.roles.push(this.userDetail.userRolesDTOList[index].role);
                });
                //console.log(this.roles);
                this.loading = false;
            }, (error) => {
                this.loading = false;
            });
        }
        else {
            this.userService2.getSingleUserDetails(userId).subscribe((value) => {
                this.userDetail = value;
                this.userDetail.userRolesDTOList.map((role, index) => {
                    this.roles.push(this.userDetail.userRolesDTOList[index].role);
                });
                //console.log(this.roles);
                this.loading = false;
            }, (error) => {
                this.loading = false;
            });
        }
    }
    fetchActivities() {
        var _a, _b;
        this.loadingActivityList = true;
        if ((_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.authorities) === null || _b === void 0 ? void 0 : _b.includes('ADMIN')) {
            this.userService2
                .fetchActivityListAdmin(this.userActivityFilter, this.page, this.size)
                .subscribe((value) => {
                this.activityListPage = value;
                this.loadingActivityList = false;
            }, (error) => {
                this.notifier.notify('error', error.error.message);
                this.loadingActivityList = false;
            });
        }
        else {
            this.userService2
                .fetchSingleUserActivityList(this.userActivityFilter, this.page, this.size)
                .subscribe((value) => {
                this.activityListPage = value;
                this.loadingActivityList = false;
            }, (error) => {
                this.notifier.notify('error', error.error.message);
                this.loadingActivityList = false;
            });
        }
    }
    fetchItem(itemId, previewModal) {
        console.log(itemId);
        console.log(previewModal);
        this.loading_item = true;
        this.currentPreview = 'Question';
        this.modalService.open(previewModal, { centered: true, size: 'xl' });
        this.itemService.fetchIndividualItem(itemId).subscribe((value) => {
            if (value) {
                this.item = value;
                console.log('Items: ', this.item);
                this.loading_item = false;
            }
        }, (error) => {
            // console.log(error.error.message);
            this.notifier.notify('error', error.error.message);
            this.loading_item = false;
        });
    }
    fetchPassage(passageId, previewModal) {
        this.loading_passage = true;
        this.currentPreview = 'Passage';
        this.modalService.open(previewModal, { centered: true, size: 'xl' });
        this.passageService.fetchSinglePassage(passageId).subscribe((value) => {
            if (value) {
                this.passage = value;
                this.loading_passage = false;
            }
        }, (error) => {
            // console.log(error.error.message);
            this.notifier.notify('error', error.error.message);
            this.loading_passage = false;
        });
    }
    filterUserActivities() {
        this.loadingActivityList = true;
        this.page = 0;
        this.size = 50;
        this.fetchActivities();
    }
    clearUserActivitiesFilter() {
        this.userActivityFilter = new _model_user_activity_filter__WEBPACK_IMPORTED_MODULE_1__.UserActivityFilter();
        this.fetchActivities();
    }
    // activityListChange(event: any) {
    //   this.loadingActivityList = true;
    //   // console.log(event);
    //   this.size = event.rows;
    //   this.page = event.page;
    //   this.fetchActivities();
    // }
    activityListChange(event) {
        var _a, _b;
        this.first = (_a = event.first) !== null && _a !== void 0 ? _a : 0;
        this.rows = (_b = event.rows) !== null && _b !== void 0 ? _b : 50;
        event = Object.assign(Object.assign({}, event), { page: Number(event.page) + 1 });
        this.loadingActivityList = true;
        // console.log(event);
        this.size = event.rows;
        this.page = event.page;
        this.fetchActivities();
    }
}
ViewUserComponent.ɵfac = function ViewUserComponent_Factory(t) { return new (t || ViewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_user_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_items_item_http_service__WEBPACK_IMPORTED_MODULE_5__.ItemHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_23__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_passages_list_passages_all_passages_service__WEBPACK_IMPORTED_MODULE_6__.AllPassagesService)); };
ViewUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: ViewUserComponent, selectors: [["app-view-user"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_25__.DecimalPipe])], decls: 5, vars: 4, consts: [["class", "d-flex align-items-center justify-content-center", "style", "height: 60vh", 4, "ngIf"], [4, "ngIf"], ["previewModal", ""], [3, "currentView", "pageGuide", "settingsButtonClicked"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "60vh"], [1, "d-flex", "align-items-center", "gap-2"], ["role", "status", 1, "spinner-border", "text-info", "fs-18"], [1, "visually-hidden"], [1, "text-info", "text-center", "fs-16", "flex-grow-1", "ms-2"], [1, "row"], [1, "col-lg-12"], [1, "card", "mt-n4", "mx-n4", "border-0"], [1, "bg-soft-primary"], [1, "card-body", "pb-0", "px-4"], [1, "row", "mb-3"], [1, "col-md"], [1, "row", "align-items-center", "g-3"], [1, "col-sm-12", "col-md-auto"], [1, "avatar-md"], [1, "avatar-title", "bg-white", "rounded-circle"], [1, ""], [1, "col-sm-12", "col-md"], [1, "fw-bold", "text-capitalize"], [1, "hstack", "gap-3", "flex-wrap"], [3, "routerLink"], [1, "ri-pencil-fill", "align-bottom", "me-1"], [1, "vr"], [1, "fw-medium"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-tabs-custom", "border-bottom-0", 3, "activeId"], ["customNav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem", "click"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], ["ngbNavContent", ""], ["class", "nav-item", 3, "ngbNavItem", "click", 4, "ngIf"], [1, "tab-content", "text-muted"], [3, "ngbNavOutlet"], [1, "col-xl-9", "col-lg-8"], [1, "card"], [1, "card-body"], [1, "text-muted"], [1, "mb-3", "fw-semibold", "text-uppercase"], [1, "ps-4", "vstack", "gap-2"], [1, "text-capitalize"], [1, "pt-3", "border-top", "border-top-dashed", "mt-4"], [1, "col-lg-3", "col-sm-6"], [1, "mb-2", "text-uppercase", "fw-medium"], [1, "fs-15", "mb-0"], [1, "badge", "bg-success", "fs-12"], ["class", "mx-1 badge bg-primary fs-12", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-lg-4"], [1, "card-title", "mb-4"], [1, "d-flex", "flex-wrap", "gap-2", "fs-16"], ["class", "badge fw-medium badge-soft-secondary", 4, "ngFor", "ngForOf"], [1, "mx-1", "badge", "bg-primary", "fs-12"], [1, "badge", "fw-medium", "badge-soft-secondary"], [1, "d-flex", "align-items-center", "mb-4"], [1, "card-title", "flex-grow-1"], [1, "table-responsive", "table-card"], [1, "table", "table-borderless", "align-middle", "mb-0"], [1, "table-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "card", "card-animate", "shadow-lg", "p-4", "mb-3"], [3, "ngSubmit"], ["filterUserActivitiesForm", "ngForm"], [1, "row", "g-3", "mb-2"], [1, "col-lg-4", "col-sm-12"], ["for", "email", 1, "form-label"], ["name", "activityType", 1, "form-select", 3, "ngModel", "ngModelChange"], ["selected", "", "disabled", "", "value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "username", 1, "form-label"], ["type", "text", "name", "startDate", "placeholder", "Enter start date", "required", "", "mwlFlatpickr", "", "data-id", "datetime", 1, "form-control", "flatpickr-input", 3, "type", "altInput", "enableTime", "convertModelValue", "altFormat", "dateFormat", "ngModel", "ngModelChange"], ["type", "text", "name", "endDate", "placeholder", "Enter end date", "required", "", "mwlFlatpickr", "", "data-id", "datetime", 1, "form-control", "flatpickr-input", 3, "type", "altInput", "enableTime", "convertModelValue", "altFormat", "dateFormat", "ngModel", "ngModelChange"], [1, "col-lg-6", "col-sm-12", "d-flex", "align-items-end"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "ri-close-fill", "me-2", "align-middle"], ["type", "submit", 1, "btn", "btn-secondary"], [1, "ri-equalizer-fill", "me-2", "align-middle"], ["class", "p-2", 4, "ngIf"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "totalRecords", "first", "rowsPerPageOptions", "rows", "showCurrentPageReport", "showPageLinks", "onPageChange", 4, "ngIf"], [3, "value"], ["class", "profile-timeline", 4, "ngFor", "ngForOf"], [1, "profile-timeline"], ["activeIds", "static-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["id", "static-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["data-bs-toggle", "collapse", "href", "javasccript:void(0;)", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button", "p-2", "shadow-none"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "avatar-xs"], [1, "avatar-title", "rounded-circle", 3, "ngClass"], [1, "", 3, "ngClass"], [1, "flex-grow-1", "ms-3"], [1, "fs-15", "mb-0", "fw-semibold"], [1, "fw-normal"], ["id", "collapseOne", "class", "accordion-collapse collapse show", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 4, "ngIf"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "ms-2", "ps-5", "pt-0"], [1, "mb-1"], [1, "mb-1", "text-capitalize"], [1, "text-muted", "mb-0"], ["class", "btn btn-success mt-2 text-capitalize", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", "mt-2", "text-capitalize", 3, "click"], [1, "text-danger", 2, "cursor", "pointer"], [1, "p-2"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-center"], ["src", "assets/images/blank_pages/empty-state.png", "width", "200", "height", "200", 1, ""], [1, "text-secondary", "fw-bold", "my-2"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "totalRecords", "first", "rowsPerPageOptions", "rows", "showCurrentPageReport", "showPageLinks", "onPageChange"], [1, "modal-header", "px-5"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "p-5", "modal-body", 2, "height", "420px", "scroll-behavior", "smooth", "overflow-x", "hidden", "overflow-y", "auto"], [3, "previewData", "component", "showDeleteBtnInProfileActivitiesQuestionPreview", "showEditBtnInProfileActivitiesQuestionPreview", 4, "ngIf"], [3, "previewData", "component", 4, "ngIf"], [3, "previewData", "component", "closeOuterModal", 4, "ngIf"], [3, "previewData", "component", "showDeleteBtnInProfileActivitiesQuestionPreview", "showEditBtnInProfileActivitiesQuestionPreview"], [3, "previewData", "component"], [3, "previewData", "component", "closeOuterModal"], [3, "previewData", "showEditBtnInProfileActivitiesPassagePreview"]], template: function ViewUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ViewUserComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ViewUserComponent_div_1_Template, 45, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ViewUserComponent_ng_template_2_Template, 11, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "app-rightsidebar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("settingsButtonClicked", function ViewUserComponent_Template_app_rightsidebar_settingsButtonClicked_4_listener() { return ctx.onSettingsButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.userDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("currentView", "Manage User")("pageGuide", ctx.quickGuide);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.RequiredValidator, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_27__.FlatpickrDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPanelTitle, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPanelContent, primeng_paginator__WEBPACK_IMPORTED_MODULE_28__.Paginator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavOutlet, _items_preview_preview_component__WEBPACK_IMPORTED_MODULE_7__.PreviewComponent, _items_matching_preview_matching_preview_component__WEBPACK_IMPORTED_MODULE_8__.MatchingPreviewComponent, _items_ordering_preview_ordering_preview_component__WEBPACK_IMPORTED_MODULE_9__.OrderingPreviewComponent, _items_rich_essay_preview_rich_essay_preview_component__WEBPACK_IMPORTED_MODULE_10__.RichEssayPreviewComponent, _items_multiple_response_preview_multiple_response_preview_component__WEBPACK_IMPORTED_MODULE_11__.MultipleResponsePreviewComponent, _items_short_text_preview_short_text_preview_component__WEBPACK_IMPORTED_MODULE_12__.ShortTextPreviewComponent, _items_yes_or_no_preview_yes_or_no_preview_component__WEBPACK_IMPORTED_MODULE_13__.YesOrNoPreviewComponent, _items_true_or_false_preview_true_or_false_preview_component__WEBPACK_IMPORTED_MODULE_14__.TrueOrFalsePreviewComponent, _items_cloze_dropdown_preview_cloze_dropdown_preview_component__WEBPACK_IMPORTED_MODULE_15__.ClozeDropdownPreviewComponent, _items_cloze_text_preview_cloze_text_preview_component__WEBPACK_IMPORTED_MODULE_16__.ClozeTextPreviewComponent, _items_choice_matrix_preview_choice_matrix_preview_component__WEBPACK_IMPORTED_MODULE_17__.ChoiceMatrixPreviewComponent, _items_drawing_and_writing_preview_drawing_and_writing_preview_component__WEBPACK_IMPORTED_MODULE_18__.DrawingAndWritingPreviewComponent, _items_passage_preview_passage_preview_component__WEBPACK_IMPORTED_MODULE_19__.PassagePreviewComponent, _layouts_rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_20__.RightsidebarComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_users_module_ts.js.map