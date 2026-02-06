import { ReactNode } from "react";

export default async function Header(props: {
  title: string;
  slotRight?: ReactNode;
}) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl">{props.title}</h1>
      {props.slotRight}
    </header>
  );
}
