import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "../types";
import ScanIcon from "../assets/scan.svg";
import CampIcon from "../assets/camp.svg";
import Affinity from "../assets/affinity.svg";
import IcdIcon from "../assets/icd.svg";
import Wallet from "../assets/wallet.svg";
import Wellbeing from "../assets/wellbeing.svg";
import CyberIcon from "../assets/cyber.svg";
import CardIcon from "../assets/card.svg";

const ProductShowcase: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const products: Omit<ProductCardProps, "isActive" | "onClick">[] = [
    {
      icon: ScanIcon,
      title: "SCAN & PAY",
      description:
        "A White-Labeled QR-Based Platform For Real-Time OPD, Diagnostics, And Pharmacy Payments, Enabling Seamless Claim Validation Across Network And Non-Network Providers.",
    },
    {
      icon: CampIcon,
      title: "CAMP MODULE",
      description:
        "Digitised Employee Health Camps With Flexible Options For On-Site, Off-Site, Or Home Sample Collection. Includes Real-Time Tracking, Reporting, And HR Dashboards.",
    },
    {
      icon: Wellbeing,
      title: "WELLBEING MANAGEMENT PROGRAMS",
      description:
        "Curated Programs Combining Physical , Preventive, & Mental Well-Being.",
    },
    {
      icon: Affinity,
      title: "AFFINITY PRODUCTS",
      description:
        "Affordable OPD + Wellness Bundles For Individuals, Families, And Corporate Groups - Includes Doctor Consults, Pharmacy Cover, Dental, Vision, Nutrition & Emotional Support.",
    },
    {
      icon: Wallet,
      title: "WALLET MANAGEMENT",
      description:
        "A White-Labeled QR-Based Platform For Real-Time OPD, Diagnostics, And Pharmacy Payments, Enabling Seamless Claim Validation Across Network And Non-Network Providers.",
    },
    {
      icon: CardIcon,
      title: "PRE & POST HOSPITALIZATION SUPPORT",
      description:
        "Covers Pre-Surgical Assessments, Counseling, Home Care, Mental Health, Remote Monitoring, And Post-Discharge Medication Adherence.",
    },
    {
      icon: IcdIcon,
      title: "PPMC (PRE-POLICY MEDICAL CHECK)",
      description:
        "AI-Powered Digitized Health Assessments With ICD-10 Tagging, Video MERs, Transcription, And Report Automation - Built For Insurers And TPAs.",
    },
    {
      icon: CyberIcon,
      title: "CYBERSECURITY & COMPLIANCE (POWERED BY ASCELLA)",
      description:
        "End-To-End Data Protection Through VAPT, HIPAA/ISO Audits, SOC2 Readiness, Red Team Testing, And Security Baselining - Built For Health-Tech Scale.",
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  return (
    <div className="px-4 lg:w-[80%] w-[100%] mt-[2vh] h-full">
      <div className="text-center mb-12">
        <h1 className="lg:text-[5vh] text-4xl font-semibold mb-4">
          CORE <span className="md:text-inherit text-[#17A4AD]">PRODUCTS</span>{" "}
          & SERVICES
        </h1>
        <p className="lg:text-2xl font-semibold text-lg">Your Health. Our Tech. One Seamless Platform.</p>
        <p className="lg:text-lg text-md mt-3">
          Explore the tools that make healthcare easier, faster, and more
          connected, for everyone involved.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            icon={product.icon}
            title={product.title}
            description={product.description}
            isActive={index === activeCardIndex}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
