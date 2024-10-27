import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModel } from "@/components/modals/initial-modal";

const SetupPage = async () => {
    const profile = await initialProfile();

    const server =
        profile && "id" in profile
            ? await db.server.findFirst({
                  where: {
                      members: {
                          some: {
                              profileId: profile.id,
                          },
                      },
                  },
              })
            : null;

    if (server) {
        return redirect(`/servers/${server.id}`);
    }

    return <InitialModel />;
};

export default SetupPage;
