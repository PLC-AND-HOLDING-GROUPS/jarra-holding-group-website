"use client";

import React, { useState } from "react";
import { Product } from "@/redux/types/product";
import { useSubmitInquiryMutation } from "@/redux/api/productApi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export default function InquiryForm({ product }: { product: Product }) {
    const [submitInquiry, { isLoading: isSubmitting }] = useSubmitInquiryMutation();
    const [isSuccess, setIsSuccess] = useState(false);
    
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        quantity: "",
        message: ""
    });

    // Simple validation state
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        try {
            await submitInquiry({
                product_id: product.product_id,
                ...formData
            }).unwrap();
            setIsSuccess(true);
        } catch (error) {
            console.error("Failed to submit inquiry:", error);
            // Optionally set a form error state here
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Inquiry Received</h3>
                <p className="text-green-700 max-w-sm mb-6">
                    Thank you for your interest in <strong>{product.name}</strong>. Our commercial team has received your inquiry and will contact you shortly.
                </p>
                <Button 
                    variant="outline" 
                    onClick={() => setIsSuccess(false)}
                    className="border-green-200 text-green-700 hover:bg-green-100"
                >
                    Send Another Inquiry
                </Button>
            </div>
        );
    }

    return (
        <div id="inquiry" className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-heading mb-2">Product Inquiry</h2>
                <p className="text-muted-foreground text-sm">
                    You are inquiring about: <strong className="text-primary">{product.name}</strong>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                        <Input 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input 
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Ltd."
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="quantity">Required Quantity / Specifications</Label>
                    <Input 
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 500 Metric Tons, CIF Port of Djibouti"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                    <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide any additional details about your requirements..."
                        className={`min-h-[120px] resize-none ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-semibold"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending Inquiry...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-5 w-5" />
                            Submit Inquiry
                        </>
                    )}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                    This is a demonstration form. Your data will not be saved or transmitted.
                </p>
            </form>
        </div>
    );
}
