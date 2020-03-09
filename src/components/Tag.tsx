import { ReactNode } from "react";

export default function Tag({ text }: { text: string }): ReactNode {
  return <em>{text}</em>;
}
