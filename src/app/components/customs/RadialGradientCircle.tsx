import { cn } from '@/app/utils/cn';

type RadialGradientCircleProps = {
  color: 'pink' | 'blue' | 'yellow';
  className?: string;
};

export default function RadialGradientCircle({
  color,
  className,
}: RadialGradientCircleProps) {
  const gradientReturner = () => {
    switch (color) {
      case 'pink':
        return 'radial-gradient(circle, rgba(255,69,243,0.8), rgba(255,69,243,0), rgba(255,69,243,0), rgba(255,69,243,0))';
      case 'blue':
        return 'radial-gradient(circle, rgba(129, 228, 228, 0.8), rgba(129, 228, 228, 0), rgba(129, 228, 228, 0), rgba(129, 228, 228, 0))';
      case 'yellow':
        return 'radial-gradient(circle, rgba(220, 2240, 102, 0.8), rgba(220, 2240, 102, 0), rgba(220, 2240, 102, 0), rgba(220, 2240, 102, 0))';
    }
  };

  return (
    <div
      className={cn('h-[420px] w-[420px]', className)}
      style={{
        background: gradientReturner(),
      }}
    ></div>
  );
}
