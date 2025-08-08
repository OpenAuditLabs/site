import { Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialMediaLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  platform: string;
}

interface SocialMediaLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "filled";
  showLabels?: boolean;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    href: "https://github.com/OpenAuditLabs",
    icon: Github,
    label: "OpenAudit Labs on GitHub",
    platform: "GitHub",
  },
  {
    href: "https://twitter.com/OpenAuditLabs",
    icon: Twitter,
    label: "OpenAudit Labs on Twitter",
    platform: "Twitter",
  },
  {
    href: "https://linkedin.com/company/openauditlabs",
    icon: Linkedin,
    label: "OpenAudit Labs on LinkedIn",
    platform: "LinkedIn",
  },
];

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const containerSizeClasses = {
  sm: "w-9 h-9",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};

export function SocialMediaLinks({
  className,
  iconSize = "md",
  variant = "default",
  showLabels = false,
}: SocialMediaLinksProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "minimal":
        return "text-muted-foreground hover:text-foreground focus:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";
      case "filled":
        return "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:scale-110 focus:shadow-lg focus:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";
      default:
        return "bg-background border border-border hover:border-primary focus:border-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground hover:shadow-lg hover:scale-110 focus:shadow-lg focus:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";
    }
  };

  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {socialMediaLinks.map((link) => {
        const Icon = link.icon;

        return (
          <li key={link.platform}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={cn(
                "group flex items-center justify-center rounded-full transition-all duration-200",
                containerSizeClasses[iconSize],
                getVariantClasses(),
                showLabels && "flex-row gap-2 px-4 w-auto h-10"
              )}
            >
              <Icon
                className={cn(
                  iconSizeClasses[iconSize],
                  "transition-transform duration-200 group-hover:scale-110 group-focus:scale-110"
                )}
              />
              {showLabels && (
                <span className="text-sm font-medium">{link.platform}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
