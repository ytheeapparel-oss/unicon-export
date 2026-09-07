"use client";

import React from "react";
import { Modal } from "@/components/ui/Modal";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { Product } from "@/types";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export function QuickQuoteModal({ isOpen, onClose, product }: QuickQuoteModalProps) {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Request Wholesale Quote: ${product.name}`}
      subtitle={`Product Code: ${product.id} • Category: ${product.category}`}
      maxWidth="lg"
    >
      <BulkInquiryForm
        initialProduct={`${product.name} (Code: ${product.id})`}
        initialCategory={product.category}
        inquiryType="bulk"
        isModal={true}
        onSuccess={onClose}
      />
    </Modal>
  );
}
