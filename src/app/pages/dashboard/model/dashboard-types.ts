import { ApexChart, ApexDataLabels, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive } from "ng-apexcharts";

export interface ExamDayDTO {
  id: string;
  exam_name: string;
  delivery_method: string;
  total_centers: number;
  total_participants: number;
  total_participants_present: number;
  total_participants_absent: number;
  total_participants_online: number;
  total_centers_downloaded_exam: number;
  total_centers_uploaded_exam: number;
  total_centers_downloaded_passport: number;
}

export interface ExamsForTheDayResponse {
  content: ExamDayDTO[];
  total: number;
  page: number;
  size: number;
  total_candidates_scheduled: number;
  total_candidates_present: number;
  total_candidates_absent: number;
  total_candidates_online: number;
  day_total_centers: number;
  day_total_centers_downloaded: number;
  day_total_centers_uploaded: number;
  day_total_centers_downloaded_passport: number;
}

export interface UpcomingExamDTO {
  id: string;
  exam_name: string;
  delivery_method: string;
  exam_status: string;
  exam_start_date: string;
  exam_end_date: string;
  total_centers: number;
  total_participants: number;
  total_proctors: number;
}

export interface UpcomingExamsResponse {
  content: UpcomingExamDTO[];
  total: number;
  page: number;
  size: number;
}

export type AIInfractionChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;  
  plotOptions: ApexPlotOptions;
};

export interface AIInfractionSummaryDTO {
  infraction_type: string;
  total_candidates: number;
  total_candidates_with_max_strikes_reached: number;
}

export interface ExamCalendarDTO {
  id: string;
  exam_name: string;
  status: string;
  delivery_method: string;
  start_date: string;
  end_date: string;
  total_batches: number;
  total_centers: number;
  total_candidates: number;
  total_candidates_present: number;
  total_candidates_absent: number;
  total_proctors: number;
  total_center_admins: number;
  total_centers_downloaded: number;
  total_centers_uploaded: number;
  total_centers_downloaded_passport: number;
  total_centers_with_technical_issues: number;
  total_candidates_with_infractions: number;
}

export interface ProctorWeeklyCalendarDTO {
  id: string;
  exam_name: string;
  status: string;
  delivery_method: string;
  total_participants: number;
  proctor_full_name: string;
  proctor_username: string;
  batch_name: string;
  batch_start_time: string;
  batch_end_time: string;
  total_participants_assigned: number;
}
