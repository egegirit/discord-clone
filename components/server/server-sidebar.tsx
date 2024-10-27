import { currentProfile } from "@/lib/current-profile";

interface ServerSidebarProps {
    serverId: string;
}

export const ServerSidebar = async ({ serverId }: ServerSidebarProps) => {
    const profile = await currentProfile();
    return <div>Server Sidebar Component</div>;
};
