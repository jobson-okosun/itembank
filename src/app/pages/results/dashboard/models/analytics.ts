export interface ItemAnalysisResponse {
  data: ItemAnalysisData[];
  total: number;
  page: number;
  size: number;
}

export interface ItemAnalysisData {
  item_id: string;
  item_type: string;
  section_id: string;
  subject_id: string;
  topic_id: string;
  topic_name: string;
  subtopic_id: string;
  subtopic_name: string;
  max_score: number;
  total_responses: number;
  correct: number;
  incorrect: number;
  skipped: number;
  avg_score: number;
  lowest_score: number;
  highest_score: number;
  difficulty_index: number;
  discrimination_index: number;
  avg_time_ms: number;
  fastest_time_ms: number;
  median_time_ms: number;
  p95_time_ms: number;
  avg_attempt_count: number;
  avg_visit_count: number;
  revisit_rate: number;
  response_distribution: ResponseDistribution[];
  
  // Behavioural Metrics from ItemEventData [merge for the Item Analysis & Psychometrics modal]
  total_visits?: number;
  avg_duration_ms?: number;
  median_duration_ms?: number;
  p95_duration_ms?: number;
  min_duration_ms?: number;
  pct_answered_under_5s?: number;
  pct_flagged?: number;
  avg_answer_changes?: number;
  pct_calculator_used?: number;
}

export interface ResponseDistribution {
  position: number;
  option: string;
  count: number;
}

export interface BehaviourAnalysisCandidate {
  org_id: string;
  assessment_id: string;
  participant_id: string;
  center_id: string;
  total_exam_duration_ms: number;
  time_remaining_ms: number;
  total_idle_ms: number;
  longest_idle_ms: number;
  idle_percentage: number;
  section_times: { [key: string]: { duration_ms: number; pct_of_total: number } };
  fastest_section_id: string;
  fastest_section_ms: number;
  slowest_section_id: string;
  slowest_section_ms: number;
  total_revisits: number;
  skipped_question_count: number;
  skip_return_rate: number;
  navigation_entropy: number;
  nav_next_count: number;
  nav_previous_count: number;
  nav_palette_count: number;
  nav_keyboard_count: number;
  nav_overview_count: number;
  exam_strategy: string;
  total_answer_changes: number;
  total_answer_clears: number;
  last_minute_changes: number;
  questions_flagged: number;
  flagged_never_revisited: number;
  questions_under_5_sec: number;
  session_count: number;
  login_failures: number;
  pause_count: number;
  total_pause_ms: number;
  window_blur_count: number;
  window_blur_total_ms: number;
  copy_attempts: number;
  paste_attempts: number;
  print_attempts: number;
  screenshot_attempts: number;
  fullscreen_exit_count: number;
  fullscreen_outside_ms: number;
  network_offline_count: number;
  total_offline_ms: number;
  sync_failures: number;
  calculator_opens: number;
  calculator_total_ms: number;
  calculator_unique_questions: number;
  calculator_question_ids: string[];
  face_loss_count: number;
  face_loss_total_ms: number;
  multiple_faces_count: number;
  looking_away_count: number;
  phone_detected_count: number;
  book_detected_count: number;
  camera_blocked_ms: number;
  mic_blocked_count: number;
  chat_open_count: number;
  messages_sent: number;
  battery_low_count: number;
  min_battery_level: number | null;
  device_sleep_count: number;
  device_sleep_ms: number;
  application_crashes: number;
  integrity_score: number;
  confidence_score: number;
  hesitation_score: number;
  carefulness_score: number;
  rushing_score: number;
  guessing_probability: number;
}

export interface BehaviourAnalysisAssessment {
  total_candidates: number;
  avg_exam_duration_ms: number;
  avg_idle_percentage: number;
  avg_integrity_score: number;
  avg_confidence_score: number;
  avg_carefulness_score: number;
  avg_hesitation_score: number;
  avg_rushing_score: number;
  avg_guessing_probability: number;
  candidates_with_integrity_flags: number;
  avg_network_offline_count: number;
  avg_window_blur_count: number;
  avg_pause_count: number;
  integrity_score_distribution: IntegrityScoreBucket[];
  exam_strategy_breakdown: ExamStrategyCount[];
}

export interface IntegrityScoreBucket {
  bucket: string;
  count: number;
}

export interface ExamStrategyCount {
  strategy: string;
  count: number;
}

export interface IntegrityFlagsResponse {
  data: IntegrityFlagData[];
  total: number;
  page: number;
  size: number;
}

export interface IntegrityFlagData {
  participant_id: string;
  candidate_name?: string;
  login_field_value?: string;
  assessment_id: string;
  center_id: string;
  integrity_score: number;
  window_blur_count: number;
  copy_attempts: number;
  paste_attempts: number;
  screenshot_attempts: number;
  print_attempts: number;
  fullscreen_exit_count: number;
  phone_detected_count: number;
  book_detected_count: number;
  multiple_faces_count: number;
  face_loss_count: number;
  session_count: number;
}

export interface BehaviourEventsResponse {
  data: BehaviourEventData[];
  total: number;
  page: number;
  size: number;
}

export interface BehaviourEventData {
  id: number;
  event_id: string;
  session_id: string;
  sequence: number;
  event_type: string;
  elapsed_ms: number;
  section_id: string | null;
  item_id: string | null;
  answer: any | null;
  old_answer: any | null;
  navigation_method: string | null;
  duration_ms: number | null;
  battery_level: number | null;
}

export interface ItemEventsResponse {
  data: ItemEventData[];
  total: number;
  page: number;
  size: number;
}

export interface ItemEventData {
  item_id: string;
  section_id: string;
  total_visits: number;
  avg_duration_ms: number;
  median_duration_ms: number;
  p95_duration_ms: number;
  min_duration_ms: number;
  pct_answered_under_5s: number;
  pct_flagged: number;
  avg_answer_changes: number;
  pct_calculator_used: number;
}
