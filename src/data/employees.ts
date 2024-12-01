export interface Employee {
  id: string;
  name: string;
  role: string;
  startDate: string;
  endDate?: string;
  active: boolean;
  dwc?: boolean;
  isOwner?: boolean;
}

export const employees: Employee[] = [
  {
    id: "997041375700844594",
    name: "Ben",
    role: "Owner",
    startDate: "2023-01-01",
    active: true,
    isOwner: true
  },
  {
    id: "268030312670298112",
    name: "Brad",
    role: "Senior Developer",
    startDate: "2024-11-30",
    endDate: "2024-12-01",
    active: true,
    dwc: true
  },
  {
    id: "268866065092706304",
    name: "Zack",
    role: "Developer",
    startDate: "2024-11-30",
    endDate: "2024-12-01",
    active: true,
    dwc: false
  }
];
