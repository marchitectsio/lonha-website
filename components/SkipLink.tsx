type Props = { label?: string };

export default function SkipLink({ label = "Skip to main content" }: Props) {
  return (
    <a href="#main-content" className="skip-link">
      {label}
    </a>
  );
}
