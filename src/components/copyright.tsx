import React from "react";
import { Typography, Link } from "@material-ui/core";
import constants from "./constants";
import { Link as RouterLink } from 'react-router-dom';
import routes from "./routes";

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link component={RouterLink} to={routes.copyright} color="inherit">
        {constants.websiteName}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}