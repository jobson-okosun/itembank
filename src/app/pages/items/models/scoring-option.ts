export class ScoringOption {
  score: number = 1;
  penalty: number = 0;
  minimumScoreIfAttempted: number = 0;
  answers: string[] = [];
  scoringType: string = 'EXACT_MATCH';
  autoScore: boolean = false;
  matchingRule: string = 'CONTAINS';
  caseSensitive: boolean = false;
  ignoreLeadingAndTrailingSpaces: boolean = false;
}
