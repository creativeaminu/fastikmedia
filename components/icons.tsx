// Hand-drawn SVG icon set matching the template's iconography.
type IconProps = { className?: string };

export function ShareMark({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="17" cy="5.5" r="2.6" />
      <circle cx="17" cy="18.5" r="2.6" />
      <path d="M8.4 10.8l6.2-3.9M8.4 13.2l6.2 3.9" />
    </svg>
  );
}

export function VerifiedBadge({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M12 1.5l2.6 2 3.3-.4 1.2 3.1 3 1.6-.9 3.2.9 3.2-3 1.6-1.2 3.1-3.3-.4-2.6 2-2.6-2-3.3.4-1.2-3.1-3-1.6.9-3.2-.9-3.2 3-1.6 1.2-3.1 3.3.4z"
        fill="#0099ff"
      />
      <path d="M8.5 12.2l2.3 2.3 4.7-4.8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fa5fb4" strokeWidth="2" className={className}>
      <path d="M12 20.5s-8-4.9-8-11a4.6 4.6 0 018-3.1 4.6 4.6 0 018 3.1c0 6.1-8 11-8 11z" strokeLinejoin="round" />
    </svg>
  );
}

export function EyeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

export function CommentIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M21 12a8.5 8.5 0 01-8.5 8.5c-1.5 0-3-.4-4.2-1L3 21l1.5-4.5A8.5 8.5 0 1121 12z" strokeLinejoin="round" />
      <path d="M8.5 10.5h7M8.5 13.5h4.5" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.2 18.6c1-2.5 3.2-3.8 5.8-3.8s4.8 1.3 5.8 3.8" />
    </svg>
  );
}

export function LinkIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M10 14a5 5 0 007.1 0l2.4-2.4a5 5 0 00-7.1-7.1l-1.2 1.2" strokeLinecap="round" />
      <path d="M14 10a5 5 0 00-7.1 0l-2.4 2.4a5 5 0 007.1 7.1l1.2-1.2" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        d="M5 4h3.5l1.5 4-2 1.5a12 12 0 006.5 6.5L16 14l4 1.5V19a2 2 0 01-2.2 2A16.8 16.8 0 013 6.2 2 2 0 015 4z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#f7b900" className={className}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 5h6v8l-3.5 6H4l2.6-6H4V5zm10 0h6v8l-3.5 6H14l2.6-6H14V5z" />
    </svg>
  );
}

export function FolderUploadIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M3 7V6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" strokeLinejoin="round" />
      <path d="M12 16v-5m0 0l-2.3 2.3M12 11l2.3 2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- brand icons (simplified, drawn for the headline cluster) ---- */

export function SnapchatIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#fff" className={className}>
      <path d="M12 3.2c2.9 0 5 2.2 5 5.1 0 .8-.05 1.5-.1 2.1.5.2 1.1-.3 1.5-.1.5.2.4.8-.1 1.1-.4.3-1.3.5-1.5 1.1-.1.4.2 1 .7 1.7.6.8 1.6 1.4 2.7 1.6.3.1.4.4.2.6-.5.5-1.6.8-2.3.9-.1.3-.2.8-.4.9-.6.2-1.5-.2-2.3 0-.8.1-1.4 1.2-3.4 1.2s-2.6-1.1-3.4-1.2c-.8-.2-1.7.2-2.3 0-.2-.1-.3-.6-.4-.9-.7-.1-1.8-.4-2.3-.9-.2-.2-.1-.5.2-.6 1.1-.2 2.1-.8 2.7-1.6.5-.7.8-1.3.7-1.7-.2-.6-1.1-.8-1.5-1.1-.5-.3-.6-.9-.1-1.1.4-.2 1 .3 1.5.1-.05-.6-.1-1.3-.1-2.1 0-2.9 2.1-5.1 5-5.1z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#fff" className={className}>
      <path d="M16.6 3c.4 2 1.7 3.3 3.9 3.5v2.9c-1.4.1-2.7-.3-3.9-1.1v5.7A5.5 5.5 0 1111 8.5c.3 0 .7 0 1 .1v3a2.6 2.6 0 101.8 2.5V3h2.8z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#fff" className={className}>
      <path d="M10 8.5l6 3.5-6 3.5v-7z" />
    </svg>
  );
}
