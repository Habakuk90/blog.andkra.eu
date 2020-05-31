export interface IBaseResponse {
  id: number;
  updated_at: string;
  created_at: string;
}

export interface IImage {
  created_at?: string;
  ext?: string;
  hash?: string;
  id?: number;
  mime?: string;
  name?: string;
  url: string;
}

export interface ILink {
  id: number;
  name: string;
  url: string;
  icon_class: string;
}
