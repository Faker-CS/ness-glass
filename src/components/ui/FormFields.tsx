import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { CheckIcon, ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/*
 * Form controls from the contact form (31:4733) and the location picker (31:4520).
 * Figma shows the label as the field's placeholder, so each control keeps a
 * visually hidden <label> for assistive tech.
 */

const darkFieldClasses =
  "w-full rounded-field bg-white/5 px-6 text-body text-snow placeholder:text-snow transition-colors duration-200 hover:bg-white/10 focus-visible:bg-white/10";

type TextFieldProps = {
  label: string;
  name: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "name" | "className" | "placeholder" | "id">;

export function TextField({ label, name, className, type = "text", ...rest }: TextFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={label} className={cn(darkFieldClasses, "h-14")} {...rest} />
    </div>
  );
}

type TextAreaProps = {
  label: string;
  name: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"textarea">, "name" | "className" | "placeholder" | "id">;

export function TextArea({ label, name, className, rows = 4, ...rest }: TextAreaProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={label}
        className={cn(darkFieldClasses, "block min-h-35.5 resize-y py-5")}
        {...rest}
      />
    </div>
  );
}

type CheckboxProps = {
  name: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "name" | "className" | "type" | "id" | "children">;

/** 24 px magenta-outlined box (Figma "arrow 19"), filled with a white tick when checked. */
export function Checkbox({ name, children, className, ...rest }: CheckboxProps) {
  return (
    <div className={cn("flex items-start", className)}>
      <span className="relative flex size-10 shrink-0 items-center justify-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className="peer absolute inset-0 cursor-pointer appearance-none rounded-sm focus-visible:outline-none"
          {...rest}
        />
        <span className="pointer-events-none size-6 rounded-sm border border-brand transition-colors duration-200 peer-checked:bg-brand peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand" />
        <CheckIcon className="pointer-events-none absolute size-4 text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
      </span>
      <label htmlFor={name} className="cursor-pointer p-2 font-legal text-legal font-medium text-fineprint">
        {children}
      </label>
    </div>
  );
}

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  name: string;
  /** Text of the empty first option, shown until a value is picked. */
  placeholder: string;
  options: SelectOption[];
  className?: string;
} & Omit<ComponentPropsWithoutRef<"select">, "name" | "className" | "id" | "children">;

/** Magenta pill select with a chevron (Figma "Frame 27" in the locations section). */
export function Select({ label, name, placeholder, options, className, defaultValue = "", ...rest }: SelectProps) {
  return (
    <div className={cn("relative", className)}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="h-14 w-full cursor-pointer appearance-none truncate rounded-full bg-brand pr-12 pl-5 text-body font-medium text-snow transition-colors duration-200 hover:bg-brand/85 sm:pr-14 sm:pl-6"
        {...rest}
      >
        <option value="" disabled className="bg-white text-ink">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-white text-ink">
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute top-1/2 right-2.5 flex size-9 -translate-y-1/2 items-center justify-center">
        <ChevronDownIcon className="size-6 text-snow" />
      </span>
    </div>
  );
}
