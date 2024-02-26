import { ReactNode, FunctionComponent } from "react";
import { PortableTextReactComponents } from "@portabletext/react";

type CustomPortableTextComponent = {
  bullet: FunctionComponent<{ children?: ReactNode }>;
  number: FunctionComponent<{ children?: ReactNode }>;
  checkmarks: FunctionComponent<{ children?: ReactNode }>;
};

export const PortableTextComponent: PortableTextReactComponents & {
  list: CustomPortableTextComponent;
} = {
  types: {},
  marks: {},
  block: {},
  listItem: {},
  hardBreak: false,
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc ml-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal ml-5">{children}</ol>
    ),
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
} as PortableTextReactComponents & { list: CustomPortableTextComponent };
