import React from "react";
import { Link, useMatches, type UIMatch } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

type Props = {
  baseHref: string;
  baseTitle: string;
};

export function AppBreadcrumb({ baseHref, baseTitle }: Props) {
  const matches = useMatches() as UIMatch<unknown, { breadcrumb: string }>[];

  const breadcrumbs = matches.filter(
    (match) => match.handle && match.handle.breadcrumb
  );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink asChild>
            <Link to={baseHref}>{baseTitle}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((match, i) => (
          <React.Fragment key={match.id}>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              {breadcrumbs.length - 1 !== i ? (
                <BreadcrumbLink asChild>
                  <Link to={match.pathname}>{match.handle.breadcrumb}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{match.handle.breadcrumb}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
