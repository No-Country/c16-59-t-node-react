import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { ThemeSchema } from ".";

export function NavBar() {
  return (
    <Menubar className="flex justify-between">
      <div className="flex gap-2">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/">1eraforma</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/dashboard">2daforma</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/contact">3raforma</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>

      <ThemeSchema />
    </Menubar>
  );
}
