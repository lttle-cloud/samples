import { getHello } from "@/actions/hello";
import Message from "@/components/Message";
import Image from "next/image";

// Force SSR
export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await getHello();
  const whom = res?.name ?? "";

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 justify-items-center items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Image
          src="/logo.svg"
          alt="lttle.cloud logo"
          width={180}
          height={134}
        />
        <Message initialValue={whom} />
        <p className="italic text-center text-gray-500 max-w-md">
          You can customize the message by typing in the input above.
        </p>
      </main>
    </div>
  );
}
