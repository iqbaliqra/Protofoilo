import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axiosInstance from "@/lib/axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        "/api/v1/message/send",
        { senderName, subject, message },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setSenderName("");
      setSubject("");
      setMessage("");
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message. Please try again.");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="overflow-x-hidden relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="gradient-text">CONTACT ME</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together on your next project
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border 
            border-border shadow-xl">
            <form onSubmit={handleMessage} className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label className="text-base font-semibold">Your Name</Label>
                <Input
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="John Doe"
                  className="h-12 rounded-xl border-2 focus:border-orange-500 transition-colors"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <Label className="text-base font-semibold">Subject</Label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project inquiry"
                  className="h-12 rounded-xl border-2 focus:border-orange-500 transition-colors"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <Label className="text-base font-semibold">Message</Label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background 
                    focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <div className="flex justify-end pt-4">
                {!loading ? (
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full rounded-full px-8 py-6 text-base font-semibold bg-orange-500 
                      hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all 
                      duration-300 hover:scale-105 glow-orange">
                    SEND MESSAGE
                  </Button>
                ) : (
                  <Button
                    disabled
                    size="lg"
                    className="w-full rounded-full px-8 py-6 text-base font-semibold bg-orange-400 
                      cursor-not-allowed"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-5 h-5 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                        opacity="0.25"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Sending...
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
