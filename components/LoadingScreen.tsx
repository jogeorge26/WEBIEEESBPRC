import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    // <div className="flex items-center justify-center min-h-screen">
    //   <div className="relative animate-slide-up">
    //     <img src="/sbprc.svg" alt="Logo" className="w-52 h-52" />
    //     <div className="absolute inset-0 flex items-center justify-center">
    //       <div className="w-96 h-52 border-4 border-dashed rounded-full border-t-red-50 animate-spin"></div>
    //     </div>
    //   </div>
      <div className="flex space-x-2 mt-10 load">
        <div className="dot animate-bounce1 ball bg-red-50"></div>
        <div className="dot animate-bounce2 ball bg-red-50"></div>
        <div className="dot animate-bounce3 ball bg-red-50"></div>
      </div>
  );
};

export default LoadingScreen;
