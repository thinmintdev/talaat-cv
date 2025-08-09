import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  const formatLabel = (value: string | null | undefined) => {
    const v = value ?? "Present";
    return v.replace(/\s+/g, "\u00A0"); // prevent vertical wrap
  };

  return (
    <div
      className="text-sm tabular-nums text-blue-600 font-medium whitespace-nowrap"
      title={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {formatLabel(start)}&nbsp;–&nbsp;{formatLabel(end)}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description } = work;

  return (
    <Card className="py-4 print:py-2 border-none shadow-none bg-transparent rounded-none">
      <CardHeader className="print:space-y-1">
        <div className="flex items-start justify-between gap-x-4 text-base">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold leading-none print:text-sm text-blue-700">
              <CompanyLink company={company} link={link} />
            </h3>
            <div className="mt-1">
              <BadgeList
                className="hidden gap-x-1 sm:inline-flex"
                badges={badges}
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <WorkPeriod start={start} end={end} />
          </div>
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {title}
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold text-blue-700" id="work-experience">
        Work Experience
      </h2>
      <div
        className="space-y-0 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item, index) => (
          <div key={`${item.company}-${item.start}`}>
            {index > 0 && <hr className="border-blue-200 my-6 print:my-4" />}
            <article>
              <WorkExperienceItem work={item} />
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}
