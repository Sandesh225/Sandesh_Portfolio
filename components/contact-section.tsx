"use client"

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Loader2, Send } from "lucide-react"; // Added Loader2
import { toast } from "sonner";
import { GlobalContainer, sectionSpacing } from "./ui/global-container";
import { MagneticWrapper } from "./ui/magnetic-wrapper";
import { supabase } from "@/lib/supabase"; // Import your client

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast.error("Failed to send message. Please try again.");
      console.error("Supabase error:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`${sectionSpacing.container} bg-background relative overflow-hidden`}
    >
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <GlobalContainer className="relative z-10">
        <div className={`${sectionSpacing.headerMargin} text-center space-y-4`}>
          <motion.h2 className={sectionSpacing.headerTitle}>
            Let's Build <span className="text-primary">Together</span>
          </motion.h2>
          <p className={`${sectionSpacing.headerSubtitle} mx-auto max-w-2xl`}>
            Have a project in mind? Let's discuss how I can help bring your
            vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 border-border rounded-[2rem] backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your message..."
                    className="bg-background border-border resize-none"
                    rows={5}
                    required
                  />
                </div>

                <MagneticWrapper>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex gap-2"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </MagneticWrapper>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info (Remains mostly the same but styled for consistency) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card/50 border-border rounded-[2rem] backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:subedi.sandesh888@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    subedi.sandesh888@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border rounded-[2rem] backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-1">
                    Location
                  </p>
                  <p className="text-lg font-medium">Pokhara, Nepal</p>
                </div>
              </div>
            </Card>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Sandesh225",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sandesh-subedi-01521b344/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "subedi.sandesh888@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <MagneticWrapper key={social.label}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                </MagneticWrapper>
              ))}
            </div>
          </motion.div>
        </div>
      </GlobalContainer>
    </section>
  );
}