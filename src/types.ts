export interface BlogBriefProps {
  title: string;
  number: number;
}

export interface Blog {
  id: string;
  title: string;
  number: number;
  created_at: string;
}

export interface Post {
  title: string;
  body_html: string;
}

export interface Touchable {
  touch: boolean;
}