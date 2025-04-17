type StatBoxProps = {
  title: string;
  value: number;
};

export function StatBox({ title, value }: StatBoxProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow border border-gray-200">
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-white">{value}</p>
    </div>
  );
}
