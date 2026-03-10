import { useState } from "react";
import { Play, Clock } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface ComingSoonModalProps {
  buttonLabel?: string;
  buttonClassName?: string;
  buttonSize?: "default" | "sm" | "lg" | "icon";
}

export const ComingSoonModal = ({
  buttonLabel = "Buy Your Pass",
  buttonClassName = "text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 transition-smooth group",
  buttonSize = "lg",
}: ComingSoonModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size={buttonSize}
        variant="outline"
        className={buttonClassName}
        onClick={() => setOpen(true)}
      >
        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
        {buttonLabel}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <DialogTitle className="text-2xl">Coming Soon</DialogTitle>
            <DialogDescription className="text-base mt-2">
              This feature is currently under development and will be available soon. Stay tuned!
            </DialogDescription>
          </DialogHeader>
          <Button className="mt-4 mx-auto" onClick={() => setOpen(false)}>
            Got it
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
