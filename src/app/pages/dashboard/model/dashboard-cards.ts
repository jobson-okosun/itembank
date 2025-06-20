import { AssessmentCards } from './assessment-cards';
import { DashboardGraph } from './dashboard-graph';
import { DashboardSubjects } from './dashboard-subjects';
import { PassageGraph } from './passage-graph';
import { QuestionModerationCards } from './question-moderation-cards';
import { TagsGraph } from './tags-graph';
import { UserCards } from './user-cards';

export class DashboardCards {
  totalSubjects: number;
  totalPassages: number;
  questionsModerationCard: QuestionModerationCards;
  assessmentCard: AssessmentCards;
  usersCard: UserCards;
  questionModerationGraph: DashboardGraph;
  passageDashboardProj: PassageGraph;
  subjects: DashboardSubjects[] = [];
  tagGraphProj: TagsGraph[] = [];
}
