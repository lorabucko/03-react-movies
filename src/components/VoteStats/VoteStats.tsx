import css from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.text}>Good: {votes.good}</p>
      <p className={css.text}>Neutral: {votes.neutral}</p>
      <p className={css.text}>Bad: {votes.bad}</p>
      <p className={css.text}>Total: {totalVotes}</p>
      <p className={css.text}>Positive: {positiveRate}%</p>
    </div>
  );
}