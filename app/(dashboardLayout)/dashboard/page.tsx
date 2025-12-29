import { CalendarDays, Mail, ShieldCheck, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import profile from "../../../assets/profile.jpg";
import { Badge } from "../../../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { getMe } from "../../../services/userServices";
export const metadata: Metadata = {
  title: "Mahabub - Manage Project | Portfolio Dashboard",
  description:
    "Manage and update existing portfolio projects from Mahabub’s dashboard. Keep your React and Next.js projects organized and up-to-date.",
};
const DashboardHomePage = async () => {
  const response = await getMe();
  const adminData = response?.data || null;
  return (
    <div className="bg-[#020617] min-h-svh flex justify-center items-center px-4 md:px-0">
      <Card className="w-full max-w-md  bg-[#020617] border border-gray-800 shadow-xl rounded-xl py-6">
        <CardHeader className="flex flex-col items-center gap-3 text-center">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-700 shadow-md">
            <Image
              src={profile}
              alt={adminData?.name}
              fill
              className="object-cover"
            />
          </div>
          <CardTitle className="text-xl md:text-2xl font-semibold text-gray-100">
            {adminData?.name}
          </CardTitle>
          <Badge
            variant="outline"
            className={`${
              adminData?.isStatus === "ACTIVE"
                ? "border-green-500 text-green-400"
                : "border-red-500 text-red-400"
            } text-xs px-3 py-[2px] rounded-full`}
          >
            {adminData?.isStatus}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">{adminData?.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">{adminData?.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck
              className={`w-4 h-4 ${
                adminData?.isVerified ? "text-green-400" : "text-red-400"
              }`}
            />
            <span className="text-gray-300">
              {adminData?.isVerified ? "Verified Account" : "Unverified"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">
              Joined on {new Date(adminData?.createdAt).toLocaleDateString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHomePage;
