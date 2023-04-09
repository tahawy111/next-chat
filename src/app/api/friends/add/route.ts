import { authOptions } from "@/lib/auth";
import { addFriendValidator } from "@/lib/validations/add-friend";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email: emailToAdd } = addFriendValidator.parse(body.email);

    const RESTResponse = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/get/user:email:${emailToAdd}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const { result: idToAdd } = (await RESTResponse.json()) as {
      result: string | null;
    };

    if (idToAdd) {
      return new Response("This person doen't exist.", { status: 400 });
    }

    const session =await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    if(idToAdd === session.user.id) {
        return new Response("You can't add yourself as a friend", { status: 401 });
    }

    // valid request

  } catch (error) {}
}
