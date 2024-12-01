import React from 'react';
import { Employee } from '../../../data/employees';

interface EmployeeDetailsProps {
  employee: Employee;
}

export const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ employee }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <span className="text-sm text-neutral-400">Discord ID</span>
        <p className="font-mono text-white bg-neutral-900/50 px-3 py-1.5 rounded-md text-sm">
          {employee.id}
        </p>
      </div>
      <div className="space-y-1">
        <span className="text-sm text-neutral-400">
          {employee.active ? 'Started' : 'Employment Period'}
        </span>
        <p className="text-white bg-neutral-900/50 px-3 py-1.5 rounded-md text-sm">
          {formatDate(employee.startDate)}
          {employee.endDate && (
            <span className="text-neutral-400"> → {formatDate(employee.endDate)}</span>
          )}
        </p>
      </div>
    </div>
  );
};
