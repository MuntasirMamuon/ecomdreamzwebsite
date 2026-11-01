import {
  Atom,
  ChartLine,
  CircleCheck,
  Code,
  HandCoins,
  Images,
  Mails,
  MessageCircleMore,
  ShoppingCart,
  SquarePen,
  ThumbsUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/data/home";
import type { WhyIcon } from "@/data/services-page";

// Lucide stand-ins for the Font Awesome icons used by the reference
// (fa-check-circle, fa-edit, fa-cart-arrow-down, fa-mail-bulk, fa-atom, fa-photo-video).
export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  check: CircleCheck,
  edit: SquarePen,
  cart: ShoppingCart,
  mail: Mails,
  atom: Atom,
  media: Images,
};

// fa-thumbs-up, fa-code, fa-chart-line, fa-users, fa-hand-holding-usd, fa-comment-dots
export const whyIcons: Record<WhyIcon, LucideIcon> = {
  thumbs: ThumbsUp,
  code: Code,
  chart: ChartLine,
  users: Users,
  coins: HandCoins,
  chat: MessageCircleMore,
};
