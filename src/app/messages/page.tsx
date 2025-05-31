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
import { MessagesHeader } from "@/components/messages/messages-header";
import { ConversationList } from "@/components/messages/conversation-list";
import { ChatArea } from "@/components/messages/chat-area";
import { MessagesSidebar } from "@/components/messages/messages-sidebar";

export default function MessagesPage() {
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
                <BreadcrumbPage>Messages</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <MessagesHeader />
        <div className="grid gap-4 md:grid-cols-4 h-[calc(100vh-200px)]">
          <div className="md:col-span-1">
            <ConversationList />
          </div>
          <div className="md:col-span-2">
            <ChatArea />
          </div>
          <div className="md:col-span-1">
            <MessagesSidebar />
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}
