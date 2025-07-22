import { formatDistanceToNowStrict } from "date-fns";

export const formatTimeAgo = (dateStr: string): string => {
  const date = new Date(dateStr);
  const diff = Date.now() - date.getTime();

  if (diff < 60_000) return "Now"; 
  return `${formatDistanceToNowStrict(date, { addSuffix: true })}`;
};
