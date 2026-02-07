"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Eye,
  Settings,
  Lock,
  FileText,
  XCircle,
  IndianRupee,
} from "lucide-react";

/* 🎨 NEW WEBSITE THEME */
const theme = {
  primary: "#7C3AED", // violet accent
  primarySoft: "rgba(124,58,237,0.12)",
};

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const policyCards = [
    {
      icon: <ShieldCheck className="w-5 h-5" style={{ color: theme.primary }} />,
      title: "Introduction",
      content:
        'This Privacy Policy describes how Hashforgamers Pvt Ltd and its affiliates ("we", "our", "us") collect, use, and protect your data through https://hashforgamers.co.in/. Data is stored and processed in India.',
    },
    {
      icon: <Eye className="w-5 h-5" style={{ color: theme.primary }} />,
      title: "Collection",
      content:
        "We collect personal data such as name, contact details, date of birth, identity proof, and payment details when required.",
    },
    {
      icon: <Settings className="w-5 h-5" style={{ color: theme.primary }} />,
      title: "Usage",
      content:
        "Data is used to provide services, improve experience, prevent fraud, and communicate relevant updates.",
    },
    {
      icon: <Lock className="w-5 h-5" style={{ color: theme.primary }} />,
      title: "Security",
      content:
        "We follow reasonable security practices to protect your personal data from unauthorized access or misuse.",
    },
    {
      icon: <FileText className="w-5 h-5" style={{ color: theme.primary }} />,
      title: "Platform Nature",
      content:
        "Hashforgamers is not a gaming service provider. We only enable ticket bookings for partner gaming cafés.",
    },
    {
      icon: <XCircle className="w-5 h-5" style={{ color: theme.primary }} />,
      title: "Refund Policy",
      content:
        "All bookings are final. Hashforgamers does not provide refunds.",
    },
    {
      icon: <IndianRupee className="w-5 h-5" style={{ color: theme.primary }} />,
      title: "Pricing",
      content:
        "Pricing details are transparently displayed on the respective game listings.",
    },
  ];

  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "PrivacyPolicyModalOpen");
    }
  }, [isOpen]);

  const handleClose = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "PrivacyPolicyModalClose");
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-white backdrop-blur-xl deep-cut"
            style={{ backgroundColor: theme.primarySoft }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:opacity-70 transition"
              aria-label="Close Privacy Policy"
            >
              <X size={28} />
            </button>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl uppercase text-center mb-4 tracking-wider">
              Privacy Policy
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Your privacy matters. Here’s how we protect your data.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              {policyCards.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/20 p-4 clip-input"
                >
                  <h3
                    className="flex items-center gap-2 text-lg font-semibold mb-2"
                    style={{ color: theme.primary }}
                  >
                    {item.icon}
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer info */}
            <div className="mt-10 space-y-4 text-sm text-gray-400">
              <p>
                For any privacy-related queries, contact us at{" "}
                <a
                  href="mailto:privacy@hashforgamers.co.in"
                  className="underline"
                  style={{ color: theme.primary }}
                >
                  privacy@hashforgamers.co.in
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
