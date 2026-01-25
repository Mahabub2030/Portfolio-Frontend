"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { BorderBeam } from "../../../components/ui/border-beam";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append("access_key", "56c2cc3f-c0a1-4761-aeda-cf757b3415d3");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      // Send data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Try again.");
        console.error(result);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <section className="relative bg-[#020617] min-h-screen px-4 py-12 max-w-7xl mx-auto lg:px-0">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-100 mb-2">
          Get in Touch
        </h2>
        <div className="flex justify-center mb-4">
          <div className="flex flex-col gap-1">
            <div className="w-24 h-[3px] bg-cyan-500 rounded-full mr-16"></div>
            <div className="w-16 h-[3px] bg-purple-500 rounded-full "></div>
          </div>
        </div>
        <p className="text-gray-300 max-w-xl mx-auto">
          I’d love to hear from you! Whether you have a question or just want to
          say hello, feel free to drop a message.
        </p>
      </div>

      {/* Contact Content */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Info */}
        <Card className="relative bg-[#020617] py-5 shadow-md border border-gray-800">
          <BorderBeam duration={6} size={150} className="via-cyan-500" />
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-gray-100">
              Contact Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300 mt-4">
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-500" />
              <span>mahabubalam407557@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-500" />
              <span>+966567065181</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-500" />
              <span>Dammam, Saudi Arabia</span>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="bg-[#020617]  shadow-md border border-gray-800 py-5">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-100">
              Send Message
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your Name"
                          className="bg-[#020617] text-gray-100 border-gray-800"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your Email"
                          className="bg-[#020617] text-gray-100 border-gray-800"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Your Message"
                          className="bg-[#020617] text-gray-100 border-gray-800 min-h-[150px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-gray-100"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
