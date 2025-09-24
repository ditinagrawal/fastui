import { Spotlight } from "@/components/ui/spotlight";
import { baseOptions } from "@/lib/layout.shared";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Simple, Modern and Beautiful UI Blocks and Templates",
    template: "%s | FastUI",
  },
  description: "FastUI is a library of blocks and templates for building modern web applications as fast as possible.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout {...baseOptions()}>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#ababab" />
      {children}
    </HomeLayout>
  );
}
