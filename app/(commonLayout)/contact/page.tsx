import { Metadata } from "next";
import Contact from "../../../components/modules/contact/Contact";

export const metadata: Metadata = {
  title: "Mahabub - Contact | Get in Touch",
  description:
    "Get in touch with Mahabub. Contact for freelance work, collaboration, or professional inquiries.",
};

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
