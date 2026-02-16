export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Simple CSS spinner — no JS required */}
      <div
        className="h-10 w-10 rounded-full border-2 animate-spin"
        style={{
          borderColor: 'var(--color-gold-border)',
          borderTopColor: 'var(--color-gold)',
        }}
      />
    </div>
  );
}
