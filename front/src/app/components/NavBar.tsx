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
            <Link href="/">Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/dashboard">Dashboard</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/contact">Contact</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>

      <ThemeSchema />
    </Menubar>
  );
}
