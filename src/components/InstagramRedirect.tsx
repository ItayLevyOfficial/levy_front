import { useLocation, Redirect } from "react-router-dom";
import React from "react";
import routes from "./routes";

export const InstagramRedirect: React.FC = () => {
  const code = (new URLSearchParams(useLocation().search)).get('code');
  console.log(code);
  
  return (
      <Redirect to={routes.conversationsPage}/>
  )
};
