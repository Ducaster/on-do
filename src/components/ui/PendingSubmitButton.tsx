"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";

type PendingSubmitButtonProps = {
  children: ReactNode;
  pendingText?: ReactNode;
  pendingDescription?: string;
  className?: string;
  descriptionClassName?: string;
  disabled?: boolean;
  ariaLabel?: string;
};

export function PendingSubmitButton({
  children,
  pendingText = "처리 중...",
  pendingDescription,
  className,
  descriptionClassName = "mt-2 text-center text-xs text-text-light",
  disabled = false,
  ariaLabel,
}: PendingSubmitButtonProps) {
  const { pending } = useFormStatus();
  const isDisabled = disabled || pending;

  return (
    <>
      <button
        type="submit"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-label={ariaLabel}
        className={className}
      >
        {pending ? pendingText : children}
      </button>
      {pending && pendingDescription && (
        <p
          className={descriptionClassName}
          role="status"
          aria-live="polite"
        >
          {pendingDescription}
        </p>
      )}
    </>
  );
}
