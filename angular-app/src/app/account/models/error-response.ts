export interface ErrorResponse {
  type: string;
  title: string;
  status: number;
  traceId: string;
  errors: object;
}

interface Dictionary {
  [index: string]: string;
}
