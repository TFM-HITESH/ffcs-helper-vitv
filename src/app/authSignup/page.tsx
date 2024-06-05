
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FC } from 'react';

const Login: FC = () => {
  return (
    <div className="flex h-screen bg-[#191919] text-white">
      <div className="flex flex items-center justify-center bg-black w-[70%]">
        <div className="p-8">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 flex items-center justify-center rounded-lg">
              <img src="/imageToAdd.png" alt="image" className="h-12 w-12" />
            </div>
            <h1 className="text-4xl font-bold">Welcome to FFCSHelper VITV.</h1>
          </div>
        </div>
      </div>
      
      
      <SignupFormDemo/>
    </div>
  );
};

export default Login;
