import { redirect } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

// This would come from your auth system (NextAuth, Clerk, etc.)
async function getUser() {
  // Replace with your actual auth logic
  // const session = await getServerSession();
  // if (!session || session.user.role !== 'admin') {
  //   redirect('/login');
  // }
  // return session.user;

  // Mock user for demonstration
  return { name: "Admin User", email: "admin@example.com", role: "admin" };
}

export default async function AdminLayout({ children }) {
  const user = await getUser();

  const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/users", icon: Users, label: "Users" },
    { href: "/admin/posts", icon: FileText, label: "Posts" },
    { href: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="">{children}</div>
      </main>
    </div>
  );
}
