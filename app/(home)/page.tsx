import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import { FaChevronRight, FaGithub, FaHeart } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="-mt-20 flex flex-1 flex-col justify-center gap-5 text-center">
      <div>
        <Badge variant="outline" className="rounded-full px-4 py-1">
          🎉 Introducing FastUI
        </Badge>
      </div>
      <h1 className="mx-auto px-2 font-bold max-md:text-3xl md:px-4 md:text-4xl lg:w-1/2 lg:px-0 lg:text-5xl">
        Simple, Modern and Beautiful UI{" "}
        <Highlighter action="underline" color="#FF9800">
          Blocks
        </Highlighter>{" "}
        and{" "}
        <Highlighter action="highlight" color="#FF9800">
          Templates
        </Highlighter>
        .
      </h1>
      <p className="text-fd-muted-foreground mx-auto px-2 max-md:text-sm lg:w-1/3 lg:px-0">
        FastUI is a collection of UI Blocks and Templates designed to help you build high-quality web applications
        quickly.
      </p>
      <div className="mx-auto mt-6 flex gap-4">
        <Button asChild className="group">
          <Link href="/docs/installation">
            Start Using <FaChevronRight className="size-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link
            href="https://github.com/ditinagrawal/fastui"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaGithub className="size-4 transition-transform group-hover:scale-110" />
            Star on Github
          </Link>
        </Button>
      </div>
      <footer className="absolute bottom-0 w-full space-y-1 border-t py-4 shadow-sm">
        <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
          Made with <FaHeart className="inline-block size-3 text-red-500" /> by{" "}
          <Link href="https://ditin.in" target="_blank" rel="noopener noreferrer" className="underline">
            Ditin Agrawal
          </Link>
        </p>
        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} FastUI. All rights reserved.</p>
      </footer>
    </main>
  );
}
