import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Smile, UserX } from 'lucide-react';

export default function EmoScanHomepage() {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [emotion, setEmotion] = useState("Neutral");
  const [presence, setPresence] = useState("Present");

  useEffect(() => {
    if (isCameraOn) {
      // Simulate emotion detection
      const interval = setInterval(() => {
        const emotions = ["Happy", "Sad", "Angry", "Surprised", "Neutral"];
        setEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
        setPresence(Math.random() > 0.8 ? "Absent" : "Present");
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isCameraOn]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">EmoScan - Emotion & Presence Detection</h1>
      <div className="flex gap-6">
        <Card className="p-4 w-96 flex flex-col items-center">
          <Camera size={48} className="mb-4" />
          <Button onClick={() => setIsCameraOn(!isCameraOn)}>
            {isCameraOn ? "Stop Camera" : "Start Camera"}
          </Button>
          <p className="mt-4 text-lg">Status: {isCameraOn ? "Camera On" : "Camera Off"}</p>
        </Card>
        <Card className="p-4 w-96 flex flex-col items-center">
          <Smile size={48} className="mb-4" />
          <p className="text-lg">Detected Emotion:</p>
          <p className="text-2xl font-semibold mt-2">{emotion}</p>
        </Card>
        <Card className="p-4 w-96 flex flex-col items-center">
          <UserX size={48} className="mb-4" />
          <p className="text-lg">Presence:</p>
          <p className={`text-2xl font-semibold mt-2 ${presence === "Absent" ? "text-red-500" : "text-green-500"}`}>{presence}</p>
        </Card>
      </div>
    </div>
  );
}