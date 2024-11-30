export enum MessageType {
  User = 'user',
  Agent = 'agent'
}

export interface Message {
  type: MessageType;
  content: string;
  options?: SupportOption[];
  isResponse?: boolean;
}

export interface SupportOption {
  id: string;
  icon: any;
  title: string;
  description: string;
  subOptions?: SupportOption[];
  response?: {
    title: string;
    content: string[];
  };
}
