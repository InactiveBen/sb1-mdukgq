import React from 'react';
import { EmployeeHeader } from './employee/EmployeeHeader';
import { EmployeeDetails } from './employee/EmployeeDetails';
import { EmployeeNotices } from './employee/EmployeeNotices';
import { Employee } from '../../data/employees';

interface EmployeeCardProps {
  employee: Employee;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const getBorderColor = () => {
    if (employee.active) return 'border-green-500/20';
    if (employee.dwc) return 'border-red-500/20';
    return 'border-yellow-500/20';
  };

  const getGradientColor = () => {
    if (employee.active) return 'from-green-500/20 to-green-500/5';
    if (employee.dwc) return 'from-red-500/20 to-red-500/5';
    return 'from-yellow-500/20 to-yellow-500/5';
  };

  return (
    <div className={`bg-neutral-800/30 rounded-lg border ${getBorderColor()}`}>
      <div className={`p-6 bg-gradient-to-br ${getGradientColor()}`}>
        <EmployeeHeader employee={employee} />
      </div>

      <div className="p-6 space-y-4">
        <EmployeeDetails employee={employee} />
        <EmployeeNotices employee={employee} />
      </div>
    </div>
  );
};
