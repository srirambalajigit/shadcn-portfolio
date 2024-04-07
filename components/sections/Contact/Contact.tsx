import React from "react";
import { Button } from "@/components/ui/button";
import MotionWrap from "@/components/MotionWrap";

import {
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="contact"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or want to work together? Send me a message using
              the form below.
            </p>
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href="https://youtube.com/@sriram.balaji">
                  <YoutubeIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href="https://github.com/srirambalajigit">
                  <GithubIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a target="_blank" href="https://linkedin.com/in/srirambalaji">
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;