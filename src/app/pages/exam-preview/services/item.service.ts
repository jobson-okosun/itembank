import { Injectable } from "@angular/core";
import { ItemType } from "src/app/shared/enum/itemTypes";

import { ICandidateItem, ICandidateLoginResponse } from "../models/candidate";
import { CandidateService } from "./candidate.service";
import { BlockType } from "src/app/shared/enum/blockTypes";

export interface ISectionProgress {
  sectionName: string;
  attemptedQuestions: Array<number>;
  revisitQuestionNumbers: Array<number>;
  unAttemptedQuestionNumbers: Array<number>;
  totalQuestions: number;
}
@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private candidateService: CandidateService) {}

  currentQuestionNumber: number = 0;
  attemptedQuestionNumbers: number[] = [];
  unAttemptedQuestionNumbers: number[] = [];
  revisitQuestionNumbers: number[] = [];
  currentCandidateData: ICandidateLoginResponse;
  // private items: ICandidateItem[] = [
  //   {
  //     id: "1",

  //     item_type: ItemType.RICH_ESSAY,
  //     stimulus: "write richly What do you understand by Devotion  ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //   },

  //   {
  //     id: "2",

  //     item_type: ItemType.SHORT_ESSAY,
  //     stimulus: "write shortly What do you understand by Devotion",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },
  //   {
  //     id: "3",

  //     item_type: ItemType.TRUE_FALSE,
  //     stimulus: "The capital of Nigeria is Lagos ?",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "TRUE", value: "1" },
  //       { label: "False", value: "2" },
  //     ],
  //     numerical: false,
  //     selectedResponse: "",
  //   },

  //   {
  //     id: "4",

  //     item_type: ItemType.TRUE_FALSE,
  //     stimulus: "The capital of Nigeria is Lagos Part2 ?",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "Correct", value: "1" },
  //       { label: "Wrong", value: "2" },
  //     ],
  //     numerical: false,
  //     selectedResponse: "",
  //   },
  //   {
  //     id: "5",

  //     item_type: ItemType.TRUE_FALSE,
  //     stimulus: "I dont expect u to work ?",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "TRUE", value: "1" },
  //       { label: "False", value: "2" },
  //     ],
  //     numerical: false,
  //     selectedResponse: "",
  //   },
  //   {
  //     id: "6",

  //     item_type: ItemType.TRUE_FALSE,
  //     stimulus: "I dont expect u too to work ?",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "Abi", value: "1" },
  //       { label: "Rara", value: "2" },
  //     ],
  //     numerical: false,
  //     selectedResponse: "",
  //   },

  //   {
  //     id: "7",

  //     item_type: ItemType.MCQ,
  //     stimulus: "The sum of 2 and 4 is  ?",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "4", value: "1" },
  //       { label: "5", value: "2" },
  //       { label: "6", value: "3" },
  //       { label: "7", value: "4" },
  //     ],
  //     numerical: false,
  //   },

  //   {
  //     id: "8",

  //     item_type: ItemType.MCQ,
  //     stimulus: "The Difference of 4 and 1 is  ?",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "3", value: "1" },
  //       { label: "1", value: "2" },
  //       { label: "0", value: "3" },
  //       { label: "9", value: "4" },
  //     ],
  //     numerical: false,
  //   },
  //   {
  //     id: "9",

  //     item_type: ItemType.MRQ,
  //     stimulus: "Which of the following are correct about Nigeria  ?",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "Flag has 3 colors", value: "1" },
  //       { label: "Has 37 states", value: "2" },
  //       { label: "Colonised by Ghana", value: "3" },
  //       { label: "Has military Govt", value: "4" },
  //     ],
  //     numerical: false,
  //   },
  //   {
  //     id: "10",

  //     item_type: ItemType.MRQ,
  //     stimulus: "Which of the following are correct about Abuja  ?",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "Has military Govt", value: "1" },
  //       { label: "Largest city in Nigeria", value: "2" },
  //       { label: "Colonised by Ghana", value: "3" },
  //       { label: "Is not the capital of Nigeria  ", value: "4" },
  //     ],
  //     numerical: false,
  //   },
  //   {
  //     id: "11",

  //     item_type: ItemType.CLOZE_TEXT,
  //     stimulus:
  //       "ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}} ade is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}}",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },
  //   {
  //     id: "12",

  //     item_type: ItemType.CLOZE_TEXT,
  //     stimulus:
  //       "tunde is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}}",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },

  //   {
  //     id: "13",

  //     item_type: ItemType.CLOZE_DROPDOWN,
  //     stimulus: "Nigeria is a {{response}} located in {{response}}",
  //     possible_responses: [
  //       { responses: ["country", "city"] },
  //       { responses: ["america", "Angola"] },
  //     ],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },
  //   {
  //     id: "14",

  //     item_type: ItemType.CLOZE_DROPDOWN,
  //     stimulus:
  //       "Togo is a {{response}} located in {{response}} it is known for {{response}} resources and {{response}}",
  //     possible_responses: [
  //       { responses: ["town", "country"] },
  //       { responses: ["america", "canada"] },
  //       { responses: ["mineral", "natural"] },
  //       { responses: ["Salvery", "Faaji"] },
  //     ],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },

  //   {
  //     id: "15",

  //     item_type: ItemType.CLOZE_TEXT,
  //     stimulus:
  //       "Bola is a {{response}} and he is from {{response}} he also likes {{response}}, he goes to {{response}} school, he is {{response}} and {{response}} and {{response}} however, whenever he is with is friend {{response}} he likes {{response}} and this makes him really {{response}}. The auto of this question is {{response}}",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },

  //   {
  //     id: "16",

  //     item_type: ItemType.SHORT_ESSAY,
  //     stimulus: "write shortly What do you understand by Devotion",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },

  //   {
  //     id: "17",

  //     item_type: ItemType.RICH_ESSAY,
  //     stimulus: "write richly What do you understand by Devotion  ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },
  //   {
  //     id: "18",

  //     item_type: ItemType.RICH_ESSAY,
  //     stimulus:
  //       "In not less than 100 words explain richly What do you understand by 'bu45bub45uber' In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber'In not less than 100 words explain richly What do you understand by 'bu45bub45uber' ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },

  //   {
  //     id: "19",

  //     item_type: ItemType.SHORT_ESSAY,
  //     stimulus: "Briefly tell me about yourself ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },
  //   {
  //     id: "20",

  //     item_type: ItemType.SHORT_ESSAY,
  //     stimulus: "Briefly tell me what you understand by programming ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [],
  //     numerical: false,
  //   },

  //   {
  //     id: "21",

  //     item_type: ItemType.MATCHING,
  //     stimulus: "Match the following ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "2001", value: "1" },
  //       { label: "2002", value: "2" },
  //       { label: "2003", value: "3" },
  //       { label: "2004", value: "4" },
  //       { label: "20012", value: "5" },
  //       { label: "20021", value: "6" },
  //       { label: "20013", value: "7" },
  //       { label: "2006", value: "8" },
  //       { label: "2000", value: "9" },
  //     ],

  //     numerical: false,
  //   },
  //   {
  //     id: "22",

  //     item_type: ItemType.MATCHING,
  //     stimulus: "Match the following ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "2001", value: "1" },
  //       { label: "2002", value: "2" },
  //       { label: "2003", value: "3" },
  //       { label: "2004", value: "4" },
  //       { label: "20012", value: "5" },
  //       { label: "20021", value: "6" },
  //       { label: "20013", value: "7" },
  //       { label: "2006", value: "8" },
  //       { label: "2000", value: "9" },
  //     ],

  //     numerical: false,
  //   },
  //   {
  //     id: "23",

  //     item_type: ItemType.ORDERING,
  //     stimulus: "Order the following items ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "2001", value: "1" },
  //       { label: "2002", value: "2" },
  //       { label: "2003", value: "3" },
  //       { label: "2004", value: "4" },
  //       { label: "20012", value: "5" },
  //       { label: "20021", value: "6" },
  //       { label: "20013", value: "7" },
  //       { label: "2006", value: "8" },
  //       { label: "2000", value: "9" },
  //     ],
  //     numerical: false,
  //   },

  //   {
  //     id: "24",

  //     item_type: ItemType.ORDERING,
  //     stimulus: "Order the following items part 2 ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "200", value: "1" },
  //       { label: "202", value: "2" },
  //       { label: "203", value: "3" },
  //       { label: "004", value: "4" },
  //       { label: "2012", value: "5" },
  //       { label: "2021", value: "6" },
  //       { label: "2013", value: "7" },
  //       { label: "206", value: "8" },
  //       { label: "200", value: "9" },
  //     ],
  //     numerical: false,
  //   },
  //   {
  //     id: "25",

  //     item_type: ItemType.ORDERING,
  //     stimulus: "Order the following items part 3 ",
  //     possible_responses: [],

  //     answers: [],
  //     options: [
  //       { label: "201", value: "1" },
  //       { label: "22", value: "2" },
  //       { label: "23", value: "3" },
  //       { label: "04", value: "4" },
  //       { label: "212", value: "5" },
  //       { label: "221", value: "6" },
  //       { label: "203", value: "7" },
  //       { label: "20", value: "8" },
  //       { label: "210", value: "9" },
  //     ],
  //     numerical: false,
  //   },
  // ];

  sectionProgress: ISectionProgress[] = [];
  currentSection: string = "";

  private items: ICandidateItem[] = [];

  getItems(): ICandidateItem[] {
    return this.items;
  }

  getCurrentQuestionNumber(): number {
    return this.currentQuestionNumber;
  }

  getCurrentQuestion(): ICandidateItem {
    // console.log(this.currentQuestionNumber);
    // console.log(this.items[this.currentQuestionNumber]);
    return this.items[this.currentQuestionNumber];
  }

  getNextQuestionItemType(): ItemType {
    console.log(this.currentQuestionNumber);
    return this.items[++this.currentQuestionNumber].item_type;
  }
  getPreviousQuestionItemType(): ItemType {
    return this.items[--this.currentQuestionNumber].item_type;
  }

  // nextQuestionNumber(): number {
  //   ++this.currentQuestionNumber; //
  //   return this.currentQuestionNumber;
  // }

  // previousQuestionNumber(): number {
  //   --this.currentQuestionNumber;
  //   return this.currentQuestionNumber;
  // }

  navigateTo(index: number): ICandidateItem {
    this.currentQuestionNumber = index;

    return this.items[this.currentQuestionNumber];
  }

  captureAttemptedQuestionNumber(): void {
    const currentQuestion = this.getCurrentQuestion();
    const currentSectionIndex = this.sectionProgress.findIndex(
      (section) => section.sectionName === this.currentSection
    );

    if (currentSectionIndex === -1) {
      console.log("Section not found!");
      return;
    }

    const currentSection = this.sectionProgress[currentSectionIndex];

    // Helper function to check for valid responses
    const hasValidResponses = (responses: any[]) =>
      responses.some((value) => value !== undefined && value.trim() !== "");

    const currentQuestionNumber = this.getCurrentQuestionNumber();

    // If the question has valid responses and is not already recorded as attempted
    if (
      hasValidResponses(currentQuestion.responses) &&
      !currentSection.attemptedQuestions.includes(currentQuestionNumber)
    ) {
      currentSection.attemptedQuestions.push(currentQuestionNumber);
      this.attemptedQuestionNumbers = currentSection.attemptedQuestions;

      console.log(this.attemptedQuestionNumbers);
      console.log(`${currentSectionIndex} found section`);
    }
  }

  removeAttemptedQuestionNumber(questionNumber: number): void {
    let indexOfQuestionNumber =
      this.attemptedQuestionNumbers.indexOf(questionNumber);
    if (indexOfQuestionNumber != -1) {
      this.attemptedQuestionNumbers.splice(indexOfQuestionNumber, 1);
    } else {
      console.log(
        "Question number Not Found on attempted question number list"
      );
    }
  }

  captureQuestionNumberForRevisit(questionNumber: number): number[] {
    const foundSectionIndex = this.sectionProgress.findIndex(
      (section) => section.sectionName === this.currentSection
    );
    if (
      !this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.includes(
        questionNumber
      )
    ) {
      // this.revisitQuestionNumbers.push(questionNumber);

      this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.push(
        questionNumber
      );
    }
    this.getCurrentQuestion().revisit = true;
    return this.sectionProgress[foundSectionIndex].revisitQuestionNumbers;
  }

  removeQuestionNumberFromRevisit(questionNumber: number): void {
    const foundSectionIndex = this.sectionProgress.findIndex(
      (section) => section.sectionName === this.currentSection
    );

    this.getCurrentQuestion().revisit = false;
    if (
      this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.includes(
        questionNumber
      )
    ) {
      this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.splice(
        questionNumber,
        1
      );
    }
  }

  getQuestionNumbersForRevisitInsection(sectionName: string): Array<number> {
    this.revisitQuestionNumbers = [];
    const foundSectionIndex = this.sectionProgress.findIndex(
      (section) => section.sectionName === sectionName
    );
    this.sectionProgress[foundSectionIndex].revisitQuestionNumbers = [];
    this.getItems().forEach((item, index) => {
      if (item.revisit == true) {
        this.revisitQuestionNumbers.push(index);

        this.sectionProgress[foundSectionIndex].revisitQuestionNumbers.push(
          index
        );
      }
    });
    return this.sectionProgress[foundSectionIndex].revisitQuestionNumbers;
  }

  getUnattemptedQuestionNumbersInSection(sectionName: string): number[] {
    this.unAttemptedQuestionNumbers = [];
    const foundSectionIndex = this.sectionProgress.findIndex(
      (section) =>
        section.sectionName.toLowerCase() === sectionName.toLowerCase()
    );

    this.getItems().forEach((item, index) => {
      let hasValidResponse = item.responses.some(
        (value) => value !== undefined && value.trim() !== ""
      );

      console.log(item, "unattempted");

      if (!hasValidResponse) {
        this.unAttemptedQuestionNumbers.push(index);
        console.log(this.unAttemptedQuestionNumbers, "unattt");

        this.sectionProgress[foundSectionIndex].unAttemptedQuestionNumbers.push(
          index
        );
      }
    });

    return this.unAttemptedQuestionNumbers;
  }

  getUnattemptedQuestionsInAllSections(): Array<ISectionProgress> {
    let unattemptedQuestions = [];

    this.candidateService.candidateData.sections_questions.forEach(
      (section) => {
        let unattemptedQuestionNumbers = [];
        let currentIndex = 1;

        section.question_blocks.forEach((block) => {
          block.items.forEach((item) => {
            let hasValidResponse = item.responses.some(
              (value) => value !== undefined && value.trim() !== ""
            );

            if (!hasValidResponse) {
              unattemptedQuestionNumbers.push(currentIndex);
            }
            currentIndex++;
          });
        });

        unattemptedQuestions.push({
          sectionName: section.name,
          unattemptedQuestion: unattemptedQuestionNumbers,
        });
      }
    );

    return unattemptedQuestions;
  }

  setSectionQuestion(sectionName: string) {
    console.log(sectionName, "Section name");
    this.items = [];
    this.currentSection = sectionName;
    const founditemsFromSection = this.candidateService
      .getCandidateData()
      .sections_questions.find((section) => sectionName === section.name);

    console.log(founditemsFromSection, "items from section");

    // todo: sort out passage questions
    founditemsFromSection.question_blocks.forEach((questionBlock) => {
      if (questionBlock.block_type === BlockType.SINGLE_QUESTIONS) {
        questionBlock.items.forEach((item) => {
          item.block_id = questionBlock.id;

          this.items.push(item);
        });
      } else if (questionBlock.block_type === BlockType.PASSAGES) {
        questionBlock.passages.forEach((passage) => {
          passage.items.forEach((item) => {
            this.items.push(item);
            item.block_id = questionBlock.id;
            item.passage_stimulus = passage.stimulus;

            // this.items.push(item);
          });
        });
      }

      // this.items.push(questionBlock.items);
    });

    console.log(
      this.candidateService.getCandidateData().sections_questions,
      "section questions"
    );
    // this.captureAttemptedQuestionNumber();

    console.log(this.sectionProgress);
    console.log(this.currentSection, "current section");

    const foundSectionIndex = this.sectionProgress.findIndex(
      (section) => section.sectionName === this.currentSection
    );

    this.items.forEach((item, index) => {
      let hasValidResponse =
        item.responses.length !== 0 &&
        !item.responses.includes(undefined) &&
        !item.responses.some((value) => value === "" || value.trim() === "");

      if (hasValidResponse) {
        if (
          !this.sectionProgress[foundSectionIndex].attemptedQuestions.includes(
            index
          )
        ) {
          this.sectionProgress[foundSectionIndex].attemptedQuestions.push(
            index
          );
        }

        console.log(index + "attempted");
      }
    });

    this.attemptedQuestionNumbers =
      this.sectionProgress[foundSectionIndex].attemptedQuestions;

    this.revisitQuestionNumbers =
      this.sectionProgress[foundSectionIndex].revisitQuestionNumbers;

    console.log(this.items);
  }

  displayAllSectionsAtOnce() {
    this.items = [];
    this.currentSection = "All";

    this.candidateService
      .getCandidateData()
      .sections_questions.forEach((sectionQuestion) => {
        sectionQuestion.question_blocks.forEach((questionBlock) => {
          questionBlock.items.forEach((item) => {
            this.items.push(item);
          });
        });
      });

    console.log(this.candidateService.getCandidateData().sections_questions);
    // this.captureAttemptedQuestionNumber();

    const foundSectionIndex = this.sectionProgress.findIndex(
      (section) => section.sectionName === this.currentSection
    );

    this.items.forEach((item, index) => {
      if (item.responses.length !== 0) {
        if (
          !this.sectionProgress[foundSectionIndex].attemptedQuestions.includes(
            index
          )
        ) {
          this.sectionProgress[foundSectionIndex].attemptedQuestions.push(
            index
          );
        }

        console.log(index + "attempted");
      }
    });

    // this.attemptedQuestionNumbers =
    //   this.sectionProgress[foundSectionIndex].attemptedQuestions;

    // this.revisitQuestionNumbers =
    //   this.sectionProgress[foundSectionIndex].revisitQuestionNumbers;
  }

  getAssessmentSections(): Array<{ name: string; id: string }> {
    const assessmentSections: Array<{ name: string; id: string }> = [];

    this.candidateService.candidateData.sections_questions.forEach(
      (section) => {
        assessmentSections.push({ name: section.name, id: section.id });
        this.sectionProgress.push({
          sectionName: section.name,
          attemptedQuestions: [],
          revisitQuestionNumbers: [],
          unAttemptedQuestionNumbers: [],
          totalQuestions: section.question_blocks.reduce(
            (total, block) => total + block.total_questions,
            0
          ),
        });
      }
    );
    console.log(this.sectionProgress + "section prog");
    return assessmentSections;
  }

  getSectionProgress(): ISectionProgress[] {
    return this.sectionProgress;
  }

  getSectionOverview(sectionName: string): {
    attempted: number[];
    revisit: number[];
    unAttempted: number[];
  } {
    let attempted: number[] = [];
    let revisit: number[] = [];
    let unAttempted: number[] = [];

    const foundSection = this.sectionProgress.find(
      (section) => section.sectionName === sectionName
    );

    if (foundSection) {
      attempted = foundSection.attemptedQuestions;
      revisit = foundSection.revisitQuestionNumbers;
      unAttempted = foundSection.unAttemptedQuestionNumbers;

      return { attempted, revisit, unAttempted };
    }

    return { attempted, revisit, unAttempted };
  }
}
