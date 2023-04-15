import { CircularProgress } from "@mui/material";

type LoadingProps = {
  loading: boolean;
};

const Loading = ({ loading = true }: LoadingProps) => {
  if (!loading) return null;
  return <CircularProgress />;
};

export default Loading;
