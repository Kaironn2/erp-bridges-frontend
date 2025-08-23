type ValidationErrorMessageProps = {
  message: string | undefined;
};

export function ValidationErrorMessage({
  message,
}: ValidationErrorMessageProps) {
  return <span className="text-destructive h-5 text-sm">{message}</span>;
}
