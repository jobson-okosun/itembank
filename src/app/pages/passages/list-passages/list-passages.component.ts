import { ListPassageTopics } from "./../model/list-passage-topics.model";
import { ListAllSubjects } from "./../../items/models/list-all-subjects.model";
import { HttpErrorResponse } from "@angular/common/http";
import { AllPassagesResponseModel } from "./../model/all-passages-response-model.model";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { AllPassagesService } from "./all-passages.service";

import Swal from "sweetalert2";
import { ItemHttpService } from "../../items/item-http.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ItemUtilitiesService } from "../../items/item-utilities.service";
import { PassageFilter } from "../model/passage-filter";
import { NotifierService } from "angular-notifier";
import { SinglePassageItems } from "../../items/passage-item/model/single-passage-items.model";
import { AssessmentsService } from "../../assessment/service/assessments.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ItemStatusEnum } from "../../items/models/item-status-enum";
import { ItemTypes } from "../../items/models/item-types";
import { UserService } from "src/app/shared/user.service";
import { Account } from "src/app/authentication/model/account.model";
import { NewTopic } from "../../items/models/new-topic.model";
import { ItemUsed } from "../../items/models/filter-items.model";
import { UsageHistory } from "../../items/models/usage-history";
import { BlockDetails } from "../../assessment/model/section-details";

@Component({
  selector: "app-list-passages",
  templateUrl: "./list-passages.component.html",
  styleUrls: ["./list-passages.component.scss"],
})
export class ListPassagesComponent implements OnInit {
  @Input() _subjectId!: string;
  @Input() _assessmentId!: string;
  @Input() _sectionId!: string;
  @Input() _currentBlock!: BlockDetails;
  @Input() _subjectName!: string;
  @Input() _existingPassageIds: string[] = [];
  @Input() _loadingExistingPassageIds: boolean = false
  @Output() sendSelectedPassages = new EventEmitter();

  breadCrumbItems!: any;

  subjects: ListAllSubjects[] = [];

  assessmentStatus: boolean = false;

  masterSelected: boolean;

  subjectName: string;

  subjectId: string = this.activatedRoute.snapshot.params["subjectId"];

  passageTopics: ListPassageTopics[] = [];

  passageItems: SinglePassageItems;

  newPassageFilter: PassageFilter = new PassageFilter();

  subject: any;

  showFilter: boolean = false;

  selectedTopic: any;

  selectedTopicName: string;

  pageNo: number = 0;

  pageSize: number = 5;

  itemTrail: any;

  checkedList: any;

  passages: AllPassagesResponseModel;

  passageFilterOptions: PassageFilter = new PassageFilter();

  assessmentActive: boolean = false;

  passageSelectionComplete: boolean = false;

  selectedPassageIds: string[] = [];

  currentUser: Account;

  selectedPassageIdToDelete: string;

  tagIds: any[] = [];

  submitted: boolean = false;

  newTopic: NewTopic = new NewTopic();
  passageStatus: any[] = [];
  itemType: string[] = [];
  difficultyLevel: number[] = [1, 2, 3, 4, 5];
  filteredPassageResult: AllPassagesResponseModel;
  totalPassages: number = 0;
  loading: boolean = true;
  loading_passages: boolean = true;
  loading_topics_tree: boolean = true;
  processing_delete: boolean = false;
  filteredResult: AllPassagesResponseModel = new AllPassagesResponseModel();
  filterState: boolean = false;
  itemUsages: string[] = Object.keys(ItemUsed);
  passageUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  allSubjects: ListAllSubjects[];
  loadingAllSubjects: boolean = true;


