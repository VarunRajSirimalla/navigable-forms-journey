
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, Gamepad, Trophy, Film, Music, 
  FlaskConical, Palette
} from 'lucide-react';
import { categories } from '@/data/mockData';

const iconMapping: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-4 h-4" />,
  Gamepad: <Gamepad className="w-4 h-4" />,
  Trophy: <Trophy className="w-4 h-4" />,
  Film: <Film className="w-4 h-4" />,
  Music: <Music className="w-4 h-4" />,
  Microscope: <FlaskConical className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />
};

const SidebarCategories: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="space-y-1">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.slug}`}
            className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                {iconMapping[category.iconName] || <Laptop className="w-4 h-4" />}
              </span>
              <span className="text-sm">{category.name}</span>
            </div>
            <span className="text-xs text-muted-foreground">{category.postCount}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarCategories;
