// global.d.ts
interface Window {
  gtag: (...args: any[]) => void;
  // You can add other global variables/functions here if needed
  // e.g., grecaptcha: { ready: (cb: () => void) => void, execute: (siteKey: string, options: { action: string }) => Promise<string> };
}