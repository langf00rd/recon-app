import Header from "@/components/header";
import { Empty, EmptyContent, EmptyTitle } from "@/components/ui/empty";

export default function Home() {
  return (
    <>
      <Header title="Welcome, Langford" />
      <Empty>
        <EmptyContent>
          <EmptyTitle>Coming Soon...</EmptyTitle>
        </EmptyContent>
      </Empty>
    </>
  );
}
