import { Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function EmergencyBanner() {
  return (
    <div className="bg-[#FDF5EC] border-t border-[#E8D4BE] py-[18px]">
      <Container>
        <div className="flex items-center justify-center gap-2.5 flex-wrap text-center">
          <Heart className="w-3.5 h-3.5 text-primary" />
          <span className="text-[0.8rem] text-text-secondary">
            마음이 많이 힘든 순간에는 청년상담{" "}
            <span className="font-bold text-primary tracking-[0.02em]">
              1388
            </span>{" "}
            또는 마음건강상담{" "}
            <span className="font-bold text-primary tracking-[0.02em]">
              1577-0199
            </span>
            로 연락하실 수 있어요.
          </span>
        </div>
      </Container>
    </div>
  );
}
