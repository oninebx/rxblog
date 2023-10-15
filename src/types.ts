export interface BlogItemProps {
  title: string;
  number: number;
  category: string;
}

export interface Label {
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  number: number;
  created_at: string;
  labels: Label[];
}

export interface Post {
  title: string;
  body_html: string;
}

export interface Touchable {
  touch: boolean;
}

export interface TitlePage {
  title: string;
}