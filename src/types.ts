export type CreateNewNaver = {
  name: string;
  url: string;
  birthdate: string;
  job_role: string;
  admission_date: string;
  project: string;
};

export type Naver = {
  id: string;
  user_id: string;
  name: string;
  url: string;
  hasAvatar: boolean;
  birthdate: string;
  job_role: string;
  admission_date: string;
  project: string;
};

export type NaverDetail = {
  id: string;
  user_id: string;
  name: string;
  url: string;
  birthdate: string;
  hasAvatar: boolean;
  job_role: string;
  admission_date: string;
  project: string;
};

export type NaverUpdate = {
  id: string;
  name: string;
  url: string;
  birthdate: string;
  job_role: string;
  admission_date: string;
  project: string;
};
