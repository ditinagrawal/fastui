import { Spotlight } from "@/components/ui/spotlight";
import { baseOptions } from "@/lib/layout.shared";
import { HomeLayout } from "fumadocs-ui/layouts/home";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout {...baseOptions()}>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#ababab" />
      {children}
    </HomeLayout>
  );
}
