import { ItemType } from 'src/app/shared/enum/itemTypes';
import { IOptionDTO, IPossibleResponse, IResponsePosition } from './candidate';

export class ExamPreviewData {
  id: string;
  orgId: string;
  createdAt: string;
  name: string;
  assessmentSettings: {
    startExamInstruction: string;
    endExamInstruction: string;
    startDate: string;
    endDate: string;
    durationMinutes: number;
    displayAllSectionsAtOnce: boolean;
    instructionReadTimeSec: number;
    warnEndOfReadingTimeSec: number;
    autoSaveSec: number;
    inactivityWaringSec: number;
    warnUnattemptedQuestions: boolean;
    endExamConfirmation: boolean;
    allowEndExamAfterXQuestions: number;
    preserveSectionOrder: boolean;
    fontSize: string;
    compensatoryTimeMins: number;
    instantResult: boolean;
    passMark: number;
    description: string;
    deliveryMethod: string;
  };
  assessmentSections: Array<{
    sectionSettings: {
      durationInMinutes: number;
      shuffleItems: boolean;
      shuffleOptions: boolean;
      allowCalculator: boolean;
      shuffleBlocks: boolean;
      preventNavigationToAttemptedItems: boolean;
      sectionInstruction: string;
    };
    blocks: Array<{
      id: number;
      totalQuestions: number;
      totalQuestionsPerStudent: number;
      blockName: string;
      index: number;
      blockType: string;
      items: questionItem[];
      passages: Array<{
        id: string;
        stimulus: string;
        reference: string;
        items: Array<{
          id: string;
          authorId: string;
          authorName: string;
          passageId: string;
          passageStimulus: string;
          stimulus: string;
          scoringOption: {
            score: number;
            penalty: number;
            minimumScoreIfAttempted: number;
            answers: string[];
            scoringType: string;
            autoScore: boolean;
            matchingRule: string;
            caseSensitive: boolean;
            ignoreLeadingAndTrailingSpaces: boolean;
          };
          options: Array<{
            label: string;
            value: string;
          }>;
          stems: string[];
          possibleResponses: Array<{
            responses: string[];
          }>;
          images: Array<{
            url: string;
            height: number;
            width: number;
          }>;
          tags: Array<{
            tagId: string;
            tagName: string;
          }>;
          responsePositions: Array<{
            x: number;
            y: number;
          }>;
          itemType: string;
          numerical: boolean;
          caseSensitive: boolean;
          subjectId: string;
          topicId: string;
          subtopicId: string;
          topicName: string;
          subtopicName: string;
          difficultyLevel: number;
          shuffleOptions: boolean;
          multipleResponse: boolean;
          maxWords: number;
          maxLength: number;
          allowPaste: boolean;
          allowCopy: boolean;
          allowCut: boolean;
          plainText: boolean;
          reference: string;
        }>;
        topicName: string;
        topicId: string;
      }>;
    }>;
    name: string;
    subjectId: string;
    subjectName: string;
    id: string;
    schId: string;
    totalQuestions: number;
    totalQuestionsPerCandidate: number;
  }>;
}

export class questionItem {
  id: string;
  authorId: string;
  authorName: string;
  passageId: string;
  passageStimulus: string;
  stimulus: string;
  scoringOption: {
    score: number;
    penalty: number;
    minimumScoreIfAttempted: number;
    answers: string[];
    scoringType: string;
    autoScore: boolean;
    matchingRule: string;
    caseSensitive: boolean;
    ignoreLeadingAndTrailingSpaces: boolean;
  };
  options: Array<IOptionDTO>;
  stems: Array<string>;
  possibleResponses: Array<IPossibleResponse>;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  tags: Array<{
    tagId: string;
    tagName: string;
  }>;
  responsePositions: Array<IResponsePosition>;
  itemType: ItemType;
  numerical: boolean;
  caseSensitive: boolean;
  subjectId: string;
  topicId: string;
  subtopicId: string;
  topicName: string;
  subtopicName: string;
  difficultyLevel: number;
  shuffleOptions: boolean;
  multipleResponse: boolean;
  maxWords: number;
  maxLength: number;
  allowPaste: boolean;
  allowCopy: boolean;
  allowCut: boolean;
  plainText: boolean;
  reference: string;
  pass_fail_status?: string;

  // Add new model properties
}

export class SectionPreviewData {
  blocks: Array<{
    id: number;
    totalQuestions: number;
    totalQuestionsPerStudent: number;
    blockName: string;
    index: number;
    blockType: string;
    items: Array<{
      id: string;
      authorId: string;
      authorName: string;
      passageId: string;
      passageStimulus: string;
      stimulus: string;
      scoringOption: {
        score: number;
        penalty: number;
        minimumScoreIfAttempted: number;
        answers: string[];
        scoringType: string;
        autoScore: boolean;
        matchingRule: string;
        caseSensitive: boolean;
        ignoreLeadingAndTrailingSpaces: boolean;
      };
      options: Array<IOptionDTO>;
      stems: Array<string>;
      possibleResponses: Array<IPossibleResponse>;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      tags: Array<{
        tagId: string;
        tagName: string;
      }>;
      responsePositions: Array<IResponsePosition>;
      itemType: ItemType;
      numerical: boolean;
      caseSensitive: boolean;
      subjectId: string;
      topicId: string;
      subtopicId: string;
      topicName: string;
      subtopicName: string;
      difficultyLevel: number;
      shuffleOptions: boolean;
      multipleResponse: boolean;
      maxWords: number;
      maxLength: number;
      allowPaste: boolean;
      allowCopy: boolean;
      allowCut: boolean;
      plainText: boolean;
      reference: string;
    }>;
    passages: Array<{
      id: string;
      stimulus: string;
      reference: string;
      items: Array<{
        id: string;
        authorId: string;
        authorName: string;
        passageId: string;
        passageStimulus: string;
        stimulus: string;
        scoringOption: {
          score: number;
          penalty: number;
          minimumScoreIfAttempted: number;
          answers: string[];
          scoringType: string;
          autoScore: boolean;
          matchingRule: string;
          caseSensitive: boolean;
          ignoreLeadingAndTrailingSpaces: boolean;
        };
        options: Array<{
          label: string;
          value: string;
        }>;
        stems: string[];
        possibleResponses: Array<{
          responses: string[];
        }>;
        images: Array<{
          url: string;
          height: number;
          width: number;
        }>;
        tags: Array<{
          tagId: string;
          tagName: string;
        }>;
        responsePositions: Array<{
          x: number;
          y: number;
        }>;
        itemType: string;
        numerical: boolean;
        caseSensitive: boolean;
        subjectId: string;
        topicId: string;
        subtopicId: string;
        topicName: string;
        subtopicName: string;
        difficultyLevel: number;
        shuffleOptions: boolean;
        multipleResponse: boolean;
        maxWords: number;
        maxLength: number;
        allowPaste: boolean;
        allowCopy: boolean;
        allowCut: boolean;
        plainText: boolean;
        reference: string;
      }>;
      topicName: string;
      topicId: string;
    }>;
  }>;
  id: string;
  name: string;
  schId: string;
  sectionSettings: {
    durationInMinutes: number;
    shuffleItems: boolean;
    shuffleOptions: boolean;
    allowCalculator: boolean;
    shuffleBlocks: boolean;
    preventNavigationToAttemptedItems: boolean;
    sectionInstruction: string;
  };
  subjectId: string;
  subjectName: string;
  totalQuestions: number;
  totalQuestionsPerCandidate: number;
}
