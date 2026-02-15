import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactTopics } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  topic: z.enum(contactTopics, { message: "Select a topic." }),
  message: z.string().min(20, "Message should be at least 20 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmitState =
  | { kind: "idle" }
  | { kind: "success"; text: string }
  | { kind: "error"; text: string };

export const ContactForm = () => {
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "Partnership",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState({ kind: "idle" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      if (values.message.toLowerCase().includes("error test")) {
        throw new Error("Submission failed. Please email us directly.");
      }

      reset();
      setSubmitState({
        kind: "success",
        text: "Message sent. We will reply soon.",
      });
    } catch (error) {
      const text = error instanceof Error ? error.message : "Something went wrong. Try again.";
      setSubmitState({ kind: "error", text });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-foreground">Name</span>
          <Input
            {...register("name")}
            placeholder="Your name"
            className="h-11 rounded-xl border-border bg-card/70 focus-visible:ring-coral"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <span className="text-xs text-red-400">{errors.name.message}</span> : null}
        </label>

        <label className="space-y-2">
          <span className="text-sm text-foreground">Email</span>
          <Input
            type="email"
            {...register("email")}
            placeholder="you@company.com"
            className="h-11 rounded-xl border-border bg-card/70 focus-visible:ring-coral"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <span className="text-xs text-red-400">{errors.email.message}</span> : null}
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm text-foreground">Topic</span>
        <Controller
          control={control}
          name="topic"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="h-11 rounded-xl border-border bg-card/70 focus:ring-coral">
                <SelectValue placeholder="Choose a topic" />
              </SelectTrigger>
              <SelectContent className="border-border bg-card">
                {contactTopics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.topic ? <span className="text-xs text-red-400">{errors.topic.message}</span> : null}
      </label>

      <label className="block space-y-2">
        <span className="text-sm text-foreground">Message</span>
        <Textarea
          {...register("message")}
          rows={7}
          placeholder="Share the problem, constraints, and timeline."
          className="rounded-xl border-border bg-card/70 focus-visible:ring-coral"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <span className="text-xs text-red-400">{errors.message.message}</span> : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} className="h-11 rounded-full px-6">
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>

        {submitState.kind === "success" ? <p className="text-sm text-coral">{submitState.text}</p> : null}
        {submitState.kind === "error" ? <p className="text-sm text-red-400">{submitState.text}</p> : null}
      </div>
    </form>
  );
};
