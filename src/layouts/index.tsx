import React from "react";
import { Navigation } from "../modules/navigation";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <div>
        <Navigation />
        {children}
      </div>
    </main>
  );
};
