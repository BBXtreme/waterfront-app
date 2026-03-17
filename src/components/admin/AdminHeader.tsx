'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function AdminHeader({ email }: { email: string }) {
  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Logged out successfully');
      router.push('/admin/login');
    } catch (error: any) {
      toast.error('Logout failed: ' + error.message);
    }
  };

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Waterfront Admin</h2>
      <div className="flex items-center space-x-4">
        <span>{email}</span>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
}
