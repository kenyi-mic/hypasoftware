// utils/errorTracking.ts
export interface ErrorLog {
  type: "404" | "500" | "other";
  path: string;
  referrer: string;
  userAgent: string;
  timestamp: Date;
  suggestedFix?: string;
}

export const log404Error = (path: string, referrer: string = "") => {
  const errorLog: ErrorLog = {
    type: "404",
    path,
    referrer: referrer || document.referrer,
    userAgent: navigator.userAgent,
    timestamp: new Date(),
  };

  // You can send this to your analytics service
  console.log("404 Error Logged:", errorLog);

  // Example: Send to your backend
  // fetch('/api/error-logging', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(errorLog),
  // });
};
