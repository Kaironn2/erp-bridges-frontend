import { Button } from '../ui/button';

type AuthButtonProps = {
  text: string;
  isSubmitting: boolean;
  isSubmittingText: string;
};

export function AuthButton({
  text,
  isSubmitting,
  isSubmittingText,
}: AuthButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="bg-primary dark:bg-primary/70 dark:hover:bg-primary"
    >
      {isSubmitting ? isSubmittingText : text}
    </Button>
  );
}
