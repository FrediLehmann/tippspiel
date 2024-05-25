"use client";

import * as React from "react";
import { useToggle } from "@uidotdev/usehooks";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button, Input } from "@/components/ui";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  autoComplete: "new-password" | "current-password" | "off";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, autoComplete, value, onChange, ...rest }, ref) => {
    const t = useTranslations("common");
    const [isHidden, toggleIsHidden] = useToggle(true);

    return (
      <div className="relative">
        <Input
          id={id}
          value={value}
          onChange={onChange}
          type={isHidden ? "password" : "text"}
          autoComplete={autoComplete}
          ref={ref}
          {...rest}
        />
        <Button
          type="button"
          variant="link"
          size="icon"
          aria-label={t("passwordInputAriaLabel")}
          className="absolute right-1 top-1/2 -translate-y-1/2 transform"
          onClick={() => toggleIsHidden()}
        >
          {isHidden ? (
            <EyeIcon className="h-5 w-5 text-neutral-700" />
          ) : (
            <EyeOffIcon className="h-5 w-5 text-neutral-700" />
          )}
        </Button>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
