import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="justify-center items-center flex h-screen">
      {children}
    </main>
  );
};

export default AuthLayout;
