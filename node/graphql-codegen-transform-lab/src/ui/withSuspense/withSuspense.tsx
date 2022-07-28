import { Skeleton } from "@mui/material";
import React, { Suspense } from "react";

const withSuspense = (Component: React.FC) => {
  return () => (
    <Suspense fallback={<Skeleton animation="wave" width={100} height={100} />}>
      <Component />
    </Suspense>
  );
};

export default withSuspense;
