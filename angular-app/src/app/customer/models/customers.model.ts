export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  points: number;
  cash: number;
  rewards: Reward[];
}

export interface Reward {
  customerRewardEnum: string;
  cashValue: number;
  points: number;
  programName: string;
}
