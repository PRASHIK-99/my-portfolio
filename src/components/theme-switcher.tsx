'use client';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Palette } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';

const colorThemes = [
  { name: 'blue', label: 'Blue', color: 'hsl(217.2 91.2% 59.8%)' },
  { name: 'green', label: 'Green', color: 'hsl(142.1 76.2% 36.3%)' },
  { name: 'orange', label: 'Orange', color: 'hsl(24.6 95% 53.1%)' },
];

export function ThemeSwitcher() {
  const { theme, toggleTheme, colorTheme, setColorTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Change color theme">
            <Palette className="h-5 w-5" />
            <span className="sr-only">Change color theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={colorTheme} onValueChange={(value) => setColorTheme(value as any)}>
            {colorThemes.map((ct) => (
              <DropdownMenuRadioItem key={ct.name} value={ct.name}>
                <div
                  className="w-4 h-4 rounded-full mr-2 border"
                  style={{ backgroundColor: ct.color }}
                />
                {ct.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
