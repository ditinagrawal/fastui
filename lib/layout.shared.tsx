import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BlocksIcon, LayoutTemplateIcon, ZapIcon } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <ZapIcon className="fill-primary size-5" />
          FastUI
        </>
      ),
    },
    githubUrl: "https://github.com/ditinagrawal/fastui",
    links: [
      {
        icon: <BlocksIcon />,
        text: "Blocks",
        url: "/docs/blocks",
      },
      {
        icon: <LayoutTemplateIcon />,
        text: "Templates",
        url: "/docs/templates",
      },
    ],
  };
}
