import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  ItemAnalysisResponse,
  BehaviourAnalysisCandidate,
  BehaviourAnalysisAssessment,
  IntegrityFlagsResponse,
  BehaviourEventsResponse,
  ItemEventsResponse
} from '../models/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsMockService {
  constructor() {}

  // 1. Item analysis
  getItemAnalysis(assessmentId: string | undefined, page = 1, size = 50, subjectId?: string, examGroupId?: string, sectionId?: string): Observable<ItemAnalysisResponse> {
    return of({
      data: Array.from({ length: 15 }).map((_, i) => ({
        item_id: `item-${i}`,
        item_type: 'MCQ',
        section_id: 'sec-1',
        subject_id: 'sub-1',
        topic_id: 'top-1',
        topic_name: 'Algebra',
        subtopic_id: 'subtop-1',
        subtopic_name: 'Quadratic Equations',
        max_score: 2,
        total_responses: 248,
        correct: Math.floor(Math.random() * 200),
        incorrect: Math.floor(Math.random() * 40),
        skipped: Math.floor(Math.random() * 10),
        avg_score: parseFloat((Math.random() * 2).toFixed(2)),
        lowest_score: 0.0,
        highest_score: 2.0,
        difficulty_index: parseFloat((Math.random() * 100).toFixed(2)),
        discrimination_index: parseFloat((Math.random() * 60 - 10).toFixed(2)), // -10 to +50
        avg_time_ms: 38200,
        fastest_time_ms: 1800,
        median_time_ms: 32000,
        p95_time_ms: 95000,
        avg_attempt_count: 1.12,
        avg_visit_count: 1.24,
        revisit_rate: 18.55,
        response_distribution: [
          { position: 1, option: 'B', count: 186 },
          { position: 2, option: 'A', count: 38 },
          { position: 3, option: 'C', count: 14 }
        ]
      })),
      total: 60,
      page,
      size
    }).pipe(delay(500));
  }

  // 2. Candidate behaviour profile
  getCandidateBehaviourProfile(assessmentId: string, participantId: string): Observable<BehaviourAnalysisCandidate> {
    return of({
      org_id: 'org-1',
      assessment_id: assessmentId,
      participant_id: participantId,
      center_id: 'center-1',
      total_exam_duration_ms: 7200000,
      time_remaining_ms: 300000,
      total_idle_ms: 120000,
      longest_idle_ms: 60000,
      idle_percentage: 1.67,
      section_times: { "sec-1": { duration_ms: 3600000, pct_of_total: 50.0 } },
      fastest_section_id: 'sec-1',
      fastest_section_ms: 1800000,
      slowest_section_id: 'sec-2',
      slowest_section_ms: 3600000,
      total_revisits: 12,
      skipped_question_count: 3,
      skip_return_rate: 66.67,
      navigation_entropy: 1.82,
      nav_next_count: 45,
      nav_previous_count: 10,
      nav_palette_count: 5,
      nav_keyboard_count: 2,
      nav_overview_count: 1,
      exam_strategy: 'REVIEW_HEAVY',
      total_answer_changes: 6,
      total_answer_clears: 2,
      last_minute_changes: 1,
      questions_flagged: 4,
      flagged_never_revisited: 1,
      questions_under_5_sec: 8,
      session_count: 1,
      login_failures: 0,
      pause_count: 0,
      total_pause_ms: 0,
      window_blur_count: 2,
      window_blur_total_ms: 15000,
      copy_attempts: 0,
      paste_attempts: 0,
      print_attempts: 0,
      screenshot_attempts: 0,
      fullscreen_exit_count: 1,
      fullscreen_outside_ms: 5000,
      network_offline_count: 0,
      total_offline_ms: 0,
      sync_failures: 0,
      calculator_opens: 3,
      calculator_total_ms: 90000,
      calculator_unique_questions: 2,
      calculator_question_ids: ["item-1", "item-2"],
      face_loss_count: 0,
      face_loss_total_ms: 0,
      multiple_faces_count: 0,
      looking_away_count: 0,
      phone_detected_count: 0,
      book_detected_count: 0,
      camera_blocked_ms: 0,
      mic_blocked_count: 0,
      chat_open_count: 0,
      messages_sent: 0,
      battery_low_count: 0,
      min_battery_level: null,
      device_sleep_count: 0,
      device_sleep_ms: 0,
      application_crashes: 0,
      integrity_score: 7.0,
      confidence_score: 82.0,
      hesitation_score: 34.0,
      carefulness_score: 80.0,
      rushing_score: 20.0,
      guessing_probability: 16.0
    }).pipe(delay(500));
  }

  // 3. Assessment cohort behaviour summary
  getAssessmentCohortBehaviour(assessmentId: string | undefined, examGroupId?: string): Observable<BehaviourAnalysisAssessment> {
    return of({
      total_candidates: 250,
      avg_exam_duration_ms: 6840000.0,
      avg_idle_percentage: 2.3,
      avg_integrity_score: 4.5,
      avg_confidence_score: 78.2,
      avg_carefulness_score: 82.5,
      avg_hesitation_score: 22.1,
      avg_rushing_score: 15.6,
      avg_guessing_probability: 12.4,
      candidates_with_integrity_flags: 18,
      avg_network_offline_count: 0.4,
      avg_window_blur_count: 1.1,
      avg_pause_count: 0.2,
      integrity_score_distribution: [
        { bucket: "0", count: 190 },
        { bucket: "1-20", count: 42 },
        { bucket: "21-40", count: 12 },
        { bucket: "41-60", count: 4 },
        { bucket: "61-80", count: 2 },
        { bucket: "81-100", count: 0 }
      ],
      exam_strategy_breakdown: [
        { strategy: "SEQUENTIAL", count: 120 },
        { strategy: "REVIEW_HEAVY", count: 65 },
        { strategy: "ONE_PASS", count: 40 },
        { strategy: "SKIP_AND_RETURN", count: 25 }
      ]
    }).pipe(delay(500));
  }

  // 4. Integrity flags
  getIntegrityFlags(assessmentId: string | undefined, page = 1, size = 50, centerId?: string, minIntegrityScore?: number, examGroupId?: string): Observable<IntegrityFlagsResponse> {
    return of({
      data: Array.from({ length: 10 }).map((_, i) => ({
        participant_id: `part-${i}`,
        candidate_name: `Candidate ${i + 1}`,
        login_field_value: `1000${i}`,
        assessment_id: assessmentId,
        center_id: 'center-1',
        integrity_score: 85.0 - (i * 5), // Descending scores
        window_blur_count: Math.floor(Math.random() * 5),
        copy_attempts: Math.floor(Math.random() * 3),
        paste_attempts: Math.floor(Math.random() * 2),
        screenshot_attempts: 0,
        print_attempts: 0,
        fullscreen_exit_count: Math.floor(Math.random() * 4),
        phone_detected_count: 0,
        book_detected_count: 0,
        multiple_faces_count: 0,
        face_loss_count: Math.floor(Math.random() * 3),
        session_count: 2
      })),
      total: 18,
      page,
      size
    }).pipe(delay(500));
  }

  // 5. Candidate event timeline
  getCandidateEvents(assessmentId: string, participantId: string, page = 1, size = 100, eventType?: string): Observable<BehaviourEventsResponse> {
    let mockData = [
        {
          id: 1234,
          event_id: "evt-1",
          session_id: "session-abc",
          sequence: 1,
          event_type: "EXAM_STARTED",
          elapsed_ms: 0,
          section_id: null,
          item_id: null,
          answer: null,
          old_answer: null,
          navigation_method: null,
          duration_ms: null,
          battery_level: 87
        },
        {
          id: 1235,
          event_id: "evt-2",
          session_id: "session-abc",
          sequence: 2,
          event_type: "QUESTION_ENTERED",
          elapsed_ms: 1500,
          section_id: "sec-1",
          item_id: "item-1",
          answer: null,
          old_answer: null,
          navigation_method: "Next",
          duration_ms: null,
          battery_level: null
        },
        {
          id: 1236,
          event_id: "evt-3",
          session_id: "session-abc",
          sequence: 3,
          event_type: "WINDOW_BLURRED",
          elapsed_ms: 15000,
          section_id: "sec-1",
          item_id: "item-1",
          answer: null,
          old_answer: null,
          navigation_method: null,
          duration_ms: null,
          battery_level: null
        },
        {
          id: 1237,
          event_id: "evt-4",
          session_id: "session-abc",
          sequence: 4,
          event_type: "ANSWER_SELECTED",
          elapsed_ms: 45000,
          section_id: "sec-1",
          item_id: "item-1",
          answer: "B",
          old_answer: null,
          navigation_method: null,
          duration_ms: 43500,
          battery_level: null
        }
      ];

      if (eventType) {
        mockData = mockData.filter(e => e.event_type === eventType);
      }

      return of({
        data: mockData,
        total: mockData.length,
        page,
        size
      }).pipe(delay(500));
  }

  // 6. Item events analysis
  getItemEvents(assessmentId: string | undefined, page = 1, size = 50, sectionId?: string, examGroupId?: string): Observable<ItemEventsResponse> {
    return of({
      data: Array.from({ length: 15 }).map((_, i) => ({
        item_id: `item-${i}`,
        section_id: 'sec-1',
        total_visits: 248,
        avg_duration_ms: 38200.5,
        median_duration_ms: 32000.0,
        p95_duration_ms: 95000.0,
        min_duration_ms: 1200,
        pct_answered_under_5s: 3.2,
        pct_flagged: 12.5,
        avg_answer_changes: 0.18,
        pct_calculator_used: 0.0
      })),
      total: 60,
      page,
      size
    }).pipe(delay(500));
  }
}
