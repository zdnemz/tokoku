import { responseStatus } from '@/utils/response';

export interface Response {
  success: boolean;
  status: keyof typeof responseStatus;
  message: string;
  data?: unknown | object | null;
}
