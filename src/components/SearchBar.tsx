
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SearchBar({ value, onChange, className = "" }: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="search"
        placeholder="Search anime..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
      />
    </div>
  );
}
