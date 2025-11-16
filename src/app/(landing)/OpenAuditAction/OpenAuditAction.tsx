import Image from "next/image";
import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OpenAuditAction({ id }: { id: string }): React.ReactElement {
  const [isPlaying, setIsPlaying] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setAnnouncement('Video paused.');
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setAnnouncement('Video playing.');
          setIsPlaying(true);
        }).catch((error) => {
          console.error('Video playback failed:', error);
          setAnnouncement('Video playback failed. Please try again.');
        });
      }
    }
  };

  const [activeFilters, setActiveFilters] = useState<string[]>(['Critical', 'Medium', 'Small']);

  const handleFilterToggle = (severity: string) => {
    setActiveFilters((prevFilters) => {
      const newFilters = prevFilters.includes(severity)
        ? prevFilters.filter((f) => f !== severity)
        : [...prevFilters, severity];
      setAnnouncement(`${severity} filter ${newFilters.includes(severity) ? 'applied' : 'removed'}.`);
      return newFilters;
    });
  };

  return (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto py-12 px-6">
      <div className="px-6">
        <div className="text-center">
          <h2
            className="mx-auto font-extrabold leading-tight"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(28px, 6.4vw, 48px)",
              maxWidth: "900px",
            }}
          >
            See OpenAudit In Action
          </h2>

          <p
            className="mt-4 mx-auto max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Watch how our AI engine instantly identifies vulnerabilities in
            smart contracts.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="relative rounded-lg group">
            <video
              ref={videoRef}
              src="/videos/OpenAuditTeaser.mp4" // Assuming a video exists here
              poster="/Dashboard.png" // Placeholder image
              loop
              className="h-full w-full rounded-lg object-cover"
              aria-describedby="video-description"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={handlePlayPause}
                className="p-4 rounded-full bg-white/70 backdrop-blur-sm text-gray-900 hover:bg-white transition-all duration-200"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.36 1.62-1.066l10.94 5.14c.705.331.705 1.308 0 1.639l-10.94 5.14c-.703.327-1.62-.179-1.62-1.065V5.653Z"
                    />
                  </svg>
                )}
              </Button>
            </div>
            <p id="video-description" className="sr-only">
              Video teaser showing OpenAudit in action.
            </p>
            <div
              aria-live="polite"
              className="sr-only"
              role="status"
            >
              {announcement}
            </div>
          </div>
          <div className="text-foreground">
            <Card
              className="rounded-xl shadow-md overflow-hidden py-0 max-w-[560px] w-full mx-auto"
              style={{
                backgroundColor: "var(--report-panel-bg)",
              }}
            >
              <CardHeader
                className="py-4 rounded-t-xl"
                style={{ backgroundColor: "var(--report-panel-header-bg)" }}
              >
                <CardTitle style={{ color: "var(--foreground)" }}>
                  Security Analysis Report
                </CardTitle>
                <CardDescription>Found 3 issues in your code</CardDescription>
              </CardHeader>
              <div className="flex justify-center gap-2 p-4">
                {['Critical', 'Medium', 'Small'].map((severity) => (
                  <Button
                    key={severity}
                    onClick={() => handleFilterToggle(severity)}
                    variant={activeFilters.includes(severity) ? "default" : "outline"}
                    className={activeFilters.includes(severity) ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
                    aria-pressed={activeFilters.includes(severity)}
                  >
                    {severity}
                  </Button>
                ))}
              </div>
              <CardContent className="space-y-5 pt-6">
                {/* Critical */}
                <div
                  className={`rounded-2xl border p-5 ${!activeFilters.includes('Critical') ? 'hidden' : ''} ${activeFilters.includes('Critical') ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                  style={{
                    backgroundColor: "var(--report-critical-bg)",
                    borderColor: "var(--report-critical-stroke)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span>
                        Critical
                      </span>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        Reentrancy Vulnerability
                      </div>
                      <p className="text-sm text-muted-foreground">
                        External call before state update allows reentrancy attacks
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      Line 11
                    </span>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className={`rounded-2xl border p-5 ${!activeFilters.includes('Medium') ? 'hidden' : ''} ${activeFilters.includes('Medium') ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                  style={{
                    backgroundColor: "var(--report-medium-bg)",
                    borderColor: "var(--report-medium-stroke)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span>Medium</span>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        Missing Access Control
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Function lacks proper access control modifiers
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      Line 8
                    </span>
                  </div>
                </div>

                {/* Small */}
                <div
                  className={`rounded-2xl border p-5 ${!activeFilters.includes('Small') ? 'hidden' : ''} ${activeFilters.includes('Small') ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                  style={{
                    backgroundColor: "var(--report-small-bg)",
                    borderColor: "var(--report-small-stroke)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span>Small</span>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        Gas Optimization
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Consider using unchecked block for gas savings
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      Line 15
                    </span>
                  </div>
                </div>

                <p className="pt-6 text-sm text-muted-foreground mb-8">
                  Analysis completed in 0.8s
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
