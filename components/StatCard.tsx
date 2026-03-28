interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}
