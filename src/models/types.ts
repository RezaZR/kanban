export interface Stage {
  count: number;
  next: number;
  previous: number;
  page_size: number;
  results: StageResult[];
}

export interface StageResult {
  id: string;
  name: string;
  header_color: string;
  description: string;
  pipeline: string;
  order: number;
  created_at: string;
}

export interface Contact {
  count: number;
  next: number;
  previous: number;
  page_size: number;
  results: ContactResult[];
}

export interface ContactResult {
  id: string;
  full_name: string;
  first_name: string;
  last_name: string;
  email: string;
  nationality_code: string;
  country_code: string;
  phone_number: string;
  status: string;
  lost_reason: string;
  lost_reason_comments: string;
  held_by: string;
  hold_expired_at: string;
  stage: string;
  assigned_to: string;
  source: string;
  created_at: string;
}

export interface AllContact {
  [key: string]: ContactResult[];
}
