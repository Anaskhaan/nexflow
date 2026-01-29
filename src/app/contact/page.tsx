import { Metadata } from "next";
import ContactClient from "@/components/Contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Nexflow Technologies",
  description: "Get in touch with Nexflow Technologies. Let's discuss your next project and how we can help you scale with digital innovation.",
};

export default function Contact() {
  return <ContactClient />;
}
