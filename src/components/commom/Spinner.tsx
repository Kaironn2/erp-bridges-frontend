import clsx from 'clsx';

export function Spinner() {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div
        className={clsx(
          'w-20 h-20 border-4 border-transparent border-t-primary',
          'text-primary text-4xl animate-spin flex items-center',
          'justify-center rounded-full'
        )}
      >
        <div
          className={clsx(
            'w-16 h-16 border-4 border-transparent border-t-secondary',
            'text-secondary text-2xl animate-spin flex items-center',
            'justify-center rounded-full'
          )}
        ></div>
      </div>
    </div>
  );
}
