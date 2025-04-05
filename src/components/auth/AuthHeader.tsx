
import React from 'react';
import { UserPlus } from 'lucide-react';

const AuthHeader: React.FC = () => {
  return (
    <div className="text-center mb-6">
      <div className="inline-block bg-retro-red p-4 rounded-sm mb-4">
        <UserPlus size={36} className="text-white" />
      </div>
      <h1 className="font-bebas text-3xl tracking-wider text-retro-red">
        CREATE ACCOUNT
      </h1>
      <p className="font-special text-sm text-retro-darkGray/70">
        Join M.S Services to track your vehicle maintenance
      </p>
    </div>
  );
};

export default AuthHeader;
