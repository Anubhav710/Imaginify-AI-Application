import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <div>Home Page</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
