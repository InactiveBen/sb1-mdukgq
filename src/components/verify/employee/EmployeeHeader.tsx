import React from 'react';
import { Crown, Shield, User } from 'lucide-react';
import { Employee } from '../../../data/employees';
import { EmployeeStatus } from './EmployeeStatus';

interface EmployeeHeaderProps {
  employee: Employee;
}

export const EmployeeHeader: React.FC<EmployeeHeaderProps> = ({ employee }) => {
  const getIcon = () => {
    if (employee.isOwner) return <Crown className="w-6 h-6 text-red-500" />;
    if (employee.active) return <Shield className="w-6 h-6 text-green-500" />;
    return <User className="w-6 h-6 text-neutral-500" />;
  };

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-neutral-900/50 flex items-center justify-center">
          {getIcon()}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white">{employee.name}</h3>
            {employee.isOwner && (
              <span className="px-2 py-0.5 text-xs font-medium bg-red-500/20 text-red-500 rounded-full border border-red-500/20">
                Owner
              </span>
            )}
          </div>
          <p className="text-neutral-300">{employee.role}</p>
        </div>
      </div>
      <EmployeeStatus employee={employee} />
    </div>
  );
};
