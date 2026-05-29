export class IndividualItem {
  reference: string;
  id: string;
  itemPassage: string;
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
  options: [
    {
      label: string;
      value: string;
    }
  ];
  stems: string[];
  possibleResponses: [
    {
      responses: string[];
    }
  ];
  images: [
    {
      url: string;
      height: 5;
      width: 5;
    }
  ];
  responsePositions: [
    {
      x: number;
      y: number;
    }
  ];
  type: string;
  itemStatus: string;
  itemTagDTOs: [
    {
      tagName: string;
      tagId: string;
    }
  ];
  numerical: boolean;
  difficultyLevel: number;
  shuffleOptions: boolean;
  multipleResponse: boolean;
  maxWords: number;
  maxLength: number;
  allowPaste: boolean;
  allowCopy: boolean;
  allowCut: boolean;
  plainText: boolean;
}
