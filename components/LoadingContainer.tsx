// 'use client'
// import LoadingScreen from "./LoadingScreen";
// import { LoadingProvider, useLoading } from '@/contexts/LoadingContext';
// import { useEffect } from 'react';

// const LoadingContainer = ({ children }: { children: React.ReactNode }) => {
//     const { loading, setLoading } = useLoading();
  
//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setLoading(false);
//       }, 3000); // Adjust the timeout duration as needed
//       return () => clearTimeout(timer);
//     }, [setLoading]);
  
//     if (loading) {
//       return <LoadingScreen />;
//     }
  
//     return <>{children}</>;
//   };
  
//   export default RootLayout;