"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type CardProps =
  | (React.ComponentPropsWithoutRef<"div"> & {
      asChild?: false;
      href?: never;
      onClick?: React.MouseEventHandler<HTMLDivElement>;
      "aria-label"?: string;
    })
  | (React.ComponentPropsWithoutRef<"a"> & {
      asChild?: false;
      href: string;
      onClick?: never;
      "aria-label"?: string;
    })
  | (React.ComponentPropsWithoutRef<typeof Slot> & {
      asChild: true;
      href?: never;
      onClick?: never;
      "aria-label"?: string;
    });

function Card({ className, asChild, ...props }: CardProps) {
  const isClickableDiv = "onClick" in props && props.onClick !== undefined && !asChild;
  const isAnchor = "href" in props && props.href !== undefined && !asChild;

  const Comp = asChild ? Slot : isAnchor ? "a" : "div";

  const interactiveProps: React.HTMLAttributes<HTMLElement> = {};

  if (isClickableDiv) {
    interactiveProps.role = "button";
    if (props["aria-pressed"] !== undefined) {
      interactiveProps["aria-pressed"] = props["aria-pressed"];
    }
    interactiveProps["aria-label"] = props["aria-label"];
  }

  if (isAnchor) {
    interactiveProps.href = props.href;
    interactiveProps.rel = "noopener noreferrer";
    interactiveProps["aria-label"] = props["aria-label"];
  }

  return (
    <Comp
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        (isAnchor || isClickableDiv) && "cursor-pointer hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
      {...interactiveProps}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
