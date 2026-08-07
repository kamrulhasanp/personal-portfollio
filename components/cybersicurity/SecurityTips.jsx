import {
    Cloud,
    Code2,
    Fingerprint,
    Globe2,
    SearchCheck,
    ShieldCheck,
  } from "lucide-react";
  
  export const cybersecurityTopics = [
    {
      title: "Fundamentals",
      description: "Build strong cybersecurity knowledge from the ground up.",
      articleCount: 12,
      href: "/cybersecurity/topics/fundamentals",
      icon: ShieldCheck,
    },
    {
      title: "Authentication & Authorization",
      description: "Learn how users are verified and access is controlled.",
      articleCount: 8,
      href: "/cybersecurity/topics/authentication-authorization",
      icon: Fingerprint,
      featured: true,
    },
    {
      title: "Network Security",
      description: "Protect networks and communication from threats.",
      articleCount: 10,
      href: "/cybersecurity/topics/network-security",
      icon: Globe2,
    },
    {
      title: "Web App Security",
      description: "Secure modern websites, applications, and APIs.",
      articleCount: 14,
      href: "/cybersecurity/topics/web-security",
      icon: Code2,
    },
    {
      title: "Cloud Security",
      description: "Protect cloud infrastructure, services, and data.",
      articleCount: 8,
      href: "/cybersecurity/topics/cloud-security",
      icon: Cloud,
    },
    {
      title: "Digital Forensics",
      description: "Investigate and analyze cybersecurity incidents.",
      articleCount: 6,
      href: "/cybersecurity/topics/digital-forensics",
      icon: SearchCheck,
    },
  ];