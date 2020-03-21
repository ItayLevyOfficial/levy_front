import { useLocation } from "react-router-dom";
import React from "react";

export const InstagramRedirect: React.FC = () => {
  const code = (new URLSearchParams(useLocation().search)).get('code');
  console.log(code);
  return (<div>
    TODO
  </div>);
};
