import { ReactNode } from "react";

export default function DetailsGrid(props: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
      <ul className="grid grid-cols-2 gap-6">{props.children}</ul>
    </div>
  );
}
