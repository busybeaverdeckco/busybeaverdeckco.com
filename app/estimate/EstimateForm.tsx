"use client";

import { useState } from "react";
import { Send, Check, ArrowLeft } from "lucide-react";
import { CITIES, SERVICES } from "../content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioCard } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Just planning"];

const PROJECT_TYPES = [...SERVICES.map((s) => s.title), "Not sure yet"];

const LABEL =
  "mb-2.5 block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-bone/50";

/** Fill-in-the-blank line input — cedar border on focus. */
function Line({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required = true,
  optional = false,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id} className={LABEL}>
        {label}
        {optional && <span className="ml-1.5 text-bone/25">optional</span>}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
}

function SectionHead({ no, title }: { no: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-3xl font-semibold leading-none text-cedar/35">
        {no}
      </span>
      <h2 className="font-display text-xl text-bone">{title}</h2>
    </div>
  );
}

export default function EstimateForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [city, setCity] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string)?.trim() ?? "";

    if (!city || !projectType || !timeline) {
      setError("Please choose a location, project type, and timeline.");
      return;
    }

    const payload = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      city,
      projectType,
      timeline,
      details: get("details"),
    };

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError(
        "Something went wrong sending your build order. Please try again, or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-cedar/30 bg-white/[0.03] p-10 text-center shadow-card sm:p-14">
        <span className="absolute right-6 top-6 -rotate-12 rounded border-2 border-cedar/50 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.12em] text-cedar/60">
          Received
        </span>
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-cedar bg-cedar/10 text-cedar">
          <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden />
        </span>
        <h3 className="mt-7 font-display text-3xl text-bone">Your build order is in.</h3>
        <p className="mx-auto mt-4 max-w-sm text-pretty leading-relaxed text-bone/65">
          It&apos;s on its way to Josh — he&apos;ll be in touch within one
          business day.
        </p>
        <Button
          type="button"
          variant="link"
          onClick={() => setSent(false)}
          className="mt-8 h-auto p-0 text-sm font-semibold text-cedar-light no-underline transition-colors hover:text-bone hover:no-underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Edit the order
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-xl border border-white/10 bg-[#14191c] shadow-card"
    >
      {/* Flannel header band — the work-order ticket top */}
      <div className="border-b border-white/10 bg-flannel px-6 py-4 sm:px-9">
        <span className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-bone">
          Build Order
        </span>
      </div>

      <div className="space-y-12 px-6 py-10 sm:px-9 sm:py-12">
        {/* 01 — Contact */}
        <fieldset className="space-y-7">
          <SectionHead no="01" title="Customer information" />
          <div className="grid gap-7 sm:grid-cols-2">
            <Line id="name" label="Full name" placeholder="Jane Doe" autoComplete="name" />
            <Line id="email" label="Email" type="email" placeholder="you@email.com" autoComplete="email" />
          </div>
          <Line id="phone" label="Phone" type="tel" placeholder="(425) 555-0123" autoComplete="tel" optional required={false} />
        </fieldset>

        <Separator className="border-t border-dashed border-white/12 bg-transparent" />

        {/* 02 — Location */}
        <fieldset className="space-y-7">
          <SectionHead no="02" title="Where's the build?" />
          <div>
            <Label htmlFor="city" className={LABEL}>
              Project location
            </Label>
            <Select
              name="city"
              required
              value={city}
              onValueChange={(value) => setCity(value as string)}
            >
              <SelectTrigger id="city">
                <SelectValue placeholder="Select your city…" />
              </SelectTrigger>
              <SelectContent>
                {CITIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
                <SelectItem value="Other / nearby PNW">Other / nearby</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </fieldset>

        <Separator className="border-t border-dashed border-white/12 bg-transparent" />

        {/* 03 — Project type */}
        <fieldset className="space-y-7">
          <SectionHead no="03" title="What are we building?" />
          <RadioGroup
            name="projectType"
            required
            value={projectType}
            onValueChange={(value) => setProjectType(value as string)}
            className="grid gap-2.5 sm:grid-cols-2"
          >
            {PROJECT_TYPES.map((type) => (
              <RadioCard key={type} value={type}>
                {type}
              </RadioCard>
            ))}
          </RadioGroup>
        </fieldset>

        <Separator className="border-t border-dashed border-white/12 bg-transparent" />

        {/* 04 — Timeline + vision */}
        <fieldset className="space-y-7">
          <SectionHead no="04" title="The vision" />

          <div>
            <span className={LABEL}>Timeline</span>
            <RadioGroup
              name="timeline"
              required
              value={timeline}
              onValueChange={(value) => setTimeline(value as string)}
              className="flex flex-wrap gap-2.5"
            >
              {TIMELINES.map((t) => (
                <RadioCard
                  key={t}
                  value={t}
                  className="w-auto rounded-full px-4 py-2 data-[checked]:bg-cedar data-[checked]:text-bark"
                >
                  {t}
                </RadioCard>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="details" className={LABEL}>
              Tell us about your space
              <span className="ml-1.5 text-bone/25">optional</span>
            </Label>
            <Textarea
              id="details"
              name="details"
              rows={5}
              placeholder="Square footage, materials you're eyeing, the view, how you want to live out there — anything helps Josh price it right."
            />
          </div>
        </fieldset>

        <div className="pt-2">
          <Button
            type="submit"
            variant="flannel"
            size="brand"
            disabled={submitting}
            className="w-full text-base disabled:opacity-60"
          >
            <Send className="h-4 w-4" aria-hidden />
            {submitting ? "Sending…" : "Send the Build Order"}
          </Button>
          {error && (
            <p className="mt-4 text-center text-sm text-red-300/90">{error}</p>
          )}
          <p className="mt-4 text-center text-xs text-bone/40">
            No spam, no pressure. Your details go straight to Josh.
          </p>
        </div>
      </div>
    </form>
  );
}
