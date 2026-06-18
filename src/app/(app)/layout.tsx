import AppNavbar from '@/components/app/AppNavbar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNavbar />
      <div className="flex-1">{children}</div>
    </>
  );
}
