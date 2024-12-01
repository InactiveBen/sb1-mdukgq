import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Employee } from '../../../data/employees';

interface EmployeeNoticesProps {
  employee: Employee;
}

export const EmployeeNotices: React.FC<EmployeeNoticesProps> = ({ employee }) => {
  if (employee.isOwner) {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-green-400 font-medium">Authorization Notice</p>
            <p className="text-sm text-neutral-300">
              This user is authorized to buy codes on behalf of ShopBlox.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (employee.dwc) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-red-400 font-medium">Warning</p>
            <p className="text-sm text-neutral-300">
              This former employee is not authorized to conduct business on behalf of ShopBlox. 
              If they attempt to buy codes, please contact support immediately.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