  constructor(
    private passageService: AllPassagesService,
    private itemService: ItemHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private itemUtil: ItemUtilitiesService,
    private notifier: NotifierService,
    private assessmentService: AssessmentsService,
    private modalService: NgbModal,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subjectId = this.activatedRoute.snapshot.params["subjectId"];
    this.breadCrumbItems = [{ label: "passages", active: true }];
    this.assessmentActive = this.itemService.assessmentActive;
    // console.log(this.assessmentActive)

    this.passageStatus = Object.values(ItemStatusEnum);
    this.itemType = Object.values(ItemTypes);

    if (this.passageService.topicId) {
      this.selectedTopicName = this.passageService.topicName;
      this.itemService
        .fetchTopicPassages(
          this.passageService.subjectId,
          this.passageService.topicId,
          this.pageNo,
          this.pageSize
        )
        .subscribe((value) => {
          this.passages = value;
          //console.log(this.passages);
        });
    }

    this.currentUser = this.userService.getCurrentUser();

    if (!this.assessmentActive) {
      // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (this.subjectId === "passages") {
        console.log("passages", "passed");
        // this.loading_passages = false;
        if (this.currentUser.authorities.includes("ADMIN")) {
          this.fetchAllSubjects();
        } else {
          this.fetchAllSubjectsNonAdmin();
        }
      } else {
        if (this.subjectId !== "passages") {
          // this.subjectId = params.get("subjectId");
          if (this.currentUser.authorities.includes("ADMIN")) {
            this.fetchAllSubjects();
          } else {
            this.fetchAllSubjectsNonAdmin();
          }
          this.subjectName = this.passageService.subjectName;
          if (this.currentUser.authorities.includes("ADMIN")) {
            this.itemService
              .fetchPassageTopicTreeAdmin(this.passageService.subjectId)
              .subscribe(
                (value) => {
                  console.log("i got here");
                  value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                  });

                  this.passageTopics = value;
                  this.loading_topics_tree = false;
                  this.loading_passages = false;
                  this.loadingAllSubjects = false;

                  if (this.passageTopics.length > 0) {
                    this.selectedTopic = this.passageTopics[0];
                    let itemTrail = {
                      subjectId: this.subjectId,
                      topicId: this.selectedTopic.topicId,
                      subtopicId: "",
                      subjectName: this.subjectName,
                      topicName: this.selectedTopic.topicName,
                      subtopicName: "",
                    };
                    this.getPassages(this.passageTopics[0]);
                    this.selectedTopic = this.passageTopics[0];
                    this.setItemTrail(this.passageTopics[0]);
                  } else {
                    this.loading_passages = false;
                  }

                  //console.log(this.passageTopics);
                },
                (error: HttpErrorResponse) => {
                  this.loading_topics_tree = false;
                }
              );
          } else if (this.currentUser.authorities.includes("MODERATOR")) {
            this.itemService
              .fetchPassageTopicTreeModerator(this.passageService.subjectId)
              .subscribe(
                (value) => {
                  console.log("i got here");
                  value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                  });

                  this.passageTopics = value;
                  this.loading_topics_tree = false;
                  this.loading_passages = false;
                  this.loadingAllSubjects = false;

                  if (this.passageTopics.length > 0) {
                    this.selectedTopic = this.passageTopics[0];
                    let itemTrail = {
                      subjectId: this.subjectId,
                      topicId: this.selectedTopic.topicId,
                      subtopicId: "",
                      subjectName: this.subjectName,
                      topicName: this.selectedTopic.topicName,
                      subtopicName: "",
                    };
                    this.getPassages(this.passageTopics[0]);
                    this.selectedTopic = this.passageTopics[0];
                    this.setItemTrail(this.passageTopics[0]);
                  } else {
                    this.loading_passages = false;
                  }

                  //console.log(this.passageTopics);
                },
                (error: HttpErrorResponse) => {
                  this.loading_topics_tree = false;
                }
              );
          } else if (this.currentUser.authorities.includes("AUTHOR")) {
            this.itemService
              .fetchPassageTopicTreeAuthor(this.passageService.subjectId)
              .subscribe(
                (value) => {
                  console.log("i got here");
                  value.forEach((topic) => {
                    this.totalPassages += topic.totalPassages;
                  });

                  this.passageTopics = value;
                  this.loading_topics_tree = false;
                  this.loading_passages = false;
                  this.loadingAllSubjects = false;

                  if (this.passageTopics.length > 0) {
                    this.selectedTopic = this.passageTopics[0];
                    let itemTrail = {
                      subjectId: this.subjectId,
                      topicId: this.selectedTopic.topicId,
                      subtopicId: "",
                      subjectName: this.subjectName,
                      topicName: this.selectedTopic.topicName,
                      subtopicName: "",
                    };
                    this.getPassages(this.passageTopics[0]);
                    this.selectedTopic = this.passageTopics[0];
                    this.setItemTrail(this.passageTopics[0]);
                  } else {
                    this.loading_passages = false;
                  }

                  //console.log(this.passageTopics);
                },
                (error: HttpErrorResponse) => {
                  this.loading_topics_tree = false;
                }
              );
          }
        }
      }
      // });
    }

    if (this.assessmentActive) {
      console.log("i got here assesment is active");
      this.loadingAllSubjects = false;
      this.subjectName = this._subjectName;

      this.itemService
        .fetchAssessmentPassageTopicsTree(
          this._subjectId,
          this._currentBlock.totalQuestionsInPassage
        )
        .subscribe(
          (value) => {
            this.passageTopics = value;
            this.loading_topics_tree = false;
            this.loading = false;
            if (this.passageTopics.length > 0) {
              this.selectedTopic = this.passageTopics[0];
              /* let itemTrail = {
                subjectId: this.subjectId,
                topicId: this.selectedTopic.topicId,
                subtopicId: '',
                subjectName: this.subjectName,
                topicName: this.selectedTopic.name,
                subtopicName: ''
              }; */
              //this.itemUtil.currentItemTrail = itemTrail;
              this.getAssessmentPassages(this.passageTopics[0]);
              console.log("hello, get assessmenrt passages");
            } else {
              this.loading_passages = false;
            }
          },
          (error: HttpErrorResponse) => {
            this.loading_topics_tree = false;
            this.loading = false;
          }
        );
    }
    // else {
    //   console.log("i dey here");
    //   // todo: loading topic treee if there is a subject id
    //   // todo: display selcet topic if there is no subject id

    // }
  }

  handleSubjectSelection(subject: ListAllSubjects){
    this.selectSubject(subject.subjectId)

  }

  selectSubject(subjectId: string) {
    this.passageService.subjectId = subjectId;
    this.subjectId = subjectId;

    this.subjectName = this.allSubjects.find(
      (subject) => subject.subjectId === subjectId
    ).name;

    if (this.currentUser.authorities.includes("ADMIN")) {
      this.itemService
        .fetchPassageTopicTreeAdmin(this.passageService.subjectId)
        .subscribe(
          (value) => {
            value.forEach((topic) => {
              this.totalPassages += topic.totalPassages;
            });

            this.passageTopics = value;
            this.loading_topics_tree = false;

            if (this.passageTopics.length > 0) {
              this.selectedTopic = this.passageTopics[0];
              let itemTrail = {
                subjectId: this.subjectId,
                topicId: this.selectedTopic.topicId,
                subtopicId: "",
                subjectName: this.subjectName,
                topicName: this.selectedTopic.topicName,
                subtopicName: "",
              };
              this.getPassages(this.passageTopics[0]);
              this.selectedTopic = this.passageTopics[0];
              this.setItemTrail(this.passageTopics[0]);
            } else {
              this.loading_passages = false;
            }

            //console.log(this.passageTopics);
          },
          (error: HttpErrorResponse) => {
            this.loading_topics_tree = false;
          }
        );
    } else if (this.currentUser.authorities.includes("MODERATOR")) {
      this.itemService
        .fetchPassageTopicTreeModerator(this.passageService.subjectId)
        .subscribe(
          (value) => {
            value.forEach((topic) => {
              this.totalPassages += topic.totalPassages;
            });

            this.passageTopics = value;
            this.loading_topics_tree = false;

            if (this.passageTopics.length > 0) {
              this.selectedTopic = this.passageTopics[0];
              let itemTrail = {
                subjectId: this.subjectId,
                topicId: this.selectedTopic.topicId,
                subtopicId: "",
                subjectName: this.subjectName,
                topicName: this.selectedTopic.topicName,
                subtopicName: "",
              };
              this.getPassages(this.passageTopics[0]);
              this.selectedTopic = this.passageTopics[0];
              this.setItemTrail(this.passageTopics[0]);
            } else {
              this.loading_passages = false;
            }

            //console.log(this.passageTopics);
          },
          (error: HttpErrorResponse) => {
            this.loading_topics_tree = false;
          }
        );
    } else if (this.currentUser.authorities.includes("AUTHOR")) {
      this.itemService
        .fetchPassageTopicTreeAuthor(this.passageService.subjectId)
        .subscribe(
          (value) => {
            value.forEach((topic) => {
              this.totalPassages += topic.totalPassages;
            });

            this.passageTopics = value;
            this.loading_topics_tree = false;

            if (this.passageTopics.length > 0) {
              this.selectedTopic = this.passageTopics[0];
              let itemTrail = {
                subjectId: this.subjectId,
                topicId: this.selectedTopic.topicId,
                subtopicId: "",
                subjectName: this.subjectName,
                topicName: this.selectedTopic.topicName,
                subtopicName: "",
              };
              this.getPassages(this.passageTopics[0]);
              this.selectedTopic = this.passageTopics[0];
              this.setItemTrail(this.passageTopics[0]);
            } else {
              this.loading_passages = false;
            }

            //console.log(this.passageTopics);
          },
          (error: HttpErrorResponse) => {
            this.loading_topics_tree = false;
          }
        );
    }
  }

  openNewTopicModal(newTopicModal: any) {
    this.newTopic.name = "";
    this.modalService.open(newTopicModal, { centered: true, size: "md" });
  }

  addNewTopic(form?: any) {
    this.submitted = true;

    if (this.newTopic.name.trim() === "" || this.newTopic.name === undefined) {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "Please provide a valid topic name!"
      );
    }

    if (this.newTopic.name.length < 5) {
      this.submitted = false;
      return this.notifier.notify(
        "error",
        "Please provide a valid topic name not less than 3 characters!"
      );
    }

    this.newTopic.subjectId = this.subjectId;

    this.itemService.createNewTopic(this.newTopic).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "You have successfully added a new topic!",
          });
        }
        this.modalService.dismissAll();
        this.ngOnInit();
        this.submitted = false;
      },
      (error: HttpErrorResponse) => {
        //console.log(error);
        this.submitted = false;
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: `${error.error.message}`,
        });
      }
    );
  }

  pickPassage(id: string) {
    if (
      this.selectedPassageIds.length === this._currentBlock.totalQuestions &&
      this.selectedPassageIds.includes(id)
    ) {
      this.selectedPassageIds.splice(this.selectedPassageIds.indexOf(id), 1);
      this.sendSelectedPassages.emit(this.selectedPassageIds);
    } else {
      this.selectedPassageIds.push(id);
      if (
        this.selectedPassageIds.length === this._currentBlock.totalQuestions
      ) {
        this.passageSelectionComplete = true;
      }
      this.sendSelectedPassages.emit(this.selectedPassageIds);
    }
  }

  pageChange(event: any) {
    this.pageNo = event.page;
    this.pageSize = event.rows;
    this.itemService
      .fetchTopicPassages(
        this.assessmentActive ? this._subjectId : this.subjectId,
        this.selectedTopic.topicId
      )
      .subscribe((value) => {
        this.passages = value;
        // console.log(this.passages);
      });
  }

  viewPassageItems(passageId: string) {
    this.passageService.fetchPassageItems(passageId).subscribe(
      (value) => {
        if (value) {
          this.passageItems = value;
        }
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  gotoUsageHistory(passageId: string) {
    this.router.navigate([
      "/examalpha/passages/subjects/" +
        this.subjectId +
        "/passage/" +
        passageId +
        "/usage",
    ]);
  }

  openUsageHistoryModal(passageId: string, passageHistoryModal: any) {
    this.loading_usage_history = true;
    this.modalService.open(passageHistoryModal, { centered: true, size: "md" });
    this.passageService.getPassageUsageHistory(passageId).subscribe(
      (value) => {
        if (value) {
          this.passageUsageHistory = value;
          this.loading_usage_history = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.loading_usage_history = false;
        this.notifier.notify("error", error.error.message);
      }
    );
  }

  setItemTrail(topic: any) {
    this.passageService.topicId = topic.topicId;
    let itemTrail = {
      subjectName: this.subjectName,
      subjectId: this.subjectId,
      topicName: topic.topicName,
      topicId: topic.topicId,
    };
    this.itemUtil.currentItemTrail = itemTrail;
    this.itemUtil.saveCurrentItemTrail()
  }

  getPassages(topic?: any) {
    console.log("get opassages");
    this.showFilter = false;
    this.loading_passages = true;
    this.selectedTopicName = topic.topicName;

    let itemTrail = {
      subjectId: this.subjectId,
      topicId: topic.topicId,
      subtopicId: "",
      subjectName: this.subjectName,
      topicName: topic.topicName,
      subtopicName: "",
    };

    if (topic) {
      this.selectedTopic = topic;
    }
    console.log(this.subjectId);
    //console.log('selectedTopic', this.selectedTopic);

    if (this.assessmentActive) {
      // fetch assessment  passage
      this.getAssessmentPassages(topic);
    } else {
      this.itemService
        .fetchTopicPassages(
          this.assessmentActive ? this._subjectId : this.subjectId,
          topic.topicId,
          this.pageNo,
          this.pageSize
        )
        .subscribe((value) => {
          this.passages = value;
          //console.log(this.passages);
          this.loading_passages = false;
        });
    }
  }

  getAssessmentPassages(passageTopics?: any) {
    this.loading_passages = true;
    this.selectedTopicName = passageTopics.topicName;
    if (passageTopics) {
      this.selectedTopic = passageTopics;
    }
    this.assessmentService
      .fetchAssessmentPassages(
        this._subjectId,
        passageTopics.topicId,
        this._currentBlock.totalQuestionsInPassage,
        this.pageNo,
        this.pageSize
      )
      .subscribe(
        (value) => {
          this.passages = value;
          this.loading_passages = false;
        },
        (error: HttpErrorResponse) => {
          return this.notifier.notify("error", error.error.message);
        }
      );
  }

  openDeletePassageConfirmationModal(
    passage_id: string,
    deletePassageConfirmationModal: any
  ) {
    this.selectedPassageIdToDelete = passage_id;
    this.modalService.open(deletePassageConfirmationModal, {
      centered: true,
      size: "md",
    });
  }

  deletePassage() {
    this.processing_delete = !this.processing_delete;
    this.passageService.deletePassage(this.selectedPassageIdToDelete).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            title: "Congratulations",
            text: "The passage was deleted successfully.",
            icon: "success",
          });
        }
        this.modalService.dismissAll();
        this.processing_delete = !this.processing_delete;
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        this.notifier.notify("error", `${error.error.message}`);
        this.processing_delete = !this.processing_delete;
      }
    );
  }

  confirm() {
    Swal.fire({
      title: "You are about to delete a passage ?",
      text: "Deleting this passage will permanently remove it from our database.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f46a6a",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Invoice has been deleted.", "success");
      }
    });
  }

  recieveTag(event: any) {
    this.tagIds = event;
    // //console.log('newly filtered tag::::::', this.tagIds);
  }

  showFilterOptions() {
    this.showFilter = !this.showFilter;
  }

  filterPassage(passageFilterForm: any) {
    //this.showFilter = !this.showFilter;
    this.filterState = !this.filterState;
    this.loading_passages = true;
    //this.newPassageFilter.authorId = this.currentUser.id;
    if (this.newPassageFilter.score === undefined) {
      this.newPassageFilter.score = 10000000;
    }
    this.newPassageFilter.subjectId = this.subjectId;
    this.newPassageFilter.topicId = this.selectedTopic.topicId;
    this.tagIds.forEach((tag) => {
      this.newPassageFilter.tagIds.push(tag.tagId);
    });
    this.passageService.filterPassage(this.newPassageFilter).subscribe(
      (value) => {
        if (value) {
          //this.filteredPassageResult = value;
          this.filteredResult = value;
          //console.log('original passages after filter::::', this.passages);
          this.loading_passages = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.filterState = !this.filterState;
        this.notifier.notify("error", `${error.error.message}`);
        this.loading_passages = false;
      }
    );
  }

  clearFilter() {
    //this.showFilter = !this.showFilter;
    //this.loading_passages = true;
    this.filterState = false;
    this.filteredResult = new AllPassagesResponseModel();
    this.newPassageFilter = new PassageFilter();
    //console.log('original passages after clearing filter::::', this.passages);
    //this.getPassages(this.selectedTopic);
    //this.ngOnInit();
  }

  setSubjectId() {
    this.itemUtil.currentItemTrail.subjectId = this.subject.subjectId;
    this.router.navigate(["/itembank/items/subjects/new-item"]);
  }

  setTrailInfo(passageInfo: any) {
    this.passageService.topicName = this.selectedTopicName;
    this.passageService.currentPassageTrail = this.itemTrail;

    // console.log(this.passageService.topicName, this.passageService.currentPassageTrail)

    const trail = {
      subjectId: this.subjectId,
      topicId: this.selectedTopic.topicId,
      subjectName: this.subjectName,
      topicName: this.selectedTopic.topicName,
      assessmentActive: this.itemService.assessmentActive
    }

    this.itemUtil.currentItemTrail = trail;
    this.itemUtil.saveCurrentItemTrail(trail)
  }

  sendInformation(topic: any) {
    this.itemTrail = {
      subjectId: this.itemService.subjectId,
      subjectName: this.subjectName,
      topicId: topic.topicId,
      topicName: topic.topicName,
    };

    this.passageService.currentPassageTrail = this.itemTrail;

    this.router.navigate(["/itembank/items/new-item"]);
  }

  gotoNewPassage() {
    this.passageService.currentPassageTrail = {
      subjectId: this.subjectId,
      subjectName: this.subjectName,
      topicId: this.selectedTopic.topicId,
      topicName: this.selectedTopic.topicName,
    };
    this.router.navigate([
      "/examalpha/passages/subjects/" + this.subjectId + "/new-passage",
    ]);
  }

  editPassage(passage: any) {
    this.passageService.currentPassageTrail = {
      topicId: this.selectedTopic.topicId,
      subjectId: this.subjectId,
      subjectName: this.subjectName,
      topicName: this.selectedTopic.topicName,
    };

    this.router.navigate([
      "examalpha/passages/subjects/" +
        this.subjectId +
        "/passage/" +
        passage.id +
        "/edit-passage",
    ]);
  }

  fetchAllSubjectsNonAdmin() {
    this.itemService.fetchAllSubjectsNonAdmin().subscribe(
      (value) => {
        this.allSubjects = value;
        this.loadingAllSubjects = false;
        this.subjectName = value[0].name;

        this.subjectId =
          this.activatedRoute.snapshot.params["subjectId"] === "passages"
            ? value[0].subjectId
            : this.activatedRoute.snapshot.params["subjectId"];

        this.passageService.subjectId = this.subjectId;

        console.log("all sub", this.allSubjects);

        console.log(value[0].subjectId);

        this.fetchTopicTree(this.passageService.subjectId);

        // console.log(this.allSubjects);
      },
      (error: HttpErrorResponse) => {
        //console.log(error);
        this.loadingAllSubjects = false;
        this.notifier.notify("error", `${error.error.msg}`);
      }
    );
  }

  fetchAllSubjects() {
    this.itemService.fetchAllSubjectsItems().subscribe(
      (value) => {
        this.allSubjects = value;
        this.loadingAllSubjects = false;
        this.subjectName = value[0].name;

        this.subjectId =
          this.activatedRoute.snapshot.params["subjectId"] === "passages"
            ? value[0].subjectId
            : this.activatedRoute.snapshot.params["subjectId"];

        this.passageService.subjectId = this.subjectId;

        console.log("all sub", this.allSubjects);

        console.log(value[0].subjectId);

        this.fetchTopicTree(this.passageService.subjectId);

        // console.log(this.allSubjects);
      },
      (error: HttpErrorResponse) => {
        //console.log(error);
        this.loadingAllSubjects = false;
        this.notifier.notify("error", `${error.error.msg}`);
      }
    );
  }

  fetchTopicTree(subjectId: string) {
    if (this.currentUser.authorities.includes("ADMIN")) {
      this.itemService.fetchPassageTopicTreeAdmin(subjectId).subscribe(
        (value) => {
          console.log(value);
          value.forEach((topic) => {
            this.totalPassages += topic.totalPassages;
          });

          this.passageTopics = value;
          this.loading_topics_tree = false;
          this.loading_passages = false;

          if (this.passageTopics.length > 0) {
            this.selectedTopic = this.passageTopics[0];
            let itemTrail = {
              subjectId: this.subjectId,
              topicId: this.selectedTopic.topicId,
              subtopicId: "",
              subjectName: this.subjectName,
              topicName: this.selectedTopic.topicName,
              subtopicName: "",
            };
            this.getPassages(this.passageTopics[0]);
            this.selectedTopic = this.passageTopics[0];
            this.setItemTrail(this.passageTopics[0]);
          } else {
            this.loading_passages = false;
          }

          //console.log(this.passageTopics);
        },
        (error: HttpErrorResponse) => {
          this.loading_topics_tree = false;
        }
      );
    } else if (this.currentUser.authorities.includes("MODERATOR")) {
      this.itemService.fetchPassageTopicTreeModerator(subjectId).subscribe(
        (value) => {
          console.log(value);
          value.forEach((topic) => {
            this.totalPassages += topic.totalPassages;
          });

          this.passageTopics = value;
          this.loading_topics_tree = false;
          this.loading_passages = false;

          if (this.passageTopics.length > 0) {
            this.selectedTopic = this.passageTopics[0];
            let itemTrail = {
              subjectId: this.subjectId,
              topicId: this.selectedTopic.topicId,
              subtopicId: "",
              subjectName: this.subjectName,
              topicName: this.selectedTopic.topicName,
              subtopicName: "",
            };
            this.getPassages(this.passageTopics[0]);
            this.selectedTopic = this.passageTopics[0];
            this.setItemTrail(this.passageTopics[0]);
          } else {
            this.loading_passages = false;
          }

          //console.log(this.passageTopics);
        },
        (error: HttpErrorResponse) => {
          this.loading_topics_tree = false;
        }
      );
    } else if (this.currentUser.authorities.includes("AUTHOR")) {
      this.itemService.fetchPassageTopicTreeAuthor(subjectId).subscribe(
        (value) => {
          console.log(value);
          value.forEach((topic) => {
            this.totalPassages += topic.totalPassages;
          });

          this.passageTopics = value;
          this.loading_topics_tree = false;
          this.loading_passages = false;

          if (this.passageTopics.length > 0) {
            this.selectedTopic = this.passageTopics[0];
            let itemTrail = {
              subjectId: this.subjectId,
              topicId: this.selectedTopic.topicId,
              subtopicId: "",
              subjectName: this.subjectName,
              topicName: this.selectedTopic.topicName,
              subtopicName: "",
            };
            this.getPassages(this.passageTopics[0]);
            this.selectedTopic = this.passageTopics[0];
            this.setItemTrail(this.passageTopics[0]);
          } else {
            this.loading_passages = false;
          }

          //console.log(this.passageTopics);
        },
        (error: HttpErrorResponse) => {
          this.loading_topics_tree = false;
        }
      );
    }
  }
}
