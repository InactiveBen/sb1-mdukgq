import React from 'react';
import { BadgeCheck, XCircle, Clock } from 'lucide-react';
import { Employee } from '../../../data/employees';

interface EmployeeStatusProps {
  employee: Employee;
}

export const EmployeeStatus: React.FC<EmployeeStatusProps> = ({ employee }) => {
  if (employee.active) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-medium">
        <BadgeCheck className="w-4 h-4" />
        Active
      </span>
    );
  }

  if (employee.dwc) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-sm font-medium">
        <XCircle className="w-4 h-4" />
        DWC
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-sm font-medium">
      <Clock className="w-4 h-4" />
      Former
    </span>
  );
};
