import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

interface HomeCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: ReactNode;
  variant?: "default" | "destructive";
  href: string;
  type: "donor" | "request";
}

export default function HomeCard({
  title,
  description,
  buttonText,
  icon,
  variant = "default",
  href,
  type,
}: HomeCardProps) {
  const ButtonContent = (
    <Button
      className="w-full"
      variant={variant}
      size="lg"
      asChild={!!href}
    >
      {href ? <a href={href}>{buttonText}</a> : <span>{buttonText}</span>}
    </Button>
  );

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
      <CardContent className="pt-8">
        <div className="mb-6 flex justify-center">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity ${variant === "destructive"
              ? "bg-destructive/10"
              : "bg-primary/10"
              }`}
          >
            <div className={variant === "destructive" ? "text-destructive" : "text-primary"}>
              {icon}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
          {title}
        </h3>

        <p className="text-muted-foreground mb-6 text-center text-sm">
          {description}
        </p>

        {href && type === "donor" ? (
          <div className="flex items-center justify-center gap-4">
            <Link href={href} className="flex-1">
              <Button
                className="w-full"
                variant={variant}
                size="lg"
              >
                {buttonText}
              </Button>
            </Link>
            <p>Or</p>
            <Link href={'/login?type=donor-login'}><Button variant="outline">Login</Button></Link>
          </div>
        ) : (
          <Link href={href}>
            <Button
              className="w-full"
              variant={variant}
              size="lg"
            >
              {buttonText}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
