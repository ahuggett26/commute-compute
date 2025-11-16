import ComparisonCard from "@/comparison/ComparisonCard";
import { allComparitors } from "@/comparison/Comparitors";
import { Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Typography variant="h4" className="pb-4">Home</Typography>
      <Typography variant="body2" className="pb-2">
        Commuting to work can be a drain on the limited amount of time you have.<br/>
        Despite accommodations for remote work since COVID-19 - and many jobs not requiring an in-person presence -
        companies continue to require us to commute to a physical office.
      </Typography>
      <Typography variant="body1" className="pb-2">
        <span>In 2022, </span>
        <Link href="https://www.gov.uk/government/statistics/transport-statistics-great-britain-2023/transport-statistics-great-britain-2022-domestic-travel" target="_blank" rel="noopener">according to the Department for Transport</Link>
        <span>, the average one-way commute time in the UK was 27 minutes.</span>
      </Typography>
      <Typography variant="body1" className="pb-2">
        Assuming a 5-day work week, that equates to 4.5 hours per week, 20 hours per month, or over 230 hours per year - nearly 10 full days.<br/>
        All of this is your own time, lost. 
      </Typography>
      <Typography variant="body1" className="pb-2">
        Here is what that might look like in other contexts.
      </Typography>
      {allComparitors().map((comp, index) => (
          <ComparisonCard key={`Comparison${index}`} comparison={comp} commuteMins={14040} />
      ))}
    </div>
  );
}
