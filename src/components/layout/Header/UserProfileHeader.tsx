import Image from 'next/image';
import { UserCircle2 } from 'lucide-react';
import clsx from 'clsx';

interface UserProfileHeaderProps {
  userName: string;
  userRole: string;
  userImageUrl?: string;
  className?: string;
}

export function UserProfileHeader({
  userName,
  userRole,
  userImageUrl,
  className,
}: UserProfileHeaderProps) {
  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <div className="relative h-10 w-10 flex-shrink-0">
        {userImageUrl ? (
          <Image
            src={userImageUrl}
            alt={`Foto de perfil de ${userName}`}
            fill
            className="rounded-full object-cover"
          />
        ) : (
          <UserCircle2 className="h-full w-full text-muted-foreground" />
        )}
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-sm font-semibold text-foreground">
          {userName}
        </span>
        <span className="text-xs text-muted-foreground">{userRole}</span>
      </div>
    </div>
  );
}
