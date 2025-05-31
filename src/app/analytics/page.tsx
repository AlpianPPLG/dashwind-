import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AnalyticsHeader } from "@/components/analytics/analytics-header";
import { AnalyticsOverview } from "@/components/analytics/analytics-overview";
import { RevenueChart } from "@/components/analytics/revenue-chart";
import { UserAnalytics } from "@/components/analytics/user-analytics";
import { TrafficSources } from "@/components/analytics/traffic-sources";
import { ConversionFunnel } from "@/components/analytics/conversion-funnel";
import { GeographicData } from "@/components/analytics/geographic-data";
import { RealtimeMetrics } from "@/components/analytics/realtime-metrics";

export default function AnalyticsPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Admin Panel</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Analytics</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
        <AnalyticsHeader />
        <AnalyticsOverview />
        <div className="grid gap-6 md:grid-cols-2">
          <RevenueChart />
          <UserAnalytics />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <TrafficSources />
          <ConversionFunnel />
          <GeographicData />
        </div>
        <RealtimeMetrics />
      </div>
    </SidebarInset>
  );
}
